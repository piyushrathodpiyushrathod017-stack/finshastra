# Category Page Specification

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
├─────────────────────────────────────────────────────────────┤
│                      BREADCRUMBS                            │
├─────────────────────────────────────────────────────────────┤
│                       HERO SECTION                          │
├─────────────────────────────────────────────────────────────┤
│                    POPULAR ARTICLES                          │
├─────────────────────────────────────────────────────────────┤
│                     SUBCATEGORIES                           │
├─────────────────────────────────────────────────────────────┤
│                       FAQ SECTION                           │
├─────────────────────────────────────────────────────────────┤
│                    RELATED CATEGORIES                        │
├─────────────────────────────────────────────────────────────┤
│                         FOOTER                              │
└─────────────────────────────────────────────────────────────┘
```

## Hero Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Title** | Category name (H1) |
| **Description** | 200-300 words explaining the category |
| **Visual** | Category-related image or illustration |

## Popular Articles Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Articles** | Top 6-9 articles in category |
| **Card Design** | Article title, excerpt, author, date, read time |
| **Layout** | 3-column grid on desktop, stack on mobile |

## Subcategories Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Subcategories** | All subcategories in this category |
| **Card Design** | Subcategory name, description, article count |
| **Layout** | 2-column grid on desktop, stack on mobile |

## FAQ Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Questions** | 3-5 common questions |
| **Design** | Accordion-style expandable |
| **Schema** | FAQPage schema |

## Related Categories Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Categories** | 2-3 related categories |
| **Card Design** | Category name, description |
| **Layout** | Horizontal cards |

## SEO Requirements

| Element | Specification |
|---------|---------------|
| **Title** | "{Category} - Complete Guide | FinShastra" |
| **Meta Description** | 120-158 characters |
| **Schema** | CollectionPage, BreadcrumbList |
| **H1** | Category name |
| **Internal Links** | Link to all articles in category |