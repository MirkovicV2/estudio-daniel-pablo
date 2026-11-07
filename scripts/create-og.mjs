import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { brand } from '../src/content/site.ts';

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
const wordmark = escapeXml(brand.wordmark);
const descriptor = escapeXml(brand.descriptor.toLocaleUpperCase('es'));
const headline = brand.headline.split(/(?<=[.!?])\s+/);
const lineOne = escapeXml(headline[0] ?? brand.headline);
const lineTwo = escapeXml(headline.slice(1).join(' ') || 'Estudio digital.');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f7f3ea"/><path d="M64 105H1136M64 540H1136" stroke="#d3d0c3"/><text x="64" y="70" font-family="Arial,sans-serif" font-size="28" letter-spacing="-1" fill="#25271f">${wordmark}</text><text x="945" y="70" font-family="Arial,sans-serif" font-size="16" fill="#25271f">${descriptor}</text><g font-family="Arial,sans-serif" font-size="80" letter-spacing="-4" fill="#25271f"><text x="64" y="250">${lineOne}</text><text x="64" y="360" fill="#bd4d32">${lineTwo}</text></g><text x="64" y="585" font-family="Arial,sans-serif" font-size="18" fill="#64665d">DISEÑO + DESARROLLO + CONTENIDO · RIVAS / MADRID / REMOTO</text><circle cx="1050" cy="301" r="90" fill="#f1d2c4"/><path d="M1020 370V232H1063C1092 232 1108 250 1108 278C1108 306 1092 324 1063 324H1020M1020 278H1082" fill="none" stroke="#bd4d32" stroke-width="14" stroke-linecap="square" stroke-linejoin="miter"/></svg>`;
await mkdir('public', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/og.png');
