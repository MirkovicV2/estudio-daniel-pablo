import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';

const paths = [
  '/',
  '/servicios/',
  '/estudio/',
  '/proyectos/deja-vu/',
  '/contacto/',
  '/equipo/daniel/',
];
const screenshotDirectory = 'artifacts/screenshots';

for (const path of paths) {
  test(`HTML, accesibilidad y enlaces: ${path}`, async ({
    page,
    request,
    baseURL,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /.+/,
    );
    await expect(page).toHaveTitle(/Daniel & Pablo/);
    expect(
      await page.locator('script[type="application/ld+json"]').count(),
    ).toBeGreaterThan(0);
    const structuredData = JSON.parse(
      await page.locator('script[type="application/ld+json"]').innerText(),
    );
    expect(structuredData['@type']).toBe('Organization');
    await expect(page.locator('form')).toHaveCount(0);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.evaluate(() => document.fonts.ready);
    const accessibility = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(accessibility.violations).toEqual([]);
    const links = await page
      .locator('a[href]')
      .evaluateAll((anchors) =>
        anchors.map((a) => a.getAttribute('href') || ''),
      );
    const internal = [...new Set(links.filter((href) => href.startsWith('/')))];
    for (const href of internal) {
      const target = new URL(href, baseURL);
      const linkedPage = await request.get(target.pathname);
      expect(linkedPage.status(), href).toBe(200);
      if (target.hash) {
        const html = await linkedPage.text();
        const id = decodeURIComponent(target.hash.slice(1));
        expect(html.includes(`id="${id}"`), href).toBe(true);
      }
    }
    const brokenImages = await page.locator('img').evaluateAll(
      (images) =>
        images.filter((element) => {
          const image = element as HTMLImageElement;
          return !image.complete || image.naturalWidth === 0;
        }).length,
    );
    expect(brokenImages).toBe(0);
    expect(errors).toEqual([]);
  });
}

for (const width of [375, 768, 1440]) {
  test(`Sin desbordamiento y capturas a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 960 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await mkdir(screenshotDirectory, { recursive: true });
    for (const path of paths) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const size = await page.evaluate(() => ({
        content: document.documentElement.scrollWidth,
        viewport: window.innerWidth,
      }));
      expect(size.content, path).toBeLessThanOrEqual(size.viewport + 1);
      await expect(page.locator('main h1')).toBeInViewport();
      if (path === '/') {
        await page.screenshot({
          path: `${screenshotDirectory}/inicio-${width}.png`,
          animations: 'disabled',
        });
        await page.screenshot({
          path: `${screenshotDirectory}/inicio-completa-${width}.png`,
          fullPage: true,
          animations: 'disabled',
        });
      }
      if (path === '/proyectos/deja-vu/' && width !== 768) {
        await page.screenshot({
          path: `${screenshotDirectory}/caso-deja-vu-${width}.png`,
          animations: 'disabled',
        });
      }
      if (path === '/equipo/daniel/') {
        await page.screenshot({
          path: `${screenshotDirectory}/perfil-daniel-${width}.png`,
          fullPage: true,
          animations: 'disabled',
        });
      }
    }
  });
}

test('Menú móvil, teclado y ruta de error', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const menu = page.locator('[data-mobile-menu]');
  const summary = menu.locator('summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('open', '');
  await page.keyboard.press('Escape');
  await expect(menu).not.toHaveAttribute('open', '');
  await expect(summary).toBeFocused();
  await summary.click();
  await menu.getByRole('link', { name: 'Hablemos' }).click();
  await expect(page).toHaveURL(/\/contacto\//);
  await expect(page.locator('main h1')).toBeVisible();
  const missing = await page.goto('/esta-ruta-no-existe/');
  expect(missing?.status()).toBe(404);
  await expect(page.locator('main')).toContainText(/404/);
  await page
    .getByRole('link', { name: 'Volver al inicio', exact: true })
    .click();
  await expect(page).toHaveURL('/');
});

test('Contenido disponible sin JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
    viewport: { width: 375, height: 812 },
  });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.locator('main h1')).toBeVisible();
  await expect(
    page.locator('.work-feature, .featured-project').first(),
  ).toBeVisible();
  await page.locator('[data-mobile-menu] summary').click();
  await expect(page.locator('[data-mobile-menu] nav')).toBeVisible();
  const service = page.locator('.service-preview-detail').nth(2);
  await service.locator('summary').click();
  await expect(service.locator('.service-preview-body')).toBeVisible();
  await expect(service.locator('.service-preview-body')).toContainText(
    'herramienta',
  );
  await context.close();
});

test('Servicios de portada con teclado y cambio de preferencia de movimiento', async ({
  page,
}) => {
  await page.goto('/');
  const services = page.locator('.service-preview-detail');
  await expect(services).toHaveCount(5);
  const content = services.nth(1);
  await content.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(content).toHaveAttribute('open', '');
  await expect(services.first()).not.toHaveAttribute('open', '');
  await expect(content.locator('.service-preview-body')).toBeVisible();
  await expect(
    content.getByRole('link', { name: 'Ver qué incluye' }),
  ).toHaveAttribute('href', '/servicios/#contenido-promocion');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.will-reveal')).toHaveCount(0);
  expect(
    await page
      .locator('h1')
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('none');
});

test('Preferencia de movimiento reducido', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const state = await page.locator('h1').evaluate((element) => ({
    animation: getComputedStyle(element).animationName,
    scroll: getComputedStyle(document.documentElement).scrollBehavior,
  }));
  expect(state.animation).toBe('none');
  expect(state.scroll).toBe('auto');
  expect(await page.locator('.will-reveal').count()).toBe(0);
});

test('Servicios accesibles con teclado y sin envíos', async ({ page }) => {
  await page.goto('/servicios/');
  const automation = page.locator('#automatizacion');
  await automation.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(automation).toHaveAttribute('open', '');
  await expect(automation.locator('.service-detail-body')).toContainText(
    'estudio de viabilidad',
  );
  await page.goto('/servicios/#gestion-integraciones');
  await expect(page.locator('#gestion-integraciones')).toHaveAttribute(
    'open',
    '',
  );
  await page.goto('/contacto/');
  await expect(
    page.getByRole('link', { name: 'Abrir correo para Daniel' }),
  ).toHaveAttribute('href', 'mailto:danieldoral7@gmail.com');
  await expect(
    page.getByRole('link', { name: 'Abrir correo para Pablo' }),
  ).toHaveAttribute('href', 'mailto:pablocastillo0002@gmail.com');
  await expect(page.locator('form')).toHaveCount(0);
  await expect(page.locator('a[href*="/equipo/pablo"]')).toHaveCount(0);
});
