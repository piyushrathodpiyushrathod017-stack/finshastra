# Routing System

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## URL Architecture

```
finshastra.in/
├── /                                    # Homepage
├── /credit-score/                       # Credit Score Hub
│   ├── /credit-score/{slug}/            # Credit Score Articles
│   ├── /credit-score/bank/{slug}/       # Bank-specific pages
│   └── /credit-score/score/{range}/     # Score range pages
│
├── /personal-loan/                      # Personal Loan Hub
│   ├── /personal-loan/{slug}/           # Personal Loan Articles
│   ├── /personal-loan/bank/{slug}/      # Bank-specific pages
│   ├── /personal-loan/city/{slug}/      # City-specific pages
│   └── /personal-loan/salary/{slug}/    # Salary-specific pages
│
├── /credit-cards/                       # Credit Cards Hub
│   ├── /credit-cards/{slug}/            # Credit Card Articles
│   ├── /credit-cards/bank/{slug}/       # Bank-specific pages
│   └── /credit-cards/rewards/{slug}/    # Reward type pages
│
├── /tools/                              # Calculators and Tools
│   ├── /tools/emi-calculator/
│   ├── /tools/personal-loan-calculator/
│   └── /tools/credit-score-guide/
│
├── /compare/                            # Comparison Pages
│   ├── /compare/{brand1}-vs-{brand2}/
│   └── /compare/{topic}-vs-{topic}/
│
├── /best/                               # Best-of Pages
│   ├── /best/credit-cards/
│   ├── /best/personal-loans/
│   └── /best/{category}/
│
├── /author/                             # Author Profiles
│   └── /author/{slug}/
│
├── /blog/                               # Blog Articles
│   └── /blog/{slug}/
│
├── /about/                              # About Page
├── /contact/                            # Contact Page
├── /privacy/                            # Privacy Policy
├── /terms/                              # Terms of Service
├── /disclaimer/                         # Disclaimer
├── /editorial-policy/                   # Editorial Policy
├── /affiliate-disclosure/               # Affiliate Disclosure
│
├── /sitemap.xml                         # Dynamic Sitemap
├── /robots.txt                          # Robots File
├── /feed.xml                            # RSS Feed
└── /not-found                           # 404 Page
```

## URL Rules

### MUST Follow

| Rule | Example |
|------|---------|
| Lowercase only | `/credit-score/` not `/Credit-Score/` |
| Hyphens for spaces | `/personal-loan/` not `/personal_loan/` |
| No query parameters | `/credit-score/` not `/credit-score/?id=1` |
| No trailing slashes | `/credit-score` not `/credit-score/` |
| Short, descriptive slugs | `/improve-cibil-score/` |
| Consistent patterns | `/bank/{slug}/`, `/city/{slug}/` |

### MUST NEVER Create

| Pattern | Why Forbidden |
|---------|---------------|
| `/tag/` or `/tags/` | Thin content risk |
| `/category/page/2/` | Pagination; use load-more |
| `/search?q=...` | noindex all search results |
| URLs with dates | `/2026/06/08/...` (dateless URLs are evergreen) |
| URL depth > 4 levels | Too deep for users and crawlers |
| Parameterized URLs | `/articles?page=2&sort=date` |

## Internal Linking Rules

1. **Every article** links to its pillar page within the first 100 words.
2. **Every article** links to 2-3 related articles within the same silo.
3. **Every article** links to 1 article in a different silo (cross-linking, max 2).
4. **Pillar pages** link to ALL supporting articles in their cluster.
5. **Programmatic pages** link to their parent cluster article and related bank/city pages.
6. **Author pages** link to all articles by that author.
7. **Comparison pages** link to individual review pages for each product compared.
8. **Anchor text** must use natural keyword variations, not exact-match spam.

### Forbidden Internal Linking Patterns

- No link blocks with 20+ links (link spam)
- No "click here" anchor text
- No orphan pages (every page reachable within 3 clicks from homepage)
- No reciprocal link schemes between unrelated pages
- No hidden links

## Rendering Strategy

| Page Type | Rendering | Revalidation |
|-----------|-----------|--------------|
| Homepage | SSG | 1 hour (ISR) |
| Category Hub | SSG + ISR | 1 hour |
| Article | SSG + ISR | 1 hour |
| Programmatic | SSG + ISR | 1 hour |
| Comparison | SSG + ISR | 1 hour |
| Calculator | SSG | Never (static) |
| Author | SSG | 1 hour |
| Legal | SSG | Never (static) |
| Search | CSR | N/A (client-side) |
| 404 | SSG | Never (static) |