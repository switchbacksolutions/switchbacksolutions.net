import { test, expect } from '@playwright/test';

test.describe('Blog listing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Switchback Solutions/);
  });

  test('renders the hero heading', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Writing');
  });

  test('lists at least one post', async ({ page }) => {
    const posts = page.locator('a[href^="/blog/"]');
    await expect(posts.first()).toBeVisible();
  });

  test('post cards show title, date, and description', async ({ page }) => {
    const firstCard = page.locator('.post-card').first();
    await expect(firstCard.locator('.post-title')).toBeVisible();
    await expect(firstCard.locator('time')).toBeVisible();
    await expect(firstCard.locator('.post-description')).toBeVisible();
  });

  test('nav includes Blog link', async ({ page, isMobile }) => {
    // Nav is hidden on mobile via CSS; only check desktop
    test.skip(isMobile, 'Nav links hidden on mobile');
    await expect(page.locator('header').getByRole('link', { name: /blog/i })).toBeVisible();
  });
});

test.describe('Blog post detail page', () => {
  test('loads an individual post', async ({ page }) => {
    await page.goto('/blog');
    const firstPostLink = page.locator('a[href^="/blog/"]').first();
    const href = await firstPostLink.getAttribute('href');
    await page.goto(href!);

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('time')).toBeVisible();
    await expect(page.locator('.post-body')).toBeVisible();
  });

  test('back link returns to blog listing', async ({ page }) => {
    await page.goto('/blog');
    const firstPostLink = page.locator('a[href^="/blog/"]').first();
    const href = await firstPostLink.getAttribute('href');
    await page.goto(href!);

    await page.getByRole('link', { name: /back to writing/i }).click();
    await expect(page).toHaveURL(/\/blog/);
  });

  test('renders post body content', async ({ page }) => {
    await page.goto('/blog');
    const firstPostLink = page.locator('a[href^="/blog/"]').first();
    const href = await firstPostLink.getAttribute('href');
    await page.goto(href!);

    const body = page.locator('.post-body');
    await expect(body).toBeVisible();
    // Should have at least some paragraph text
    await expect(body.locator('p').first()).toBeVisible();
  });
});
