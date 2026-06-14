# Performance Specifications

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

## Required Performance Targets

| Metric | Target |
|--------|--------|
| **Lighthouse Performance** | >= 90 |
| **LCP** | < 2.5s |
| **INP** | < 200ms |
| **CLS** | < 0.1 |
| **FID** | < 100ms |
| **TTFB** | < 800ms |
| **Total Page Size** | < 500KB (initial load) |
| **JavaScript Bundle** | < 150KB (gzipped) |
| **CSS Bundle** | < 50KB (gzipped) |
| **Image Size per Page** | < 200KB total |
| **Font Files** | < 100KB total |
| **Third-Party Scripts** | < 50KB total |
| **Time to Interactive** | < 3.5s on 3G |

## Image Optimization Rules

| Rule | Specification |
|------|---------------|
| **Format** | WebP primary, JPEG fallback, SVG for icons |
| **Responsive Images** | `<picture>` with srcset, 3 sizes: 640px, 1024px, 1280px |
| **Lazy Loading** | All images below-fold: `loading="lazy"` |
| **Above-fold Images** | Preload: `loading="eager"` + `<link rel="preload">` |
| **Alt Text** | Descriptive alt text on every image |
| **Dimensions** | Always specify width/height attributes (prevents CLS) |
| **Compression** | Maximum 80% quality for WebP, 85% for JPEG |
| **Max Image Size** | No single image > 200KB |
| **OG Images** | 1200x630px, auto-generated per article |

## Caching Strategy

| Resource | Cache Duration |
|----------|---------------|
| **HTML Pages (SSG)** | 1 hour (ISR) |
| **Static Assets** | 1 year (immutable) |
| **Images** | 30 days |
| **Fonts** | 1 year (immutable) |
| **API Responses** | 5 minutes |

## Performance Anti-Patterns

| Anti-Pattern | Why Forbidden |
|-------------|---------------|
| Client-Side Rendering for all pages | Slow TTFB, bad for SEO |
| Unoptimized images (PNG for photos) | Massive page sizes |
| Inline all CSS/JS | No caching benefit |
| Third-party script bloat | Performance killer |
| No image lazy loading | Loads all images on page load |
| Render-blocking resources in head | Delays FCP |
| No code-splitting | Single large bundle |
| No prefetching for navigation | Slow perceived performance |
| Synchronous third-party scripts | Blocks main thread |
| Long tasks (>50ms) on main thread | INP degradation |