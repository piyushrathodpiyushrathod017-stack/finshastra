# Design System

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Design Principles

1. **Mobile-First** — Design for 375px viewport first, scale up
2. **Content-First** — Article content is the hero, no distractions
3. **Speed-First** — Every design decision evaluated against performance
4. **Trust-First** — Professional, clean design, no dark patterns
5. **Accessibility-First** — WCAG 2.1 AA minimum

## Typography

### Font Family

- **Primary:** Inter
- **Monospace:** JetBrains Mono

### Font Sizes

| Element | Mobile | Desktop | Weight | Line Height |
|---------|--------|---------|--------|-------------|
| H1 | 28px | 40px | 700 | 1.2 |
| H2 | 22px | 32px | 600 | 1.3 |
| H3 | 18px | 24px | 600 | 1.4 |
| Body | 16px | 18px | 400 | 1.6 |
| Small | 14px | 14px | 400 | 1.5 |
| Code | 14px | 14px | 400 | 1.5 |

### Font Loading

- Self-host Inter font files (not Google Fonts CDN)
- Preload critical font weights: 400, 600, 700
- Use `font-display: swap`
- Maximum 2 font families

## Colors

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

### Color Rules

- Never use color alone to convey meaning
- Test all color combinations for WCAG contrast
- Trust-building colors: blue, white, gray, green
- Avoid red except for error states

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 4px | Minimal spacing |
| `--spacing-sm` | 8px | Small spacing |
| `--spacing-md` | 16px | Standard spacing |
| `--spacing-lg` | 24px | Large spacing |
| `--spacing-xl` | 32px | Extra large spacing |
| `--spacing-2xl` | 48px | Section spacing |

## Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | 0 1px 2px 0 rgb(0 0 0 / 0.05) | Subtle shadows |
| `--shadow-md` | 0 4px 6px -1px rgb(0 0 0 / 0.1) | Card shadows |
| `--shadow-lg` | 0 10px 15px -3px rgb(0 0 0 / 0.1) | Elevated shadows |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Small elements |
| `--radius-md` | 8px | Standard elements |
| `--radius-lg` | 12px | Large elements |
| `--radius-full` | 9999px | Pills, circles |