# PRD: Mobile Optimization Tests

## Introduction
Implement an automated End-to-End (E2E) testing suite using Playwright to verify the responsiveness and mobile adaptability of the portfolio website. This ensures that critical user journeys (Navigation, Projects, Missions) function correctly across different device viewports.

## Goals
- Verify that **Mobile Navigation** opens/closes and links are clickable.
- Confirm **Project Showcase** switches between "Fan" (Desktop) and "Carousel" (Mobile).
- Confirm **Mission Log** switches between "Split" (Desktop) and "Stack" (Mobile).
- Ensure **Footer** content is visible and layout adapts.
- Catch regression bugs where mobile users might be blocked from content.

## User Stories

### US-001: Verify Mobile Navigation
**Description:** As a mobile user, I need to open the menu to navigate, since the desktop links are hidden.
**Acceptance Criteria:**
- [ ] Hamburger icon is visible on mobile (< 768px).
- [ ] Clicking Hamburger opens the `MobileMenu` overlay.
- [ ] `MobileMenu` contains links: Home, Work, About, Contact.
- [ ] Clicking "Close" or a Link closes the menu.
- [ ] Desktop view (> 768px) does NOT show the mobile menu overlay by default.

### US-002: Verify Project Showcase Adaptation
**Description:** As a user, I want the correct interaction model for my device (Touch for mobile, Hover for desktop).
**Acceptance Criteria:**
- [ ] **Mobile (< 768px)**:
    - [ ] `snap-x` Carousel container is visible.
    - [ ] Desktop "Fan" container is hidden (`hidden md:flex`).
    - [ ] Cards are relative and scrollable.
- [ ] **Desktop (> 768px)**:
    - [ ] "Fan" container is visible.
    - [ ] Mobile Carousel is hidden.

### US-003: Verify Mission Log Layout
**Description:** As a user, I want to read case studies without jumping back and forth on screen.
**Acceptance Criteria:**
- [ ] **Mobile**:
    - [ ] Layout is a single vertical column.
    - [ ] "Rail" (Header) is `relative` or `sticky` but visually stacked above Content.
    - [ ] No fixed 50vh splitting that cuts off content.
- [ ] **Desktop**:
    - [ ] Layout is Split Row (`flex-row`).
    - [ ] Left Rail is sticky `h-screen`.

### US-004: Verify Footer Visibility
**Description:** As a user, I want to see footer links without them being clipped.
**Acceptance Criteria:**
- [ ] Footer container expands to fit content on mobile.
- [ ] Mascot does not obscure "Follow On" links.
- [ ] Links are clickable (z-index check).

## Functional Requirements
- FR-1: Install Playwright and configure for Mobile (iPhone 13) and Desktop (1920x1080) viewports.
- FR-2: Create a single test file `tests/mobile-responsiveness.spec.ts`.
- FR-3: Run tests in headless mode and report results.

## Non-Goals
- Visual Regression Testing (Pixel-perfect matching).
- Content correctness (Spelling/Grammar).

## Technical Considerations
- Use `page.setViewportSize()` to simulate devices.
- Use `expect(locator).toBeVisible()` and `expect(locator).toBeHidden()` for logic checks.
- Run against local server (e.g., `http://localhost:3002`).

## Success Metrics
- All tests pass on local machine.
- Execution time < 30s.
