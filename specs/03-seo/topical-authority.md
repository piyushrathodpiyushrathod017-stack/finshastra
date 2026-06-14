# Topical Authority System

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Overview

Topical authority is achieved by creating comprehensive content clusters around specific topics. Each cluster has a pillar page and multiple supporting articles.

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
```

## Cluster Requirements

For every pillar page:

| Requirement | Specification |
|-------------|---------------|
| **Minimum** | 1 Pillar Article |
| **Required** | 10 Supporting Articles |
| **Target** | 25 Supporting Articles |
| **Orphan Pages** | No orphan pages allowed. Every page must be linked from at least one other page. |

## Pillar Page Structure

```
/pillar-page/
  +-- /supporting-article-1/
  +-- /supporting-article-2/
  +-- /supporting-article-3/
  +-- ... (10-25 articles)
  +-- /programmatic-page-1/
  +-- /programmatic-page-2/
  +-- ... (programmatic pages)
```

## Internal Linking Requirements

- Pillar page links to ALL supporting articles
- Supporting articles link back to pillar page (within first 100 words)
- Supporting articles link to 2-3 sibling articles
- Supporting articles link to 1 cross-silo article
- Programmatic pages link to parent pillar and related articles
- No orphan pages (reachable within 3 clicks from homepage)

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