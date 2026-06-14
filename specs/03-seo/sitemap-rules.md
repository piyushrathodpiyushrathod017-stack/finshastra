# Sitemap Rules

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Sitemap Structure

```
/sitemap.xml              <- Index sitemap
/sitemap-articles.xml     <- Article pages
/sitemap-categories.xml   <- Category pages
/sitemap-authors.xml      <- Author pages
/sitemap-banks.xml        <- Bank pages
/sitemap-tools.xml        <- Tool pages
/sitemap-legal.xml        <- Legal pages
/sitemap-programmatic.xml <- Programmatic pages
```

## Sitemap Format

### Index Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://finshastra.in/sitemap-articles.xml</loc>
    <lastmod>2026-06-14</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://finshastra.in/sitemap-categories.xml</loc>
    <lastmod>2026-06-14</lastmod>
  </sitemap>
  ...
</sitemapindex>
```

### URL Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://finshastra.in/credit-score</loc>
    <lastmod>2026-06-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ...
</urlset>
```

## Rules

| Rule | Specification |
|------|---------------|
| **Maximum URLs** | 50,000 per sitemap file |
| **Last Modified** | Include `<lastmod>` dates |
| **Excluded Pages** | Noindex pages excluded |
| **HTTPS** | All URLs use HTTPS |
| **No Trailing Slash** | No trailing slashes |
| **Lowercase** | All URLs lowercase |
| **Submission** | Submit to Google Search Console weekly |

## Change Frequency

| Page Type | Changefreq |
|-----------|------------|
| Homepage | daily |
| Category Hub | weekly |
| Article | monthly |
| Programmatic | monthly |
| Legal | yearly |
| Author | monthly |

## Priority

| Page Type | Priority |
|-----------|----------|
| Homepage | 1.0 |
| Category Hub | 0.8 |
| Article | 0.6 |
| Programmatic | 0.5 |
| Legal | 0.3 |

## Generation

Sitemaps are auto-generated at build time using:

```typescript
// lib/sitemap.ts
export function generateSitemap() {
  // Fetch all published pages
  // Generate XML
  // Write to public/sitemap.xml
}
```

## Monitoring

1. Check Google Search Console weekly for sitemap errors
2. Monitor indexed pages vs submitted pages
3. Fix any crawl errors promptly
4. Update sitemap when new pages are added