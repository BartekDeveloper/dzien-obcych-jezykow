import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const route of ['', 'hiszpania/', 'meksyk/', 'gry/']) {
  test(`layout and accessibility: ${route || 'home'}`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(route || './');
    await page.evaluate(() => document.fonts.ready);
    for (const width of [360, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
      const header = await page.locator('header').boundingBox();
      expect(header.height).toBeLessThan(105);
      for (const mark of await page.locator('.wodny').all()) {
        const bounds = await mark.boundingBox();
        const title = await mark.locator('..').locator('h2').boundingBox();
        if (bounds && title) expect(bounds.y + bounds.height <= title.y || bounds.x >= title.x + title.width).toBe(true);
      }
    }
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
    expect(errors).toEqual([]);
    await page.screenshot({ path: `test-results/${route.replace('/', '') || 'home'}-desktop.png`, fullPage: true });
  });
}

test('home has no lesson plan or platform pitch', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('body')).not.toContainText(/Scenariusz lekcji|modułach platformy|Materiał na 1 lekcję/);
});

test('mobile menu works with keyboard and returns focus', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('./');
  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('all local fragment links have targets', async ({ page }) => {
  for (const route of ['', 'hiszpania/', 'meksyk/', 'gry/']) {
    await page.goto(route || './');
    const broken = await page.evaluate(() => [...document.querySelectorAll('a[href*="#"]')].filter(a => {
      const u = new URL(a.href);
      return u.pathname === location.pathname && u.hash && !document.getElementById(decodeURIComponent(u.hash.slice(1)));
    }).map(a => a.getAttribute('href')));
    expect(broken).toEqual([]);
  }
});
