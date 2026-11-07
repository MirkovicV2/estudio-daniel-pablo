import { defineConfig } from '@playwright/test';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const edge = join(
  process.env['PROGRAMFILES(X86)'] || 'C:/Program Files (x86)',
  'Microsoft/Edge/Application/msedge.exe',
);
const channel =
  process.env.PLAYWRIGHT_CHANNEL ||
  (process.platform === 'win32' && existsSync(edge) ? 'msedge' : undefined);
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:4322',
    channel,
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview',
    url: 'http://127.0.0.1:4322',
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
    env: { ASTRO_TELEMETRY_DISABLED: '1' },
  },
});
