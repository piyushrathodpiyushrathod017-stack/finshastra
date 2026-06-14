# Content Architecture

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

## Content Silos

Three primary silos, each a self-contained topical authority cluster:

```
finshastra.in/
+-- credit-score/          <- SILO 1: Credit Score Authority
|   +-- hub/               (pillar page)
|   +-- guides/            (cluster articles)
|   +-- how-to-improve/    (cluster articles)
|   +-- factors/           (cluster articles)
|   +-- programmatic/      (bank pages, score-based)
|
+-- personal-loan/         <- SILO 2: Personal Loan Authority
|   +-- hub/               (pillar page)
|   +-- guides/            (cluster articles)
|   +-- bank/              (programmatic bank pages)
|   +-- eligibility/       (cluster articles)
|   +-- programmatic/      (salary, city, amount-based)
|
+-- credit-cards/          <- SILO 3: Credit Card Authority
|   +-- hub/               (pillar page)
|   +-- guides/            (cluster articles)
|   +-- bank/              (programmatic bank pages)
|   +-- rewards/           (cluster articles)
|   +-- programmatic/      (reward-type, spend-category, salary-based)
|
+-- tools/                 <- Calculators and interactive tools
+-- compare/               <- Comparison pages
+-- best/                  <- Best-of pages
+-- blog/                  <- Cross-cutting articles
+-- author/                <- Author profiles
```

## Topic Clusters

### Cluster 1: Credit Score

**Pillar Page:** /credit-score/

| Supporting Article | Target Keyword | Volume |
|-------------------|----------------|--------|
| /credit-score/what-is-cibil-score/ | what is cibil score | 40,500 |
| /credit-score/how-to-check-cibil-score/ | how to check cibil score | 60,500 |
| /credit-score/improve-cibil-score/ | how to improve cibil score | 33,100 |
| /credit-score/cibil-score-range/ | cibil score range | 22,200 |
| /credit-score/factors-affecting-cibil-score/ | factors affecting cibil score | 8,100 |
| /credit-score/cibil-score-for-personal-loan/ | cibil score for personal loan | 12,100 |
| /credit-score/cibil-score-for-home-loan/ | cibil score for home loan | 9,900 |
| /credit-score/cibil-score-for-credit-card/ | cibil score for credit card | 6,600 |
| /credit-score/free-credit-score/ | free credit score | 18,100 |
| /credit-score/credit-report-explained/ | credit report explained | 4,400 |
| /credit-score/errors-in-cibil-report/ | errors in cibil report | 5,400 |
| /credit-score/dispute-cibil-error/ | how to dispute cibil error | 3,600 |
| /credit-score/credit-score-myths/ | credit score myths | 2,900 |
| /credit-score/credit-score-india-vs-usa/ | — | long-tail |
| /credit-score/credit-utilization-ratio/ | credit utilization ratio | 6,600 |

**Programmatic Pages:**

| Page Type | URL Pattern | Count |
|-----------|-------------|-------|
| Score Range Guide | /credit-score/score/{range}/ | 10 |
| Bank Credit Score | /credit-score/bank/{bank-slug}/ | 30+ |

### Cluster 2: Personal Loan

**Pillar Page:** /personal-loan/

| Supporting Article | Target Keyword | Volume |
|-------------------|----------------|--------|
| /personal-loan/best-personal-loan/ | best personal loan | 90,500 |
| /personal-loan/interest-rates/ | personal loan interest rate | 74,000 |
| /personal-loan/eligibility-criteria/ | personal loan eligibility | 40,500 |
| /personal-loan/documents-required/ | documents required for personal loan | 33,100 |
| /personal-loan/how-to-apply/ | how to apply for personal loan | 22,200 |
| /personal-loan/emi-calculator/ | personal loan emi calculator | 49,500 |
| /personal-loan/prepayment-rules/ | personal loan prepayment | 8,100 |
| /personal-loan/top-up-loan/ | personal loan top up | 6,600 |
| /personal-loan/debt-consolidation/ | debt consolidation loan | 9,900 |
| /personal-loan/salaried-employees/ | personal loan for salaried | 12,100 |
| /personal-loan/self-employed/ | personal loan for self employed | 9,900 |
| /personal-loan/government-employees/ | personal loan for govt employees | 8,100 |
| /personal-loan/low-cibil-score/ | personal loan with low cibil score | 14,800 |
| /personal-loan/no-credit-history/ | personal loan without credit history | 6,600 |
| /personal-loan/processing-fee/ | personal loan processing fee | 4,400 |
| /personal-loan/foreclosure-charges/ | personal loan foreclosure charges | 3,600 |
| /personal-loan/tax-benefits/ | personal loan tax benefits | 5,400 |
| /personal-loan/compare/ | compare personal loans | 22,200 |

**Programmatic Pages:**

| Page Type | URL Pattern | Count |
|-----------|-------------|-------|
| Bank Loan | /personal-loan/bank/{bank-slug}/ | 30+ |
| Salary-Based | /personal-loan/salary/{salary}/ | 20 |
| City-Based | /personal-loan/city/{city}/ | 50 |
| Amount-Based | /personal-loan/amount/{amount}/ | 20 |
| Tenure-Based | /personal-loan/tenure/{years}/ | 10 |

### Cluster 3: Credit Cards

**Pillar Page:** /credit-cards/

| Supporting Article | Target Keyword | Volume |
|-------------------|----------------|--------|
| /credit-cards/best-credit-cards/ | best credit cards | 135,000 |
| /credit-cards/credit-card-for-beginners/ | credit card for beginners | 14,800 |
| /credit-cards/how-credit-cards-work/ | how credit cards work | 9,900 |
| /credit-cards/rewards-explained/ | credit card rewards | 6,600 |
| /credit-cards/cashback-cards/ | cashback credit card | 12,100 |
| /credit-cards/travel-cards/ | travel credit card | 9,900 |
| /credit-cards/fuel-cards/ | fuel credit card | 8,100 |
| /credit-cards/credit-card-for-salaried/ | credit card for salaried | 6,600 |
| /credit-cards/credit-card-for-students/ | credit card for students | 9,900 |
| /credit-cards/credit-card-annual-fees/ | credit card annual fees | 4,400 |
| /credit-cards/credit-card-billing-cycle/ | credit card billing cycle | 3,600 |
| /credit-cards/credit-card-statement/ | credit card statement explained | 2,900 |
| /credit-cards/credit-card-interest-free-period/ | interest free period credit card | 2,400 |
| /credit-cards/credit-card-application-tips/ | credit card application tips | 5,400 |
| /credit-cards/credit-card-for-bad-credit/ | credit card with bad credit | 4,400 |
| /credit-cards/credit-card-for-high-credit-limit/ | high credit limit credit card | 3,600 |
| /credit-cards/compare/ | compare credit cards | 33,100 |

**Programmatic Pages:**

| Page Type | URL Pattern | Count |
|-----------|-------------|-------|
| Bank Card | /credit-cards/bank/{bank-slug}/ | 30+ |
| Reward Type | /credit-cards/rewards/{type}/ | 5 |
| Salary-Based | /credit-cards/salary/{salary}/ | 10 |
| Annual Fee | /credit-cards/fee/{type}/ | 3 |
| Category | /credit-cards/category/{category}/ | 10 |

## Internal Linking Rules

1. **Every article** links to its pillar page within the first 100 words.
2. **Every article** links to 2-3 related articles within the same silo.
3. **Every article** links to 1 article in a different silo (cross-linking, max 2).
4. **Pillar pages** link to ALL supporting articles in their cluster.
5. **Programmatic pages** link to their parent cluster article and related bank/city pages.
6. **Author pages** link to all articles by that author.
7. **Comparison pages** link to individual review pages for each product compared.
8. **Anchor text** must use natural keyword variations, not exact-match spam.

**Forbidden Internal Linking Patterns:**
- No link blocks with 20+ links (link spam)
- No "click here" anchor text
- No orphan pages (every page reachable within 3 clicks from homepage)
- No reciprocal link schemes between unrelated pages
- No hidden links

## URL Rules

**MUST follow:**
- Lowercase only: `/credit-score/` not `/Credit-Score/`
- Hyphens for spaces: `/personal-loan/` not `/personal_loan/`
- No query parameters for content pages
- No trailing slashes: `/credit-score` not `/credit-score/`
- Short, descriptive slugs: `/improve-cibil-score/`
- Programmatic pages use consistent patterns: `/bank/{slug}/`, `/city/{slug}/`

**MUST NEVER create:**
- `/tag/` or `/tags/` pages (thin content risk)
- `/category/page/2/` (pagination; use load-more)
- `/search?q=...` indexed pages (noindex all search results)
- URLs with dates: `/2026/06/08/...` (dateless URLs are evergreen)
- URL depth > 4 levels
- Parameterized URLs: `/articles?page=2&sort=date`