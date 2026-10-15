import { readdir, rename, stat, unlink, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const GALLERY_DIR = join(root, "public/gallery");

/** Match scripts/build-gallery.mjs so rebuilds stay consistent. */
const WEBP_QUALITY = 82;
const THUMB_QUALITY = 78;
const WEBP_EFFORT = 4;

async function collectWebps(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectWebps(full)));
    } else if (entry.name.toLowerCase().endsWith(".webp")) {
      files.push(full);
    }
  }
  return files.sort();
}

async function optimizeOne(filePath) {
  const isThumb = filePath.includes("-thumb.webp");
  const quality = isThumb ? THUMB_QUALITY : WEBP_QUALITY;
  const before = await stat(filePath);

  const buffer = await sharp(filePath)
    .webp({ quality, effort: WEBP_EFFORT })
    .toBuffer();

  const minSaved = Math.max(512, Math.floor(before.size * 0.01));
  if (before.size - buffer.length < minSaved) {
    return { saved: 0, skipped: true };
  }

  const tempPath = `${filePath}.opt`;
  await writeFile(tempPath, buffer);
  await rename(tempPath, filePath);
  return { saved: before.size - buffer.length, skipped: false };
}

async function main() {
  const files = await collectWebps(GALLERY_DIR);
  if (files.length === 0) {
    console.error(`No WebP files in ${GALLERY_DIR}`);
    process.exit(1);
  }

  console.log(`Optimizing ${files.length} files in ${GALLERY_DIR}`);

  let totalSaved = 0;
  let optimized = 0;
  let skipped = 0;

  for (let i = 0; i < files.length; i += 1) {
    const result = await optimizeOne(files[i]);
    if (result.skipped) {
      skipped += 1;
    } else {
      optimized += 1;
      totalSaved += result.saved;
    }
    if ((i + 1) % 50 === 0 || i + 1 === files.length) {
      console.log(`  ${i + 1}/${files.length}`);
    }
  }

  const mb = (totalSaved / 1024 / 1024).toFixed(2);
  console.log(
    `Done: ${optimized} re-written, ${skipped} already optimal, ${mb} MB saved`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
