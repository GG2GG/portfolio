import { test, expect } from '@playwright/test';

test.describe('Services Page Tests', () => {

    test('Check if Services page loads', async ({ page }) => {
        // Navigate to /services
        const response = await page.goto('/services');

        // Check for 404 or 500
        expect(response?.status()).toBe(200);

        // Check if critical content is visible
        // "About Me" title from portfolioData via AboutSection (or whatever it renders)
        // "More Than Just Code"
        await expect(page.locator('text=More Than').first()).toBeVisible();

        // Check if Footer is present
        await expect(page.locator('footer')).toBeVisible();
    });

});
