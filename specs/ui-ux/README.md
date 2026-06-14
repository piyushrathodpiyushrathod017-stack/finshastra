# UI/UX Specifications

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

## Layout Principles

1. **Mobile-First:** Design for 375px viewport first, scale up.
2. **Content-First:** Article content is the hero. No distractions.
3. **Speed-First:** Every design decision evaluated against performance impact.
4. **Trust-First:** Professional, clean design. No dark patterns.
5. **Accessibility-First:** WCAG 2.1 AA minimum.

## Mobile-First Design

| Requirement | Specification |
|-------------|---------------|
| **Minimum Viewport** | 320px (iPhone SE) |
| **Maximum Viewport** | 428px (iPhone 14 Pro Max) |
| **Breakpoints** | 375px, 640px, 768px, 1024px, 1280px |
| **Touch Targets** | Minimum 44x44px |
| **Font Size** | Minimum 16px body (prevents iOS zoom) |
| **Spacing** | Minimum 8px between interactive elements |
| **Navigation** | Hamburger menu on mobile, horizontal nav on desktop |

## Accessibility Standards

| Standard | Requirement |
|----------|-------------|
| **WCAG Level** | AA minimum |
| **Color Contrast** | 4.5:1 for normal text, 3:1 for large text |
| **Keyboard Navigation** | All interactive elements focusable and operable |
| **Focus Indicators** | Visible focus ring on all interactive elements |
| **Alt Text** | Every image has descriptive alt text |
| **ARIA Labels** | Used for interactive elements without visible labels |
| **Skip Navigation** | "Skip to main content" link at top of page |
| **Heading Hierarchy** | H1 then H2 then H3, never skip levels |
| **Form Labels** | Every form input has associated label |
| **Error Messages** | Clear, descriptive error messages |
| **Reduced Motion** | Respect `prefers-reduced-motion` media query |

## Typography Rules

| Element | Font | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|------|---------------|----------------|--------|-------------|
| H1 | Inter | 28px | 40px | 700 | 1.2 |
| H2 | Inter | 22px | 32px | 600 | 1.3 |
| H3 | Inter | 18px | 24px | 600 | 1.4 |
| Body | Inter | 16px | 18px | 400 | 1.6 |
| Small | Inter | 14px | 14px | 400 | 1.5 |
| Code | JetBrains Mono | 14px | 14px | 400 | 1.5 |

**Font Loading:**
- Self-host Inter font files (not Google Fonts CDN)
- Preload critical font weights: 400, 600, 700
- Use `font-display: swap`
- Maximum 2 font families

## Color Rules

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #2563EB | Links, buttons, active states |
| `--color-primary-dark` | #1D4ED8 | Hover states |
| `--color-primary-light` | #DBEAFE | Backgrounds, subtle highlights |

### Secondary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | #10B981 | Positive outcomes, success states |
| `--color-warning` | #F59E0B | Caution states, attention |
| `--color-error` | #EF4444 | Errors, negative outcomes |
| `--color-info` | #3B82F6 | Informational callouts |

### Neutral Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | #111827 | Main body text |
| `--color-text-secondary` | #6B7280 | Secondary text, captions |
| `--color-text-muted` | #9CA3AF | Placeholder text |
| `--color-bg-primary` | #FFFFFF | Page background |
| `--color-bg-secondary` | #F9FAFB | Card backgrounds |
| `--color-bg-tertiary` | #F3F4F6 | Subtle backgrounds |
| `--color-border` | #E5E7EB | Borders, dividers |

**Color Rules:**
- Never use color alone to convey meaning
- Test all color combinations for WCAG contrast
- Trust-building colors: blue, white, gray, green
- Avoid red except for error states

## Component Rules

### Buttons
| Type | Usage | Style |
|------|-------|-------|
| Primary | Main CTAs | Blue bg, white text, rounded-lg |
| Secondary | Secondary actions | White bg, blue border, blue text |
| Tertiary | Low-emphasis actions | No bg, blue text |
| Ghost | Inline actions | No bg, gray text |

**Button Rules:**
- Minimum height: 44px (mobile touch target)
- Minimum padding: 12px 24px
- Clear, action-oriented labels
- Loading state for async actions
- Maximum 1 primary button per viewport

### Cards
| Type | Usage |
|------|-------|
| Article Card | Homepage, related articles |
| Bank Card | Programmatic pages |
| Feature Card | Homepage sections |
| FAQ Card | FAQ sections |

**Card Rules:**
- Consistent padding: 16px or 24px
- Subtle border or shadow (not both)
- Hover state (subtle lift)
- Responsive: stack on mobile, grid on desktop

### Forms
| Rule | Specification |
|------|---------------|
| Labels | Always visible |
| Validation | Real-time with clear error messages |
| Required Fields | Asterisk (*) with explanation |
| Input Types | Correct HTML5 types |
| Autocomplete | Use autocomplete attributes |
| Submit Button | Clear action label |
| Success State | Clear confirmation message |

### Navigation
| Rule | Specification |
|------|---------------|
| Mobile | Hamburger menu with slide-in panel |
| Desktop | Horizontal nav with dropdowns |
| Sticky | Header sticky on scroll |
| Active State | Clear visual indicator |
| Breadcrumbs | Show on every page except homepage |
| Max Depth | 2 levels of dropdown nesting |
| CTA in Nav | One prominent CTA |

## Trust Elements

| Element | Placement |
|---------|-----------|
| Author Bio | Below article title |
| Last Updated Date | Below article title |
| Affiliate Disclosure | Top of monetized articles |
| Expert Review Badge | Article sidebar |
| Official Data Sources | In-content citations |
| Contact Information | Footer |
| Privacy Policy Link | Footer, near forms |

## Conversion Elements

| Element | Purpose | Placement |
|---------|---------|-----------|
| CTA Button | Drive action | After key content sections |
| Comparison Table | Help users decide | In comparison articles |
| Calculator Widget | Interactive engagement | In EMI/eligibility articles |
| Newsletter Signup | Build return audience | End of articles |
| Related Articles | Increase engagement | End of articles |
| Quick Links Box | Internal linking | Top of pillar pages |

**Conversion Rules:**
- Maximum 3 CTAs per viewport on mobile
- CTAs must be relevant to content context
- No popups, no interstitials, no slide-ins at MVP
- No false urgency: "Limited Time Offer" is forbidden
- Every CTA must have clear value proposition

## UX Anti-Patterns (NEVER Do These)

| Anti-Pattern | Why Forbidden |
|-------------|---------------|
| Popup on page load | Destroy trust, increase bounce |
| Interstitial ads | Google penalizes |
| Auto-playing video | Data cost, battery drain |
| Infinite scroll on articles | Bad for SEO, accessibility |
| Carousel on homepage | Low engagement |
| Fake testimonials | Legal liability |
| Fake "X people are viewing" | Dark pattern |
| Fake countdown timers | Dark pattern |
| Misleading CTAs | Manipulation |
| Bait-and-switch content | Trust destruction |
| Excessive cookie banners | Consent fatigue |
| Notification popup on load | Annoying |
| Social sharing buttons with 3rd party scripts | Performance killer |