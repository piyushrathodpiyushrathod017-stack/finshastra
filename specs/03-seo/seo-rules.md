# SEO Rules

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Core SEO Principles

1. **White Hat Only** — No black hat techniques
2. **User-First** — Content for users, not just search engines
3. **EEAT** — Experience, Expertise, Authoritativeness, Trustworthiness
4. **Technical Excellence** — Fast, accessible, crawlable
5. **Topical Authority** — Deep coverage of financial topics

## Technical SEO Rules

### Metadata Requirements

Every page MUST have:

```html
<title>{Primary Keyword} | {Secondary Keyword} - FinShastra</title>
<meta name="description" content="{120-158 chars, includes primary keyword, has CTA}" />
<link rel="canonical" href="https://finshastra.in/{slug}" />
<meta name="robots" content="index, follow" />
```

**Title Rules:**
- 50-60 characters max
- Primary keyword in first 40 characters
- Brand name at end: " - FinShastra"
- No keyword stuffing
- Unique across entire site

**Description Rules:**
- 120-158 characters
- Include primary keyword naturally
- Include a CTA or value proposition
- Unique per page
- Must make sense as a search snippet

### Open Graph Rules

```html
<meta property="og:title" content="{same as title}" />
<meta property="og:description" content="{same as meta description}" />
<meta property="og:image" content="https://finshastra.in/og/{slug}.png" />
<meta property="og:url" content="https://finshastra.in/{slug}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="FinShastra" />
```

### Twitter Card Rules

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@finshastra" />
<meta name="twitter:title" content="{same as title}" />
<meta name="twitter:description" content="{same as meta description}" />
<meta name="twitter:image" content="https://finshastra.in/og/{slug}.png" />
```

### Canonical URL Rules

- Every page has an explicit canonical tag
- Self-referencing canonicals
- Canonical always points to HTTPS, non-WWW, no trailing slash

### Sitemap Rules

- Auto-generated at build time or on schedule
- `/sitemap.xml` — index sitemap
- `/sitemap-{vertical}.xml` — section sitemaps
- Maximum 50,000 URLs per sitemap file
- Include `<lastmod>` dates
- Noindex pages excluded from sitemap
- Submit to Google Search Console weekly

### Robots Rules

```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /draft/
Disallow: /search?
Disallow: /thank-you/

Sitemap: https://finshastra.in/sitemap.xml
```

### Schema Markup Rules

Every page MUST implement appropriate JSON-LD schema:

| Page Type | Required Schema |
|-----------|----------------|
| Homepage | Organization, WebSite, SearchAction |
| Category Hub | CollectionPage, BreadcrumbList |
| Article | Article, BreadcrumbList, FAQPage (if FAQ exists) |
| Author | Person, BreadcrumbList |
| Calculator | SoftwareApplication, BreadcrumbList |
| Comparison | Article, BreadcrumbList, FAQPage |
| Legal | WebPage, BreadcrumbList |
| Programmatic | FinancialProduct, BreadcrumbList, FAQPage |

## Allowed SEO Practices

1. Keyword research using Ahrefs/SEMrush/Google Keyword Planner
2. Semantic keyword usage (LSI, related terms)
3. Natural internal linking
4. FAQ schema for featured snippets
5. HowTo schema for step-by-step guides
6. Image alt text with descriptive, keyword-relevant text
7. URL structure following content hierarchy
8. Regular content audits and updates
9. Page speed optimization
10. Mobile-first indexing compliance
11. E-E-A-T signals (author bios, credentials, citations)
12. Programmatic pages with unique, valuable content
13. Content pruning (remove/update thin content)
14. Linkable asset creation (original data, surveys, research)
15. Comparison pages (HDFC vs SBI, etc.)
16. Best-of pages (best credit cards, best personal loans)
17. Alternative pages (alternatives to X)

## Forbidden SEO Practices

| Practice | Why Forbidden |
|----------|---------------|
| Keyword Stuffing | Panda penalty, poor UX |
| AI-Generated Spam | Google spam policy violation |
| Duplicate Content | Cannibalization, thin content signals |
| Doorway Pages | Google doorway page penalty |
| Hidden Text/Links | Manual action penalty |
| Cloaking | Serving different content to bots vs humans |
| Link Schemes | Buying/selling links |
| PBN (Private Blog Networks) | Link manipulation |
| Scraper Content | Copyright violation + thin content |
| Exact-Match Domains Manipulation | Over-optimization penalty |
| Parasite SEO | Publishing on high-authority domains |
| Expired Domain Abuse | Buying old domains for redirect authority |
| Sneaky Redirects | Hidden redirects |
| Structured Data Abuse | Rich results manipulation |
| Thin Affiliate Pages | No unique value, just affiliate links |
| Auto-Generated Content at Scale | Without human review |
| Scaled Content Abuse | Thousands of low-quality pages |