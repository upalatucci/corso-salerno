import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_DIR =
  process.env.GALLERY_SOURCE ??
  join(
    process.env.HOME ?? "",
    "Downloads/wetransfer_aldo-e-ludovica_2026-10-14_1347",
  );
const OUT_DIR = join(root, "public/gallery");
const MANIFEST_PATH = join(root, "src/data/gallery.json");
const APPEND =
  process.env.GALLERY_APPEND === "1" || process.env.GALLERY_APPEND === "true";

const MAX_EDGE = 1920;
const WEBP_QUALITY = 82;
const THUMB_EDGE = 480;
const THUMB_QUALITY = 78;

const IMAGE_EXT = /\.(jpe?g|png)$/i;

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(full)));
    } else if (IMAGE_EXT.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function slugifySegment(segment) {
  return segment
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function outputName(sourcePath) {
  const fileBase = slugifySegment(basename(sourcePath));
  return `${fileBase}.webp`;
}

async function processOne(sourcePath, outPath, thumbPath) {
  const [srcStat, outStat] = await Promise.all([
    stat(sourcePath),
    stat(outPath).catch(() => null),
  ]);

  if (
    outStat &&
    outStat.mtimeMs >= srcStat.mtimeMs &&
    (await stat(thumbPath).catch(() => null))?.mtimeMs >= srcStat.mtimeMs
  ) {
    return { skipped: true };
  }

  const pipeline = sharp(sourcePath).rotate().resize({
    width: MAX_EDGE,
    height: MAX_EDGE,
    fit: "inside",
    withoutEnlargement: true,
  });

  await pipeline.clone().webp({ quality: WEBP_QUALITY }).toFile(outPath);

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: THUMB_EDGE,
      height: THUMB_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: THUMB_QUALITY })
    .toFile(thumbPath);

  return { skipped: false };
}

async function loadExistingManifest() {
  try {
    const raw = await readFile(MANIFEST_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(dirname(MANIFEST_PATH), { recursive: true });

  const sources = (await collectImages(SOURCE_DIR)).sort();
  if (sources.length === 0) {
    console.error(`No images found under ${SOURCE_DIR}`);
    process.exit(1);
  }

  const existingManifest = APPEND ? await loadExistingManifest() : [];
  const knownSrc = new Set(existingManifest.map((entry) => entry.src));

  console.log(
    `${APPEND ? "Appending" : "Processing"} ${sources.length} photos → ${OUT_DIR}`,
  );
  if (APPEND && existingManifest.length > 0) {
    console.log(`  Keeping ${existingManifest.length} existing manifest entries`);
  }

  const manifest = [...existingManifest];
  let processed = 0;
  let added = 0;
  let skipped = 0;

  for (const sourcePath of sources) {
    processed += 1;
    const name = outputName(sourcePath);
    const thumbName = name.replace(/\.webp$/, "-thumb.webp");
    const src = `/gallery/${name}`;
    const thumb = `/gallery/${thumbName}`;

    if (knownSrc.has(src)) {
      skipped += 1;
      continue;
    }

    const outPath = join(OUT_DIR, name);
    const thumbPath = join(OUT_DIR, thumbName);

    await processOne(sourcePath, outPath, thumbPath);
    const thumbMeta = await sharp(thumbPath).metadata();
    const id = name.replace(/\.webp$/i, "");
    manifest.push({
      id,
      src,
      thumb,
      alt: "Corso Salerno 2026 — Marina di Camerota",
      width: thumbMeta.width ?? 480,
      height: thumbMeta.height ?? 360,
    });
    knownSrc.add(src);
    added += 1;

    if (processed % 25 === 0 || processed === sources.length) {
      console.log(`  ${processed}/${sources.length}`);
    }
  }

  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  console.log(
    `Wrote manifest (${manifest.length} items, +${added} new, ${skipped} skipped)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
