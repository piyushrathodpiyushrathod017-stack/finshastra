# Article Page Specification

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
├─────────────────────────────────────────────────────────────┤
│                      BREADCRUMBS                            │
├─────────────────────────────────────────────────────────────┤
│                    ARTICLE HEADER                           │
│                    (Title, Author, Date)                    │
├─────────────────────────────────────────────────────────────┤
│                      ARTICLE CONTENT                        │
├─────────────────────────────────────────────────────────────┤
│                       FAQ SECTION                           │
├─────────────────────────────────────────────────────────────┤
│                    RELATED ARTICLES                          │
├─────────────────────────────────────────────────────────────┤
│                       NEWSLETTER                            │
├─────────────────────────────────────────────────────────────┤
│                         FOOTER                              │
└─────────────────────────────────────────────────────────────┘
```

## Article Header

### Requirements

| Element | Specification |
|---------|---------------|
| **Title** | H1, 50-60 characters |
| **Author** | Author name with link to author page |
| **Author Photo** | Small circular photo |
| **Date** | Published date and last updated date |
| **Category** | Category name with link |
| **Read Time** | Estimated reading time |

### Design Rules

- Title above fold
- Author info below title
- Clear visual hierarchy
- Mobile: Stack vertically
- Desktop: Title and meta side-by-side

## Article Content

### Requirements

| Element | Specification |
|---------|---------------|
| **Content** | 2000-3000 words |
| **Headings** | H2, H3 hierarchy |
| **Images** | 3-5 relevant images with alt text |
| **Tables** | Comparison tables where relevant |
| **Lists** | Bullet points and numbered lists |
| **Internal Links** | 3-5 links to related content |
| **External Links** | 2-3 links to official sources |

### Design Rules

- Maximum content width: 720px
- Clear paragraph spacing
- Readable font size (18px on desktop)
- Proper heading hierarchy
- Image captions where relevant

## FAQ Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Questions** | 3-5 common questions |
| **Design** | Accordion-style expandable |
| **Schema** | FAQPage schema |

## Related Articles Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Articles** | 3-6 related articles |
| **Card Design** | Article title, category, read time |
| **Layout** | 3-column grid on desktop, stack on mobile |

## Newsletter Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Headline** | "Enjoyed this article?" |
| **Description** | "Get more like this in your inbox" |
| **Form** | Email input + submit button |

## Sidebar (Desktop)

### Requirements

| Element | Specification |
|---------|---------------|
| **Sticky** | Sticky on scroll |
| **Content** | Table of contents, related articles |
| **Width** | 300px |

## SEO Requirements

| Element | Specification |
|---------|---------------|
| **Title** | "{Article Title} - FinShastra" |
| **Meta Description** | 120-158 characters |
| **Schema** | Article, BreadcrumbList, FAQPage |
| **H1** | Article title |
| **Canonical** | Self-referencing |
| **OG Tags** | All required OG tags |

## Trust Elements

| Element | Placement |
|---------|-----------|
| **Author Bio** | Below article title |
| **Last Updated Date** | Below article title |
| **Affiliate Disclosure** | Top of article (if monetized) |
| **Expert Review Badge** | Article header |
| **Sources** | In-text citations |

## Performance Requirements

| Metric | Target |
|--------|--------|
| **Lighthouse** | >= 90 |
| **LCP** | < 2.5s |
| **CLS** | < 0.1 |
| **INP** | < 200ms |