import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { brand } from '../src/content/site.ts';
const wordmark = brand.wordmark
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');
const descriptor = brand.descriptor
  .toLocaleUpperCase('es')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f5f3ec"/><path d="M64 105H1136M64 540H1136" stroke="#d6d4ca"/><text x="64" y="70" font-family="Arial,sans-serif" font-size="28" letter-spacing="-1" fill="#252620">Daniel &amp; Pablo</text><text x="945" y="70" font-family="Arial,sans-serif" font-size="16" fill="#252620">ESTUDIO DIGITAL</text><g font-family="Arial,sans-serif" font-size="80" letter-spacing="-4" fill="#252620"><text x="64" y="228">Tu negocio,</text><text x="64" y="324" font-family="Georgia,serif" font-style="italic">bien presentado</text><text x="64" y="420" fill="#2348d8">y mejor conectado.</text></g><text x="64" y="585" font-family="Arial,sans-serif" font-size="18" fill="#64655e">DISEÑO + DESARROLLO + CONTENIDO · RIVAS / MADRID / EN REMOTO</text><circle cx="1050" cy="301" r="90" fill="#c9d0f3"/><text x="976" y="356" font-family="Georgia,serif" font-style="italic" font-size="160" fill="#2348d8">&amp;</text></svg>`;
await mkdir('public', { recursive: true });
await sharp(
  Buffer.from(
    svg
      .replace('Daniel &amp; Pablo', wordmark)
      .replace('ESTUDIO DIGITAL', descriptor),
  ),
)
  .png()
  .toFile('public/og.png');
