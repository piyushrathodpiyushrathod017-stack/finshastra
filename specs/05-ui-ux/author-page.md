# Author Page Specification

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
├─────────────────────────────────────────────────────────────┤
│                      BREADCRUMBS                            │
├─────────────────────────────────────────────────────────────┤
│                    AUTHOR PROFILE                           │
│                    (Photo, Name, Bio)                       │
├─────────────────────────────────────────────────────────────┤
│                    CREDENTIALS                              │
├─────────────────────────────────────────────────────────────┤
│                    ARTICLES BY AUTHOR                        │
├─────────────────────────────────────────────────────────────┤
│                         FOOTER                              │
└─────────────────────────────────────────────────────────────┘
```

## Author Profile

### Requirements

| Element | Specification |
|---------|---------------|
| **Photo** | Professional headshot (circular) |
| **Name** | Full name (H1) |
| **Credentials** | Degrees, certifications |
| **Bio** | 200-300 words |
| **Social Links** | LinkedIn, Twitter, Email |

### Design Rules

- Photo: 120px circular
- Name: Large, prominent
- Credentials: Below name
- Bio: Full width
- Social links: Icons with labels

## Credentials Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Layout** | Card or list format |
| **Content** | Degree, institution, year |
| **Verification** | Links to LinkedIn or professional profiles |

## Articles by Author

### Requirements

| Element | Specification |
|---------|---------------|
| **Grouping** | Group by category |
| **Card Design** | Article title, category, date, read time |
| **Layout** | 3-column grid on desktop, stack on mobile |

## SEO Requirements

| Element | Specification |
|---------|---------------|
| **Title** | "{Author Name} - Finance Expert | FinShastra" |
| **Meta Description** | 120-158 characters |
| **Schema** | Person, BreadcrumbList |
| **H1** | Author name |
| **Canonical** | Self-referencing |

## EEAT Requirements

| Element | Specification |
|---------|---------------|
| **Real Name** | Must use real name |
| **Verifiable Credentials** | Links to LinkedIn |
| **Professional Photo** | Real headshot, not AI |
| **Expertise** | Minimum 3 years in field |