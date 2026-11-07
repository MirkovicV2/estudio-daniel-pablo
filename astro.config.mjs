import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

if (existsSync('.env')) process.loadEnvFile('.env');
const site = process.env.SITE_URL?.trim() || undefined;
if (site && !/^https?:\/\//.test(site))
  throw new Error('SITE_URL debe ser una URL http(s) real.');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    ...(site
      ? [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/404') })]
      : []),
  ],
  server: { host: '127.0.0.1', port: 4322 },
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'never' },
});
