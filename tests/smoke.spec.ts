import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Switchback Solutions/);
  });

  test('renders hero section with headline and CTA', async ({ page }) => {
    const hero = page.locator('.hero');
    await expect(hero).toBeVisible();
    await expect(hero.getByRole('link', { name: /work with me/i })).toBeVisible();
  });

  test('navigation links are present', async ({ page }) => {
    // On desktop: visible in header. On mobile: visible in hero. Check page-level.
    await expect(page.getByRole('link', { name: /work with me/i }).first()).toBeVisible();
  });

  test('about section is present', async ({ page }) => {
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#about h2')).toContainText(/Your Technical Leader/i);
  });

  test('services section has three service cards', async ({ page }) => {
    const services = page.locator('#services');
    await expect(services).toBeVisible();
    await expect(services.locator('.service-card')).toHaveCount(3);
  });

  test('who-we-work-with section is present', async ({ page }) => {
    await expect(page.locator('#work')).toBeVisible();
    await expect(page.locator('#work h2')).toContainText(/Who I Work With/i);
  });

  test('hero CTA links to contact page', async ({ page }) => {
    const cta = page.locator('.hero').getByRole('link', { name: /work with me/i });
    await expect(cta).toHaveAttribute('href', /\/contact/);
  });

  test('footer shows current year copyright', async ({ page }) => {
    const year = new Date().getFullYear().toString();
    await expect(page.locator('footer')).toContainText(year);
  });
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('hamburger button is visible on narrow screens', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#hamburger-btn')).toBeVisible();
  });

  test('desktop nav links are hidden on narrow screens', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.nav')).toBeHidden();
  });

  test('mobile menu opens when hamburger is clicked', async ({ page }) => {
    await page.goto('/');
    await page.locator('#hamburger-btn').click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await expect(page.locator('#mobile-menu').getByRole('link', { name: /portfolio/i })).toBeVisible();
    await expect(page.locator('#mobile-menu').getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(page.locator('#mobile-menu').getByRole('link', { name: /about/i })).toBeVisible();
  });

  test('mobile menu closes when hamburger is clicked again', async ({ page }) => {
    await page.goto('/');
    await page.locator('#hamburger-btn').click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await page.locator('#hamburger-btn').click();
    await expect(page.locator('#mobile-menu')).toBeHidden();
  });

  test('mobile menu closes when a nav link is clicked', async ({ page }) => {
    await page.goto('/');
    await page.locator('#hamburger-btn').click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await page.locator('#mobile-menu').getByRole('link', { name: /blog/i }).click();
    await expect(page.locator('#mobile-menu')).toBeHidden();
  });

  test('hamburger aria-expanded updates on toggle', async ({ page }) => {
    await page.goto('/');
    const btn = page.locator('#hamburger-btn');
    await expect(btn).toHaveAttribute('aria-expanded', 'false');
    await btn.click();
    await expect(btn).toHaveAttribute('aria-expanded', 'true');
    await btn.click();
    await expect(btn).toHaveAttribute('aria-expanded', 'false');
  });
});

test.describe('Work / Portfolio page', () => {
  test('loads and lists portfolio items', async ({ page }) => {
    await page.goto('/work');
    await expect(page).toHaveTitle(/Switchback Solutions/);
    // Portfolio items should render as links
    const items = page.locator('a[href^="/work/"]');
    await expect(items.first()).toBeVisible();
  });

  test('individual portfolio item pages load', async ({ page }) => {
    await page.goto('/work');
    const firstItem = page.locator('a[href^="/work/"]').first();
    const href = await firstItem.getAttribute('href');
    await page.goto(href!);
    await expect(page.locator('h1.detail-title')).toBeVisible();
  });
});
