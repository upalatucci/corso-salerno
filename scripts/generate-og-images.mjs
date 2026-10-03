import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ogDir = join(root, "public/articoli/og");
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const MAX_BYTES = 200_000;

/** @type {{ out: string; src: string }[]} */
const images = [
  {
    out: "insegnare-agli-altri-al-100.jpg",
    src: "public/articoli/franco-gregorio.jpg",
  },
  {
    out: "una-vittoria-per-kosen.jpg",
    src: "public/articoli/giuseppe-palatucci.jpg",
  },
  {
    out: "al-via-il-corso-autunnale-2026.jpg",
    src: "public/articoli/al-via-corso-2026.jpg",
  },
  {
    out: "loris-andrea-giardini.jpg",
    src: "public/video/loris-andrea-giardini-thumb.jpg",
  },
  {
    out: "lettura-gosho-volume-i.jpg",
    src: "public/articoli/video-12-settembre-2026-thumb.jpg",
  },
  {
    out: "video-19-settembre-2026.jpg",
    src: "public/video/gosho-parte-2-thumb.jpg",
  },
  {
    out: "lettura-gosho-parte-iii.jpg",
    src: "public/video/gosho-parte-3-thumb.jpg",
  },
  {
    out: "lettura-gosho-parte-iv.jpg",
    src: "public/video/gosho-parte-4-thumb.jpg",
  },
];

async function writeOgImage({ src, out }) {
  const input = join(root, src);
  const output = join(ogDir, out);
  let quality = 82;

  while (quality >= 50) {
    const buffer = await sharp(input)
      .resize(OG_WIDTH, OG_HEIGHT, { fit: "cover", position: "centre" })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();

    if (buffer.byteLength <= MAX_BYTES || quality === 50) {
      await sharp(buffer).toFile(output);
      console.log(
        `${out}: ${Math.round(buffer.byteLength / 1024)}KB (q${quality})`,
      );
      return;
    }

    quality -= 6;
  }
}

await mkdir(ogDir, { recursive: true });

const defaultBuffer = await sharp(join(root, "public/articoli/al-via-corso-2026.jpg"))
  .resize(OG_WIDTH, OG_HEIGHT, { fit: "cover", position: "centre" })
  .jpeg({ quality: 80, mozjpeg: true })
  .toBuffer();

await sharp(defaultBuffer).toFile(join(root, "public/og-default.jpg"));
console.log(`og-default.jpg: ${Math.round(defaultBuffer.byteLength / 1024)}KB`);

for (const image of images) {
  await writeOgImage(image);
}
