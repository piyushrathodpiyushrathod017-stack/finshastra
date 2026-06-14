# Homepage Specification

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
├─────────────────────────────────────────────────────────────┤
│                       HERO SECTION                          │
├─────────────────────────────────────────────────────────────┤
│                      TRUST SIGNALS                          │
├─────────────────────────────────────────────────────────────┤
│                    FEATURED CATEGORIES                       │
├─────────────────────────────────────────────────────────────┤
│                      POPULAR GUIDES                          │
├─────────────────────────────────────────────────────────────┤
│                       TOOLS SECTION                         │
├─────────────────────────────────────────────────────────────┤
│                      LATEST ARTICLES                         │
├─────────────────────────────────────────────────────────────┤
│                      NEWSLETTER                              │
├─────────────────────────────────────────────────────────────┤
│                         FOOTER                              │
└─────────────────────────────────────────────────────────────┘
```

## Hero Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Headline** | Strong, benefit-focused (e.g., "Your Guide to Better Financial Health") |
| **Supporting Copy** | 1-2 sentences explaining value proposition |
| **CTA** | Primary action (e.g., "Explore Guides") |
| **Trust Indicators** | "Expert-reviewed", "Fact-checked", "Updated regularly" |
| **Visual** | Modern finance illustration or hero image |

### Design Rules

- Maximum 2 lines for headline
- CTA button visible above fold
- Trust indicators below CTA
- Clean, uncluttered design
- Mobile: Stack vertically
- Desktop: Side-by-side layout

## Trust Signals Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Content** | 3-4 trust signals |
| **Icons** | Relevant icons for each signal |
| **Text** | Brief description (10-15 words) |

### Trust Signals

| Signal | Icon | Text |
|--------|------|------|
| Expert Authors | User | "Written by certified financial experts" |
| Fact-Checked | CheckCircle | "Data verified against official sources" |
| Updated Regularly | RefreshCw | "Updated monthly with latest rates" |
| Transparent | Eye | "Affiliate relationships disclosed" |

## Featured Categories Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Categories** | 3 main categories (Credit Score, Personal Loan, Credit Cards) |
| **Card Design** | Category name, brief description, CTA |
| **Layout** | 3-column grid on desktop, stack on mobile |

### Category Cards

| Category | Title | Description |
|----------|-------|-------------|
| Credit Score | Credit Score | "Understand, check, and improve your CIBIL score" |
| Personal Loan | Personal Loan | "Compare rates, check eligibility, apply smartly" |
| Credit Cards | Credit Cards | "Find the best card for your spending style" |

## Popular Guides Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Articles** | Top 6-9 articles by popularity |
| **Card Design** | Article title, excerpt, category, read time |
| **Layout** | 3-column grid on desktop, 2-column on tablet, 1-column on mobile |

## Tools Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Tools** | EMI Calculator, Personal Loan Calculator, Credit Score Guide |
| **Card Design** | Tool name, brief description, CTA |
| **Layout** | 3-column grid on desktop, stack on mobile |

## Latest Articles Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Articles** | Latest 6-9 published articles |
| **Card Design** | Article title, excerpt, author, date |
| **Layout** | 3-column grid on desktop, 2-column on tablet, 1-column on mobile |

## Newsletter Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Headline** | "Stay Updated" or similar |
| **Description** | Brief explanation of newsletter value |
| **Form** | Email input + submit button |
| **Privacy** | Link to privacy policy |

## Footer

### Requirements

| Section | Links |
|---------|-------|
| **About** | About Us, Contact, Careers |
| **Legal** | Privacy Policy, Terms, Disclaimer, Affiliate Disclosure |
| **Categories** | Credit Score, Personal Loan, Credit Cards |
| **Tools** | EMI Calculator, Personal Loan Calculator |
| **Social** | Twitter, LinkedIn, Facebook |

### Design Rules

- 4-column layout on desktop
- Stack vertically on mobile
- Dark background for contrast
- Clear section headings
- Social icons with labels

## SEO Requirements

| Element | Specification |
|---------|---------------|
| **Title** | "FinShastra - Your Guide to Better Financial Health" |
| **Meta Description** | 120-158 characters with CTA |
| **Schema** | Organization, WebSite, SearchAction |
| **H1** | Primary headline |
| **Internal Links** | Link to all main sections |

## Performance Requirements

| Metric | Target |
|--------|--------|
| **Lighthouse** | >= 90 |
| **LCP** | < 2.5s |
| **CLS** | < 0.1 |
| **INP** | < 200ms |