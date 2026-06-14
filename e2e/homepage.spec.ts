import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/FinShastra/);
  });

  test('has hero section', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('can navigate to credit score page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /credit score/i }).first().click();
    await expect(page).toHaveURL(/credit-score/);
  });

  test('can navigate to personal loan page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /personal loan/i }).first().click();
    await expect(page).toHaveURL(/personal-loan/);
  });

  test('can navigate to credit cards page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /credit card/i }).first().click();
    await expect(page).toHaveURL(/credit-cards/);
  });

  test('search button navigates to search page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /search/i }).first().click();
    await expect(page).toHaveURL(/search/);
  });
});

test.describe('Footer', () => {
  test('footer is visible with company info', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('FinShastra');
  });

  test('footer contains policy links', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    await expect(footer.getByRole('link', { name: /privacy/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /terms/i })).toBeVisible();
  });
});

test.describe('404 Page', () => {
  test('shows 404 for unknown routes', async ({ page }) => {
    await page.goto('/nonexistent-page');
    await expect(page.getByText(/not found/i)).toBeVisible();
  });
});

test.describe('Mobile Responsive', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('mobile nav works on iPhone viewport', async ({ page }) => {
    await page.goto('/');
    const menuButton = page.getByRole('button', { name: /menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    const mobileNav = page.getByRole('dialog');
    await expect(mobileNav).toBeVisible();
  });

  test('homepage renders on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/FinShastra/);
  });
});
