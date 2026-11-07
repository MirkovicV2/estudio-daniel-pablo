import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { resolve, sep, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const output = resolve(root, 'artifacts', 'seo-fixture');
assert(
  output.startsWith(root + sep),
  'La salida de prueba debe permanecer dentro del proyecto.',
);
const original = await readFile(join(root, 'dist', 'index.html'), 'utf8');
const site = 'https://seo-fixture.invalid';
const result = spawnSync(
  process.execPath,
  [
    join(root, 'node_modules', 'astro', 'bin', 'astro.mjs'),
    'build',
    '--outDir',
    output,
  ],
  {
    cwd: root,
    env: {
      ...process.env,
      ASTRO_TELEMETRY_DISABLED: '1',
      SITE_URL: site,
      PUBLIC_STUDIO_URL: 'https://studio-fixture.invalid/',
      PUBLIC_DANIEL_PORTFOLIO_URL: 'https://portfolio-fixture.invalid/',
    },
    encoding: 'utf8',
  },
);
assert.equal(result.status, 0, result.stderr || result.stdout);
const html = await readFile(join(output, 'index.html'), 'utf8');
assert(html.includes(`rel="canonical" href="${site}/"`));
assert(html.includes(`property="og:url" content="${site}/"`));
assert(html.includes(`property="og:image" content="${site}/og.png"`));
assert(html.includes('content="index, follow"'));
const index = await readFile(join(output, 'sitemap-index.xml'), 'utf8');
assert(index.includes(`${site}/sitemap-0.xml`));
const sitemap = await readFile(join(output, 'sitemap-0.xml'), 'utf8');
assert(sitemap.includes(`<loc>${site}/</loc>`));
assert(sitemap.includes(`<loc>${site}/contacto/</loc>`));
assert(!sitemap.includes('/404'));
const robots = await readFile(join(output, 'robots.txt'), 'utf8');
assert(robots.includes(`Sitemap: ${site}/sitemap-index.xml`));
assert(robots.includes('Allow: /'));
const missing = await readFile(join(output, '404.html'), 'utf8');
assert(missing.includes('content="noindex, nofollow"'));
const aboutPath = join(output, 'sobre-mi', 'index.html');
if (existsSync(aboutPath)) {
  assert(
    (await readFile(aboutPath, 'utf8')).includes(
      'href="https://studio-fixture.invalid/"',
    ),
  );
}
const danielPath = join(output, 'equipo', 'daniel', 'index.html');
if (existsSync(danielPath)) {
  assert(
    (await readFile(danielPath, 'utf8')).includes(
      'href="https://portfolio-fixture.invalid/"',
    ),
  );
}
assert.equal(
  await readFile(join(root, 'dist', 'index.html'), 'utf8'),
  original,
  'La prueba no debe modificar dist.',
);
console.log(
  'SEO verificado: canonical, Open Graph, robots, sitemap y enlaces configurables. Fixture .invalid aislada en artifacts; dist permanece intacto.',
);
