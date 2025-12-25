/*
 * Simple PNG favicon generator using 'sharp'.
 * Usage:
 * 1) npm i sharp --save-dev
 * 2) node scripts/generate-favicons.js
 * The script reads 'src/assets/images/medicares-badge.svg' and writes PNGs to the same folder.
 */
const fs = require('fs');
const path = require('path');

async function main() {
  const sharpAvailable = (() => {
    try { require.resolve('sharp'); return true; } catch(e) { return false; }
  })();

  if (!sharpAvailable) {
    console.error("'sharp' is not installed. Run: npm i sharp --save-dev then re-run this script.");
    process.exit(1);
  }

  const sharp = require('sharp');
  const src = path.join(__dirname, '..', 'src', 'assets', 'images', 'medicares-badge.svg');
  const outDir = path.dirname(src);

  if (!fs.existsSync(src)) {
    console.error('Source SVG not found at', src);
    process.exit(1);
  }

  const sizes = [16, 32, 48];
  for (const s of sizes) {
    const out = path.join(outDir, `favicon-${s}.png`);
    await sharp(src)
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out);
    console.log('Wrote', out);
  }
}

main().catch(err => { console.error(err); process.exit(1); });