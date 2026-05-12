/**
 * Makes near-white pixels transparent (for process step PNG icons).
 * Run: node scripts/remove-png-white-background.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const PROCESS_DIR = path.join("public", "images", "process");

function removeWhiteBackground(data) {
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const a = out[i + 3];
    const minC = Math.min(r, g, b);
    const maxC = Math.max(r, g, b);

    // Do not touch dark strokes or mid-gray drawing lines
    if (minC < 210) continue;

    // Solid white / nearly white
    if (minC >= 252) {
      out[i + 3] = 0;
      continue;
    }

    // Light, almost neutral pixels: anti-alias between ink and white background
    if (minC >= 220 && maxC - minC <= 18) {
      const t = Math.min(1, (minC - 205) / 50);
      out[i + 3] = Math.round(a * (1 - t * 0.98));
    }
  }
  return out;
}

const files = fs
  .readdirSync(PROCESS_DIR)
  .filter((f) => f.startsWith("process-icon-") && f.endsWith(".png"));

for (const file of files) {
  const inputPath = path.join(PROCESS_DIR, file);
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const processed = removeWhiteBackground(data);
  await sharp(processed, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toFile(inputPath + ".tmp");

  fs.rmSync(inputPath);
  fs.renameSync(inputPath + ".tmp", inputPath);
  console.log("OK", file);
}
