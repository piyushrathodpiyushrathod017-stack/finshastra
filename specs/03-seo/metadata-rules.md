# Metadata Rules

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Title Tag Rules

### Format

```
{Primary Keyword} | {Secondary Keyword} - FinShastra
```

### Requirements

| Rule | Specification |
|------|---------------|
| **Length** | 50-60 characters max |
| **Primary Keyword** | In first 40 characters |
| **Brand Name** | At end: " - FinShastra" |
| **Uniqueness** | Unique across entire site |
| **No Stuffing** | Natural keyword usage |

### Examples

```html
<title>CIBIL Score: What It Is & How to Check Free - FinShastra</title>
<title>Best Personal Loan Interest Rates 2026 - FinShastra</title>
<title>Top 10 Credit Cards in India - FinShastra</title>
```

## Meta Description Rules

### Requirements

| Rule | Specification |
|------|---------------|
| **Length** | 120-158 characters |
| **Primary Keyword** | Include naturally |
| **CTA** | Include call-to-action or value proposition |
| **Uniqueness** | Unique per page |
| **Search Snippet** | Must make sense as search result |

### Examples

```html
<meta name="description" content="Check your CIBIL score for free online. Learn what a good score is and how to improve it. Expert guidance from FinShastra." />
<meta name="description" content="Compare personal loan interest rates from 50+ banks. Find the lowest rates starting at 10.5% p.a. Apply online now." />
```

## Canonical URL Rules

### Requirements

| Rule | Specification |
|------|---------------|
| **Self-Referencing** | Every page has canonical pointing to itself |
| **HTTPS** | Always use HTTPS |
| **No WWW** | Use non-WWW version |
| **No Trailing Slash** | No trailing slash |
| **Lowercase** | All lowercase URLs |

### Examples

```html
<link rel="canonical" href="https://finshastra.in/credit-score" />
<link rel="canonical" href="https://finshastra.in/personal-loan/emi-calculator" />
```

## Open Graph Rules

### Required Tags

```html
<meta property="og:title" content="{same as title}" />
<meta property="og:description" content="{same as meta description}" />
<meta property="og:image" content="https://finshastra.in/og/{slug}.png" />
<meta property="og:url" content="https://finshastra.in/{slug}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="FinShastra" />
```

### Image Requirements

| Property | Specification |
|----------|---------------|
| **Dimensions** | 1200x630px |
| **Format** | PNG |
| **Max Size** | 1MB |
| **Text** | Include article title |
| **Branding** | Include FinShastra logo |

## Twitter Card Rules

### Required Tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@finshastra" />
<meta name="twitter:title" content="{same as title}" />
<meta name="twitter:description" content="{same as meta description}" />
<meta name="twitter:image" content="https://finshastra.in/og/{slug}.png" />
```

## Robots Meta Rules

### Standard

```html
<meta name="robots" content="index, follow" />
```

### Noindex

```html
<meta name="robots" content="noindex, follow" />
```

### When to Use Noindex

- Search results pages
- Thank you pages
- Admin pages
- Duplicate content pages
- Thin content pages

## Structured Data Rules

### Implementation

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  ...schema data...
}
</script>
```

### Placement

- In `<head>` section
- Before closing `</head>` tag
- One schema per page (or nested)

## Meta Verification Tags

```html
<meta name="google-site-verification" content="your-verification-code" />
<meta name="msvalidate.01" content="your-bing-verification-code" />
```

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Duplicate titles | Ensure unique titles per page |
| Missing meta descriptions | Add descriptions to all pages |
| Wrong canonical URLs | Use correct, self-referencing canonicals |
| Missing OG tags | Add all required OG tags |
| Invalid structured data | Validate with Google's tools |
| Keyword stuffing in titles | Use natural keyword placement |