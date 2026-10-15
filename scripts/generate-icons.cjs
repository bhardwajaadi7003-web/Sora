const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Minimal pure-JS PNG generator
function createPNG(width, height, getPixel) {
  const rowSize = width * 4 + 1; // 1 filter byte per row
  const rawData = Buffer.alloc(height * rowSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 4;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  function createChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const body = Buffer.concat([typeBuf, data]);
    const crc = crc32(body);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc, 0);
    return Buffer.concat([len, body, crcBuf]);
  }

  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let j = 0; j < 8; j++) {
        c = (c >>> 1) ^ (-(c & 1) & 0xedb88320);
      }
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8-bit depth
  ihdr[9] = 6; // Color type: RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace

  const header = Buffer.from([137, 80, 78, 79, 13, 10, 26, 10]); // PNG signature
  const ihdrChunk = createChunk('IHDR', ihdr);
  const idatChunk = createChunk('IDAT', deflated);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

// Draw SORA Gold emblem icon on matte black
function soraPixel(x, y, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const maxR = w * 0.45;

  // Background: Matte Black #121212
  let r = 18, g = 18, b = 18, a = 255;

  // Gold outer circular rim (#D4AF37 = 212, 175, 55)
  if (Math.abs(dist - maxR) < w * 0.015) {
    r = 212; g = 175; b = 55;
  } else if (Math.abs(dist - (maxR * 0.85)) < w * 0.008) {
    r = 212; g = 175; b = 55;
  } else if (dist < maxR * 0.45) {
    // Subtle central gold glow
    const factor = 1 - (dist / (maxR * 0.45));
    r = Math.min(255, 18 + Math.floor(factor * 120));
    g = Math.min(255, 18 + Math.floor(factor * 95));
    b = Math.min(255, 18 + Math.floor(factor * 30));
  }

  // Draw central cross / star geometric element
  if (Math.abs(dx) < w * 0.02 && Math.abs(dy) < h * 0.22) {
    r = 238; g = 219; b = 145; // bright gold
  }
  if (Math.abs(dy) < h * 0.02 && Math.abs(dx) < w * 0.22) {
    r = 238; g = 219; b = 145; // bright gold
  }

  return [r, g, b, a];
}

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate 192x192, 512x512, apple-touch-icon 180x180
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), createPNG(192, 192, soraPixel));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), createPNG(512, 512, soraPixel));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), createPNG(512, 512, soraPixel));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createPNG(180, 180, soraPixel));

console.log('Generated PNG icons in /public successfully.');
