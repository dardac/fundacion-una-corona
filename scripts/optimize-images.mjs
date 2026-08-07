/**
 * One-shot image optimizer for static assets in /public.
 * Generates WebP (display + small thumb) to cut bandwidth and decode cost.
 *
 * Run: node scripts/optimize-images.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');

/** @type {{ dir: string, maxW: number, thumbW?: number, quality: number }[]} */
const jobs = [
  { dir: 'miembros', maxW: 720, thumbW: 160, quality: 80 },
  { dir: 'embajadores', maxW: 480, thumbW: 160, quality: 80 },
  { dir: 'images', maxW: 900, quality: 82 },
];

const EXTRA = [
  { src: 'images/trofeo.png', maxW: 600, quality: 82 },
  { src: 'trofeo.jpeg', maxW: 600, quality: 82 },
];

async function convertFile(inputPath, outPath, maxW, quality) {
  const image = sharp(inputPath).rotate();
  const meta = await image.metadata();
  const width = meta.width && meta.width > maxW ? maxW : undefined;
  await image
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(outPath);
  const [inStat, outStat] = await Promise.all([fs.stat(inputPath), fs.stat(outPath)]);
  return { inBytes: inStat.size, outBytes: outStat.size };
}

async function processDir({ dir, maxW, thumbW, quality }) {
  const abs = path.join(publicDir, dir);
  let entries;
  try {
    entries = await fs.readdir(abs);
  } catch {
    return;
  }

  for (const name of entries) {
    if (!/\.(jpe?g|png)$/i.test(name)) continue;
    if (name.includes('-sm.')) continue;
    const base = name.replace(/\.(jpe?g|png)$/i, '');
    const inputPath = path.join(abs, name);
    const outPath = path.join(abs, `${base}.webp`);
    const result = await convertFile(inputPath, outPath, maxW, quality);
    console.log(
      `${dir}/${base}.webp  ${(result.inBytes / 1024).toFixed(0)}KB → ${(result.outBytes / 1024).toFixed(0)}KB`,
    );

    if (thumbW) {
      const thumbPath = path.join(abs, `${base}-sm.webp`);
      const thumb = await convertFile(inputPath, thumbPath, thumbW, Math.min(quality, 78));
      console.log(
        `${dir}/${base}-sm.webp  → ${(thumb.outBytes / 1024).toFixed(0)}KB`,
      );
    }
  }
}

async function main() {
  for (const job of jobs) {
    await processDir(job);
  }
  for (const extra of EXTRA) {
    const inputPath = path.join(publicDir, extra.src);
    try {
      await fs.access(inputPath);
    } catch {
      continue;
    }
    const parsed = path.parse(extra.src);
    const outPath = path.join(publicDir, parsed.dir, `${parsed.name}.webp`);
    const result = await convertFile(inputPath, outPath, extra.maxW, extra.quality);
    console.log(
      `${parsed.dir}/${parsed.name}.webp  ${(result.inBytes / 1024).toFixed(0)}KB → ${(result.outBytes / 1024).toFixed(0)}KB`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
