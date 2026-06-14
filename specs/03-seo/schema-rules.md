# Schema Rules

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Overview

Structured data helps search engines understand your content and display rich results. Every page MUST implement appropriate JSON-LD schema.

## Schema Types by Page

| Page Type | Required Schema | Optional Schema |
|-----------|----------------|-----------------|
| Homepage | Organization, WebSite | SearchAction |
| Category Hub | CollectionPage, BreadcrumbList | ItemList |
| Article | Article, BreadcrumbList | FAQPage (if FAQ exists) |
| Author | Person, BreadcrumbList | — |
| Calculator | SoftwareApplication, BreadcrumbList | HowTo |
| Comparison | Article, BreadcrumbList | FAQPage |
| Legal | WebPage, BreadcrumbList | — |
| Programmatic | FinancialProduct, BreadcrumbList | FAQPage |

## Schema Templates

### Article Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://finshastra.in/{slug}"
  },
  "headline": "{title}",
  "description": "{metaDescription}",
  "image": "https://finshastra.in/og/{slug}.png",
  "author": {
    "@type": "Person",
    "name": "{authorName}",
    "url": "https://finshastra.in/author/{authorSlug}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "FinShastra",
    "logo": {
      "@type": "ImageObject",
      "url": "https://finshastra.in/logo.png"
    }
  },
  "datePublished": "{publishedAt}",
  "dateModified": "{updatedAt}"
}
```

### FAQ Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{question}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{answer}"
      }
    }
  ]
}
```

### BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://finshastra.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{category}",
      "item": "https://finshastra.in/{category}"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{article}",
      "item": "https://finshastra.in/{category}/{article}"
    }
  ]
}
```

### FinancialProduct Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "{productName}",
  "description": "{description}",
  "provider": {
    "@type": "Organization",
    "name": "{bankName}"
  },
  "category": "{productType}",
  "url": "https://finshastra.in/{slug}"
}
```

### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FinShastra",
  "url": "https://finshastra.in",
  "logo": "https://finshastra.in/logo.png",
  "sameAs": [
    "https://twitter.com/finshastra",
    "https://linkedin.com/company/finshastra"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "support@finshastra.in"
  }
}
```

### WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "FinShastra",
  "url": "https://finshastra.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://finshastra.in/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

## Schema Validation

1. Use Google's Rich Results Test to validate
2. Use Schema.org validator for comprehensive checking
3. Test all schema types before deployment
4. Monitor Google Search Console for schema errors

## Common Schema Mistakes

| Mistake | Fix |
|---------|-----|
| Missing required fields | Include all required properties |
| Incorrect data types | Use correct types (string, number, etc.) |
| Mismatched URLs | Ensure URLs match actual page URLs |
| Missing images | Include images where required |
| Invalid dates | Use ISO 8601 format |
| Nested schema errors | Validate nested structures |