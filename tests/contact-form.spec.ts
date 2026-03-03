import { test, expect } from '@playwright/test';

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('renders all form fields', async ({ page }) => {
    const form = page.locator('#contact-form');
    await expect(form).toBeVisible();
    await expect(form.locator('input[name="name"]')).toBeVisible();
    await expect(form.locator('input[name="email"]')).toBeVisible();
    await expect(form.locator('textarea[name="message"]')).toBeVisible();
    await expect(form.locator('button[type="submit"]')).toBeVisible();
  });

  test('has accessible labels for all fields', async ({ page }) => {
    await expect(page.getByLabel('Name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Message')).toBeVisible();
  });

  test('honeypot bot-field is hidden', async ({ page }) => {
    const botField = page.locator('input[name="bot-field"]');
    await expect(botField).toBeHidden();
  });

  test('form has Netlify attributes', async ({ page }) => {
    const form = page.locator('#contact-form');
    await expect(form).toHaveAttribute('data-netlify', 'true');
    await expect(form).toHaveAttribute('method', 'POST');
    await expect(form.locator('input[name="form-name"]')).toHaveValue('contact');
  });

  test('required fields block submission when empty', async ({ page }) => {
    await page.locator('button[type="submit"]').click();
    // Browser native validation prevents submission; form should still be visible
    await expect(page.locator('#contact-form')).toBeVisible();
    await expect(page.locator('#form-success')).toBeHidden();
  });

  test('shows success state after valid submission', async ({ page }) => {
    // Intercept the Netlify form POST and return a 200
    await page.route('/contact', async (route) => {
      if (route.request().method() === 'POST') {
        await route.fulfill({ status: 200, body: 'OK' });
      } else {
        await route.continue();
      }
    });

    await page.getByLabel('Name').fill('Jane Doe');
    await page.getByLabel('Email').fill('jane@example.com');
    await page.getByLabel('Message').fill('I would love to work together on my project.');

    await page.locator('button[type="submit"]').click();

    await expect(page.locator('#form-success')).toBeVisible();
    await expect(page.locator('#contact-form')).toBeHidden();
  });

  test('shows error message when submission fails', async ({ page }) => {
    await page.route('/contact', async (route) => {
      if (route.request().method() === 'POST') {
        await route.fulfill({ status: 500, body: 'Error' });
      } else {
        await route.continue();
      }
    });

    await page.getByLabel('Name').fill('Jane Doe');
    await page.getByLabel('Email').fill('jane@example.com');
    await page.getByLabel('Message').fill('Testing error path.');

    await page.locator('button[type="submit"]').click();

    const errorEl = page.locator('#form-error');
    await expect(errorEl).toBeVisible();
    await expect(errorEl).toContainText(/something went wrong/i);
    // Submit button re-enabled
    await expect(page.locator('button[type="submit"]')).not.toBeDisabled();
  });
});
