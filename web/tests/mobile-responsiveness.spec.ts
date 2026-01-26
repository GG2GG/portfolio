import { test, expect } from '@playwright/test';

test.describe('Mobile Optimization Tests', () => {

    test('US-001: Mobile Navigation Toggle', async ({ page, isMobile }) => {
        // Only run on mobile
        if (!isMobile) test.skip();

        await page.goto('/');

        // 1. Desktop Nav links should be hidden/collapsed
        // (Implementation check: MobileMenu hidden by default)
        const menu = page.locator('text=ALWAYS BUILDING THE FUTURE').first(); // Decoration in menu
        await expect(menu).toBeHidden();

        // 2. Click Hamburger (Rive Player container)
        // The Rive container has a click handler. We might need a better selector if Rive swallows it.
        // Navbar.tsx: <div className="... cursor-pointer z-[1000]" onClick=...>
        // Let's locate by class or hierarchy. 
        // It's the div containing the RivePlayer.
        const hamburger = page.locator('nav').locator('div.cursor-pointer').last();
        await hamburger.click();

        // WAIT for GSAP Animation (0.6s + delay)
        await page.waitForTimeout(1000);

        // 3. Verify Menu Opens
        // MobileMenu.tsx uses GSAP to translate Y. Playwright checks visibility.
        // The Decoration text is a good proxy.
        const homeLink = page.locator('.mobile-link').filter({ hasText: 'HOME' });
        await expect(homeLink).toBeVisible();

        // 4. Click Link acts as close
        await homeLink.click();

        // Wait for close animation
        await page.waitForTimeout(1000);
        await expect(homeLink).toBeHidden();
    });

    test('US-002: Project Showcase (Mobile Carousel vs Desktop Fan)', async ({ page, isMobile }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle'); // Ensure styles loaded

        if (isMobile) {
            // Mobile View
            const carousel = page.locator('.snap-x'); // The mobile carousel has snap-x class
            await expect(carousel).toBeVisible();

            const fanParams = page.locator('.perspective-\\[1000px\\]'); // Existing desktop class
            await expect(fanParams).toBeHidden();
        } else {
            // Desktop View
            const carousel = page.locator('.snap-x');
            await expect(carousel).toBeHidden();

            const fanParams = page.locator('.perspective-\\[1000px\\]');
            await expect(fanParams).toBeVisible();
        }
    });

    test('US-003: Mission Log Layout (Stack vs Split)', async ({ page, isMobile }) => {
        await page.goto('/');

        // Mission Log is further down.
        const missionRail = page.locator('.mission-panel').first().locator('.w-full.md\\:w-\\[30\\%\\]');

        // On mobile, check if it's visible. 
        // The "Stack" logic is purely CSS classes (flex-col vs flex-row).
        // Playwright `toHaveCSS` is strict.
        // We want to ensure height characteristics.

        if (isMobile) {
            // Check if flex direction is column
            const panel = page.locator('.mission-panel').first();
            await expect(panel).toHaveCSS('flex-direction', 'column');
        } else {
            const panel = page.locator('.mission-panel').first();
            await expect(panel).toHaveCSS('flex-direction', 'row');
        }
    });

    test('US-004: Footer Visibility', async ({ page, isMobile }) => {
        await page.goto('/');

        if (!isMobile) test.skip();

        // Scroll to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        // Trigger custom event to reveal footer animations
        await page.evaluate(() => window.dispatchEvent(new Event('scroll-complete')));
        await page.waitForTimeout(1000); // Wait for GSAP reveal

        // Check Mascot Size (w-40 h-40 on mobile)
        const mascot = page.locator('.mascot-head');
        await expect(mascot).toHaveClass(/w-40/); // Mobile class

        // Check Links are clickable (not obscured)
        // "Pages" Header
        const footerHeader = page.locator('text=Pages');
        await expect(footerHeader).toBeVisible();
    });

});
