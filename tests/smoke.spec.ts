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
    const header = page.locator('header');
    await expect(header.getByRole('link', { name: /work with me/i })).toBeVisible();
  });

  test('about section is present', async ({ page }) => {
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#about h2')).toContainText(/Built for Teams/i);
  });

  test('services section has four service cards', async ({ page }) => {
    const services = page.locator('#services');
    await expect(services).toBeVisible();
    await expect(services.locator('.service-card')).toHaveCount(4);
  });

  test('who-we-work-with section is present', async ({ page }) => {
    await expect(page.locator('#work')).toBeVisible();
    await expect(page.locator('#work h2')).toContainText(/Who I Work With/i);
  });

  test('contact section is present', async ({ page }) => {
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('#contact h2')).toContainText(/Let's Talk/i);
  });

  test('hero CTA scrolls to contact section', async ({ page }) => {
    await page.locator('.hero').getByRole('link', { name: /work with me/i }).click();
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('footer shows current year copyright', async ({ page }) => {
    const year = new Date().getFullYear().toString();
    await expect(page.locator('footer')).toContainText(year);
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
    await expect(page.locator('h1')).toBeVisible();
  });
});
