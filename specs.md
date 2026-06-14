# specs.md — FinShastra.in

> **Version:** 1.1.0
> **Last Updated:** 2026-06-09
> **Status:** Living Document
> **Authority:** This file is the SINGLE SOURCE OF TRUTH for all project decisions.

---

## Table of Contents

1. [Project Vision](#1-project-vision)
2. [Project Scope](#2-project-scope)
3. [Content Architecture](#3-content-architecture)
4. [SEO Specifications](#4-seo-specifications)
5. [EEAT Specifications](#5-eeat-specifications)
6. [UI/UX Specifications](#6-uiux-specifications)
7. [Performance Specifications](#7-performance-specifications)
8. [Security Specifications](#8-security-specifications)
9. [Monetization Specifications](#9-monetization-specifications)
10. [Analytics Specifications](#10-analytics-specifications)
11. [Development Standards](#11-development-standards)
12. [Future Roadmap](#12-future-roadmap)
13. [AI Agent Rules](#13-ai-agent-rules)
14. [AUTHORITY_BUILDING_SYSTEM](#14-authority_building_system)
15. [TOOLS_ROADMAP](#15-tools_roadmap)
16. [LEAD_GENERATION_SYSTEM](#16-lead_generation_system)
17. [TOPICAL_AUTHORITY_SYSTEM](#17-topical_authority_system)
18. [COMPARISON_PAGE_SYSTEM](#18-comparison_page_system)
19. [PROGRAMMATIC_SEO_SYSTEM](#19-programmatic_seo_system)
20. [TRUST_SYSTEM](#20-trust_system)
21. [MONETIZATION_ROADMAP](#21-monetization_roadmap)
22. [AI_EXECUTION_PROTOCOL](#22-ai_execution_protocol)
23. [NEVER_BUILD_LIST](#23-never_build_list)
24. [AI_AGENT_OPERATING_SYSTEM](#24-ai_agent_operating_system)
25. [OPENCODE_EXECUTION_RULES](#25-opencode_execution_rules)
26. [Project Principles](#26-project-principles)
- [Appendix A: Tech Stack Summary](#appendix-a-tech-stack-summary)
- [Appendix B: Page Templates](#appendix-b-page-templates)
- [Appendix C: Database Tables](#appendix-c-database-tables-core)

---

## 1. Project Vision

### 1.1 What This Website Is

FinShastra.in is a **personal finance authority website** serving Indian consumers with trustworthy, jargon-free guidance on Credit Scores, Personal Loans, and Credit Cards. It is an information-first, affiliate-monetized platform — NOT a lending platform, NOT a bank, and NOT an NBFC.

### 1.2 What Problem It Solves

- **Information Overload:** Indian consumers searching for financial products are bombarded with conflicting information, spammy ads, and biased content. FinShastra provides clear, unbiased, fact-checked guidance.
- **Trust Deficit:** Most finance websites are thinly-veiled sales pages. FinShastra builds trust through expert-authored content, transparent disclosures, and genuine education.
- **Decision Paralysis:** Users don't know which loan or credit card is right for them. FinShastra provides comparison tools, calculators, and step-by-step guides to simplify decisions.
- **Financial Illiteracy:** Millions of Indians don't understand what a CIBIL score is, how EMIs work, or what credit card rewards actually mean. FinShastra educates.

### 1.3 Target Audience

| Segment | Demographics | Needs |
|---------|-------------|-------|
| **Primary** | Age 22-45, Salaried professionals, Metro/Tier-1 cities | Credit score improvement, best personal loan rates, credit card comparison |
| **Secondary** | Age 25-50, Self-employed/Small business owners, Tier-1/2 cities | Business loans, credit card rewards optimization, tax-saving |
| **Tertiary** | Age 18-25, First-time earners, Students | Credit score basics, first credit card, financial literacy |

**Geography:** India-first. English at launch. Hindi/regional languages in Phase 4.

**Income Bands:** ₹3L-₹30L annual income. Covers mass market to upper-middle class.

### 1.4 Why Users Should Trust It

1. **Expert Authors:** All articles reviewed by certified professionals (CA, CFA, MBA Finance, RBI-registered advisors).
2. **Transparent Relationships:** Every affiliate link is disclosed. Sponsored content is labeled. No hidden agendas.
3. **Fact-Checked Content:** Data sourced from RBI, CIBIL, bank websites, and regulatory filings — not speculation.
4. **No Fake Urgency:** No countdown timers, no "limited time offer" scams, no misleading CTAs.
5. **Regular Updates:** Articles updated monthly with latest rates, rules, and regulations. Last-updated dates visible.
6. **Editorial Independence:** Affiliate partnerships do NOT influence content recommendations. Editorial team has final say.

### 1.5 Long-Term Business Goals

| Timeframe | Goal |
|-----------|------|
| **Year 1** | Launch MVP with 3 verticals, 650+ pages, 100K monthly organic visitors |
| **Year 2** | Expand to 5 verticals, 2000+ pages, 500K monthly visitors, ₹50L+/month revenue |
| **Year 3** | Become top-10 Indian finance authority, 1M+ monthly visitors, ₹1Cr+/month revenue |
| **Year 5** | Comprehensive personal finance platform, 2M+ monthly visitors, diversified revenue streams |

### 1.6 Business Model

**Content-first affiliate model.** Revenue comes from:
1. Affiliate commissions (bank/NBFC partnerships for loans, credit cards)
2. Google AdSense / premium ad networks
3. Sponsored content (clearly labeled)
4. Lead generation (form submissions to partner banks)

**Revenue does NOT come from:**
- Direct lending (no RBI NBFC license)
- Hidden fees
- Selling user data
- Misleading recommendations

---

## 2. Project Scope

### 2.1 What MUST Be Built

| # | Feature | WHY |
|---|---------|-----|
| 1 | **Homepage** | Brand entry point. Establishes trust, showcases top content, drives internal linking. |
| 2 | **Category Hub Pages** | Topical authority anchors. Three hubs: /credit-score/, /personal-loan/, /credit-cards/. |
| 3 | **Sub-Category Pages** | Organize content within verticals. E.g., /credit-score/how-to-improve/ |
| 4 | **Article Pages (MDX)** | Core content. Guides, how-tos, comparisons, explainers. SEO traffic drivers. |
| 5 | **Programmatic Pages** | Scalable content: bank pages, city pages, salary pages. 405+ pages at scale. |
| 6 | **Search Functionality** | Users find specific content. Client-side search using Fuse.js or Algolia. |
| 7 | **Author Profiles** | EEAT signals. Show expertise, credentials, other articles. /author/{slug}/ |
| 8 | **Breadcrumb Navigation** | SEO (BreadcrumbList schema) + UX orientation on every page. |
| 9 | **FAQ Sections** | Featured snippet targeting + FAQ schema markup on every article. |
| 10 | **Related Articles** | Increases pages/session, reduces bounce, strengthens internal linking. |
| 11 | **Structured Data (JSON-LD)** | Schema.org markup for Article, FAQ, BreadcrumbList, FinancialProduct, Organization, WebSite. |
| 12 | **Newsletter System** | Email capture for return traffic. Weekly digest. Supabase-backed. |
| 13 | **Calculator Framework** | EMI Calculator, Eligibility Checker, Credit Score Simulator — interactive tools. |
| 14 | **Sitemap (XML)** | Technical SEO. Auto-generated, paginated, includes lastmod dates. |
| 15 | **Robots.txt** | Crawl budget management. Allow all public pages, block admin/api/draft. |
| 16 | **Legal Pages** | Trust + legal compliance. Privacy Policy, Terms, Disclaimer, Affiliate Disclosure. |
| 17 | **Mobile Responsive Layout** | 80%+ traffic from mobile. Must work on 320px to 428px viewports. |
| 18 | **Category Navigation** | Mega menu or dropdown for 3 verticals. Desktop + mobile hamburger. |
| 19 | **Footer** | Trust signals, legal links, category links, social links. |
| 20 | **404 Page** | Branded error page with search and popular links. Prevents dead ends. |
| 21 | **RSS Feed** | For feed readers and content syndication. /feed.xml |
| 22 | **Open Graph / Twitter Cards** | Social sharing previews. Optimized OG images per article. |
| 23 | **Canonical URLs** | Prevent duplicate content. Every page has explicit canonical. |
| 24 | **Comparison Pages** | /credit-cards/hdfc-vs-sbi, /personal-loan/hdfc-vs-icici — help users decide. |
| 25 | **Best Of Pages** | /credit-cards/best/, /personal-loan/best/ — high-intent landing pages. |
| 26 | **Alternative Pages** | "HDFC Credit Card alternatives" — capture comparison intent. |

### 2.2 What MUST NOT Be Built

| # | Feature | WHY NOT |
|---|---------|---------|
| 1 | **User Forums / Community** | Requires moderation team, spam management, legal liability for financial advice. |
| 2 | **Social Media Clone Features** | Likes, feeds, following — not our product. Focus on content. |
| 3 | **Complex User Accounts** | Auth is for admin only at MVP. No user accounts. No saved profiles. |
| 4 | **Real-Time Chat Systems** | Expensive, requires support staff, not scalable at MVP stage. |
| 5 | **Cryptocurrency Trading** | Regulatory risk in India. RBI stance unclear. Not our vertical. |
| 6 | **Loan Approval Engines** | Requires NBFC registration, RBI compliance, KYC integration. |
| 7 | **Banking Integrations** | Requires RBI sandbox, partnership agreements, data privacy compliance. |
| 8 | **Payment Gateway Integration** | We don't charge users. No e-commerce. No payments needed. |
| 9 | **Mobile App** | Web-first. PWA considered for Phase 4 only. |
| 10 | **AI Chatbot** | Requires training data, support infrastructure, YMYL liability. |
| 11 | **Complex Admin Dashboards** | Simple Supabase dashboard sufficient. Full CMS admin is scope creep. |
| 12 | **Video Content Platform** | YouTube/Vimeo embeds only. No self-hosted video. |
| 13 | **Multi-Language at Launch** | English only for first 6 months. Hindi/regional deferred to Phase 4. |
| 14 | **SMS/WhatsApp Notifications** | TRAI/DLT regulatory compliance required. Complex. Not MVP scope. |
| 15 | **Loan Processing Systems** | Requires NBFC license, RBI compliance. |
| 16 | **Banking Systems** | Not our product. Focus on content and lead generation. |
| 17 | **User Chat Platforms** | Scope creep, moderation burden. |
| 18 | **Cryptocurrency Exchange** | Regulatory risk. Not our vertical. |
| 19 | **Trading Platform** | Requires SEBI license, real-time data feeds. |
| 20 | **Unverified Financial Advice** | YMYL violation. All advice must be expert-reviewed. |

---

## 3. Content Architecture

### 3.1 Content Silos

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

### 3.2 Topic Clusters

#### Cluster 1: Credit Score

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

#### Cluster 2: Personal Loan

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

#### Cluster 3: Credit Cards

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

### 3.3 Internal Linking Rules

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

### 3.4 URL Rules

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

---

## 4. SEO Specifications

### 4.1 Technical SEO Rules

#### Metadata Requirements

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

**Open Graph Rules:**
```html
<meta property="og:title" content="{same as title}" />
<meta property="og:description" content="{same as meta description}" />
<meta property="og:image" content="https://finshastra.in/og/{slug}.png" />
<meta property="og:url" content="https://finshastra.in/{slug}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="FinShastra" />
```

**Twitter Card Rules:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@finshastra" />
<meta name="twitter:title" content="{same as title}" />
<meta name="twitter:description" content="{same as meta description}" />
<meta name="twitter:image" content="https://finshastra.in/og/{slug}.png" />
```

#### Canonical URL Rules

- Every page has an explicit canonical tag
- Self-referencing canonicals
- Canonical always points to HTTPS, non-WWW, no trailing slash

#### Sitemap Rules

- Auto-generated at build time or on schedule
- `/sitemap.xml` — index sitemap
- `/sitemap-{vertical}.xml` — section sitemaps
- Maximum 50,000 URLs per sitemap file
- Include `<lastmod>` dates
- Noindex pages excluded from sitemap
- Submit to Google Search Console weekly

#### Robots Rules

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

#### Schema Markup Rules

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

### 4.2 Allowed SEO Practices

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

### 4.3 Forbidden SEO Practices

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

---

## 5. EEAT Specifications

### 5.1 Author Requirements

| Requirement | Details |
|-------------|---------|
| **Real Names** | Every article must have a real author name |
| **Author Bio** | 100-200 word bio with credentials, experience |
| **Author Photo** | Professional headshot (real photo, not AI-generated) |
| **Credentials** | Minimum: relevant degree (CA, CFA, MBA Finance, B.Com) |
| **Experience** | Minimum 3 years in relevant field |
| **Author Page** | Dedicated /author/{slug}/ page with full bio, all articles |
| **External Profiles** | Link to LinkedIn, professional profiles |

### 5.2 Editorial Requirements

| Requirement | Details |
|-------------|---------|
| **Review Process** | Every article reviewed by subject matter expert before publish |
| **Fact Checking** | All financial data verified against RBI, CIBIL, bank official sources |
| **Update Schedule** | Articles reviewed and updated at minimum every 90 days |
| **Last Updated Date** | Visible on every article page |
| **Corrections Policy** | Public corrections page. Mistakes corrected with edit history. |
| **Editorial Policy** | Public /editorial-policy/ page explaining process |
| **Conflict of Interest Disclosure** | Every article with affiliate links has disclosure at top |
| **Content Scoring** | Internal quality score: minimum 80/100 to publish |

### 5.3 Citation Requirements

| Requirement | Details |
|-------------|---------|
| **Data Sources** | All statistics cite official sources (RBI, CIBIL, bank websites) |
| **Link to Sources** | Direct links to original data sources where possible |
| **Data Currency** | Cite date of data. Example: "As of March 2026, RBI data shows..." |
| **Government Sources** | RBI, SEBI, IRDAI, PFRDA, Ministry of Finance preferred |
| **Bank Sources** | Official bank websites, not third-party comparison sites |

### 5.4 Fact-Checking Requirements

| Requirement | Details |
|-------------|---------|
| **Interest Rates** | Must match bank's official website. Updated within 7 days of bank change. |
| **Fees & Charges** | Official fee schedule from bank website. Cited with link. |
| **Eligibility Criteria** | Official bank criteria. Not made up. |
| **Regulatory Information** | RBI circulars, government notifications as primary source |
| **Comparison Claims** | "Best" claims backed by methodology. "Lowest" backed by data. |
| **Numbers & Statistics** | Cross-referenced with 2+ sources minimum |

### 5.5 Update Policies

| Content Type | Update Frequency | Trigger Events |
|-------------|-----------------|----------------|
| **Articles** | Every 90 days minimum | Interest rate changes, regulatory changes |
| **Programmatic Pages** | Every 30 days | Bank rate updates, new products |
| **Pillar Pages** | Every 60 days | Major market shifts |
| **Calculator Data** | Every 30 days | Interest rate changes |
| **Legal Pages** | Every 180 days | Regulatory changes |

### 5.6 Trust Signals

**What Establishes Trust:**
- Expert author bios with verifiable credentials
- Transparent affiliate disclosure on every monetized page
- Last-updated dates visible on all content
- Links to official sources (RBI, bank websites)
- Clean, professional design
- Fast page load times
- No misleading CTAs or fake urgency
- Genuine, helpful content

**What Destroys Trust:**
- Anonymous authors or "Team FinShastra" bylines
- Outdated interest rates or regulations
- Hidden affiliate links or undisclosed sponsorships
- Fake countdown timers or "limited time" claims
- Excessive popups or aggressive CTAs
- Thin, regurgitated content
- Misleading "best" or "lowest" claims without data
- Broken links or 404 errors
- Auto-generated content without human review

---

## 6. UI/UX Specifications

### 6.1 Layout Principles

1. **Mobile-First:** Design for 375px viewport first, scale up.
2. **Content-First:** Article content is the hero. No distractions.
3. **Speed-First:** Every design decision evaluated against performance impact.
4. **Trust-First:** Professional, clean design. No dark patterns.
5. **Accessibility-First:** WCAG 2.1 AA minimum.

### 6.2 Mobile-First Design

| Requirement | Specification |
|-------------|---------------|
| **Minimum Viewport** | 320px (iPhone SE) |
| **Maximum Viewport** | 428px (iPhone 14 Pro Max) |
| **Breakpoints** | 375px, 640px, 768px, 1024px, 1280px |
| **Touch Targets** | Minimum 44x44px |
| **Font Size** | Minimum 16px body (prevents iOS zoom) |
| **Spacing** | Minimum 8px between interactive elements |
| **Navigation** | Hamburger menu on mobile, horizontal nav on desktop |

### 6.3 Accessibility Standards

| Standard | Requirement |
|----------|-------------|
| **WCAG Level** | AA minimum |
| **Color Contrast** | 4.5:1 for normal text, 3:1 for large text |
| **Keyboard Navigation** | All interactive elements focusable and operable |
| **Focus Indicators** | Visible focus ring on all interactive elements |
| **Alt Text** | Every image has descriptive alt text |
| **ARIA Labels** | Used for interactive elements without visible labels |
| **Skip Navigation** | "Skip to main content" link at top of page |
| **Heading Hierarchy** | H1 then H2 then H3, never skip levels |
| **Form Labels** | Every form input has associated label |
| **Error Messages** | Clear, descriptive error messages |
| **Reduced Motion** | Respect `prefers-reduced-motion` media query |

### 6.4 Typography Rules

| Element | Font | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|------|---------------|----------------|--------|-------------|
| H1 | Inter | 28px | 40px | 700 | 1.2 |
| H2 | Inter | 22px | 32px | 600 | 1.3 |
| H3 | Inter | 18px | 24px | 600 | 1.4 |
| Body | Inter | 16px | 18px | 400 | 1.6 |
| Small | Inter | 14px | 14px | 400 | 1.5 |
| Code | JetBrains Mono | 14px | 14px | 400 | 1.5 |

**Font Loading:**
- Self-host Inter font files (not Google Fonts CDN)
- Preload critical font weights: 400, 600, 700
- Use `font-display: swap`
- Maximum 2 font families

### 6.5 Color Rules

#### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #2563EB | Links, buttons, active states |
| `--color-primary-dark` | #1D4ED8 | Hover states |
| `--color-primary-light` | #DBEAFE | Backgrounds, subtle highlights |

#### Secondary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | #10B981 | Positive outcomes, success states |
| `--color-warning` | #F59E0B | Caution states, attention |
| `--color-error` | #EF4444 | Errors, negative outcomes |
| `--color-info` | #3B82F6 | Informational callouts |

#### Neutral Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | #111827 | Main body text |
| `--color-text-secondary` | #6B7280 | Secondary text, captions |
| `--color-text-muted` | #9CA3AF | Placeholder text |
| `--color-bg-primary` | #FFFFFF | Page background |
| `--color-bg-secondary` | #F9FAFB | Card backgrounds |
| `--color-bg-tertiary` | #F3F4F6 | Subtle backgrounds |
| `--color-border` | #E5E7EB | Borders, dividers |

**Color Rules:**
- Never use color alone to convey meaning
- Test all color combinations for WCAG contrast
- Trust-building colors: blue, white, gray, green
- Avoid red except for error states

### 6.6 Component Rules

#### Buttons
| Type | Usage | Style |
|------|-------|-------|
| Primary | Main CTAs | Blue bg, white text, rounded-lg |
| Secondary | Secondary actions | White bg, blue border, blue text |
| Tertiary | Low-emphasis actions | No bg, blue text |
| Ghost | Inline actions | No bg, gray text |

**Button Rules:**
- Minimum height: 44px (mobile touch target)
- Minimum padding: 12px 24px
- Clear, action-oriented labels
- Loading state for async actions
- Maximum 1 primary button per viewport

#### Cards
| Type | Usage |
|------|-------|
| Article Card | Homepage, related articles |
| Bank Card | Programmatic pages |
| Feature Card | Homepage sections |
| FAQ Card | FAQ sections |

**Card Rules:**
- Consistent padding: 16px or 24px
- Subtle border or shadow (not both)
- Hover state (subtle lift)
- Responsive: stack on mobile, grid on desktop

#### Forms
| Rule | Specification |
|------|---------------|
| Labels | Always visible |
| Validation | Real-time with clear error messages |
| Required Fields | Asterisk (*) with explanation |
| Input Types | Correct HTML5 types |
| Autocomplete | Use autocomplete attributes |
| Submit Button | Clear action label |
| Success State | Clear confirmation message |

#### Navigation
| Rule | Specification |
|------|---------------|
| Mobile | Hamburger menu with slide-in panel |
| Desktop | Horizontal nav with dropdowns |
| Sticky | Header sticky on scroll |
| Active State | Clear visual indicator |
| Breadcrumbs | Show on every page except homepage |
| Max Depth | 2 levels of dropdown nesting |
| CTA in Nav | One prominent CTA |

### 6.7 Trust Elements

| Element | Placement |
|---------|-----------|
| Author Bio | Below article title |
| Last Updated Date | Below article title |
| Affiliate Disclosure | Top of monetized articles |
| Expert Review Badge | Article sidebar |
| Official Data Sources | In-content citations |
| Contact Information | Footer |
| Privacy Policy Link | Footer, near forms |

### 6.8 Conversion Elements

| Element | Purpose | Placement |
|---------|---------|-----------|
| CTA Button | Drive action | After key content sections |
| Comparison Table | Help users decide | In comparison articles |
| Calculator Widget | Interactive engagement | In EMI/eligibility articles |
| Newsletter Signup | Build return audience | End of articles |
| Related Articles | Increase engagement | End of articles |
| Quick Links Box | Internal linking | Top of pillar pages |

**Conversion Rules:**
- Maximum 3 CTAs per viewport on mobile
- CTAs must be relevant to content context
- No popups, no interstitials, no slide-ins at MVP
- No false urgency: "Limited Time Offer" is forbidden
- Every CTA must have clear value proposition

### 6.9 UX Anti-Patterns (NEVER Do These)

| Anti-Pattern | Why Forbidden |
|-------------|---------------|
| Popup on page load | Destroy trust, increase bounce |
| Interstitial ads | Google penalizes |
| Auto-playing video | Data cost, battery drain |
| Infinite scroll on articles | Bad for SEO, accessibility |
| Carousel on homepage | Low engagement |
| Fake testimonials | Legal liability |
| Fake "X people are viewing" | Dark pattern |
| Fake countdown timers | Dark pattern |
| Misleading CTAs | Manipulation |
| Bait-and-switch content | Trust destruction |
| Excessive cookie banners | Consent fatigue |
| Notification popup on load | Annoying |
| Social sharing buttons with 3rd party scripts | Performance killer |

---

## 7. Performance Specifications

### 7.1 Required Performance Targets

| Metric | Target |
|--------|--------|
| **Lighthouse Performance** | >= 90 |
| **LCP** | < 2.5s |
| **INP** | < 200ms |
| **CLS** | < 0.1 |
| **FID** | < 100ms |
| **TTFB** | < 800ms |
| **Total Page Size** | < 500KB (initial load) |
| **JavaScript Bundle** | < 150KB (gzipped) |
| **CSS Bundle** | < 50KB (gzipped) |
| **Image Size per Page** | < 200KB total |
| **Font Files** | < 100KB total |
| **Third-Party Scripts** | < 50KB total |
| **Time to Interactive** | < 3.5s on 3G |

### 7.2 Image Optimization Rules

| Rule | Specification |
|------|---------------|
| **Format** | WebP primary, JPEG fallback, SVG for icons |
| **Responsive Images** | `<picture>` with srcset, 3 sizes: 640px, 1024px, 1280px |
| **Lazy Loading** | All images below-fold: `loading="lazy"` |
| **Above-fold Images** | Preload: `loading="eager"` + `<link rel="preload">` |
| **Alt Text** | Descriptive alt text on every image |
| **Dimensions** | Always specify width/height attributes (prevents CLS) |
| **Compression** | Maximum 80% quality for WebP, 85% for JPEG |
| **Max Image Size** | No single image > 200KB |
| **OG Images** | 1200x630px, auto-generated per article |

### 7.3 Caching Strategy

| Resource | Cache Duration |
|----------|---------------|
| **HTML Pages (SSG)** | 1 hour (ISR) |
| **Static Assets** | 1 year (immutable) |
| **Images** | 30 days |
| **Fonts** | 1 year (immutable) |
| **API Responses** | 5 minutes |

### 7.4 Performance Anti-Patterns

| Anti-Pattern | Why Forbidden |
|-------------|---------------|
| Client-Side Rendering for all pages | Slow TTFB, bad for SEO |
| Unoptimized images (PNG for photos) | Massive page sizes |
| Inline all CSS/JS | No caching benefit |
| Third-party script bloat | Performance killer |
| No image lazy loading | Loads all images on page load |
| Render-blocking resources in head | Delays FCP |
| No code-splitting | Single large bundle |
| No prefetching for navigation | Slow perceived performance |
| Synchronous third-party scripts | Blocks main thread |
| Long tasks (>50ms) on main thread | INP degradation |

---

## 8. Security Specifications

### 8.1 Authentication Rules

| Rule | Specification |
|------|---------------|
| **Auth Provider** | Supabase Auth |
| **Admin Auth** | Email + password with MFA |
| **Session Management** | JWT tokens, httpOnly cookies |
| **Session Duration** | 24 hours, refresh token 7 days |
| **Password Policy** | Minimum 12 characters, complexity requirements |
| **Brute Force Protection** | Rate limit: 5 per minute, 20 per hour |
| **Account Lockout** | Temporary lockout after 10 failed attempts |

### 8.2 Environment Variables

| Rule | Specification |
|------|---------------|
| **Storage** | `.env.local` for dev, Vercel Environment Variables for prod |
| **Never Commit** | `.env` files excluded via `.gitignore` |
| **Naming** | `NEXT_PUBLIC_` prefix for client-side variables only |
| **Secrets** | Server-side only |
| **Rotation** | Rotate API keys every 90 days |

### 8.3 API Security

| Rule | Specification |
|------|---------------|
| **Authentication** | All admin APIs require valid JWT |
| **Authorization** | Row Level Security (RLS) in Supabase |
| **Input Validation** | Validate all inputs server-side with Zod |
| **Output Sanitization** | Sanitize all outputs to prevent XSS |
| **CORS** | Only allow `finshastra.in` origins |
| **Rate Limiting** | 100 requests per minute per IP |
| **Admin Routes** | Separate middleware, MFA required |

### 8.4 Rate Limiting

| Endpoint Type | Rate Limit | Window |
|---------------|------------|--------|
| Public Pages | No limit | — |
| API Routes (public) | 100 req/min | Per IP |
| API Routes (admin) | 30 req/min | Per user |
| Contact Form | 5 submissions | Per IP per hour |
| Newsletter Signup | 3 submissions | Per IP per day |
| Search | 30 requests | Per minute per IP |
| Calculator | 60 requests | Per minute per IP |

### 8.5 Data Validation Rules

| Rule | Specification |
|------|---------------|
| **Schema Validation** | Zod schemas for all API inputs |
| **Type Safety** | TypeScript strict mode, no `any` types |
| **SQL Injection** | Use parameterized queries only (Prisma/Supabase client) |
| **XSS Prevention** | React escaping + DOMPurify for MDX content |
| **CSRF Protection** | SameSite cookies + CSRF tokens for forms |

### 8.6 Security Headers

| Header | Value |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `X-XSS-Protection` | `0` (rely on CSP instead) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy` | See Section 11 CSP spec |

### 8.7 Security Best Practices

1. **Dependency Scanning:** Run `npm audit` weekly. Fix critical/high within 48 hours.
2. **Minimal Dependencies:** Audit new packages before adding.
3. **No Secrets in Code:** Never hardcode API keys, passwords, or tokens.
4. **Least Privilege:** Supabase service role key used only for admin operations.
5. **Regular Updates:** Update Next.js, React, and all dependencies monthly.
6. **Error Handling:** Never expose stack traces or internal errors to users.

---

## 9. Monetization Specifications

### 9.1 Allowed Monetization Methods

#### Google AdSense

| Rule | Specification |
|------|---------------|
| **Placement** | Below article content, sidebar (desktop), between sections (mobile) |
| **Density** | Maximum 3 ad units per page |
| **Format** | In-article, in-feed. No popups. |
| **Approval** | Apply after 50+ articles, 100+ pages, 3+ months old |
| **Policy Compliance** | No ads on legal pages, no ads in calculators |
| **Layout Shift** | Ads must have fixed dimensions (prevent CLS) |

#### Affiliate Marketing

| Rule | Specification |
|------|---------------|
| **Partners** | Only RBI-regulated banks and NBFCs |
| **Disclosure** | Every page with affiliate links has disclosure at top |
| **Link Type** | Text links within content. No deceptive button styling. |
| **No Cloaking** | Affiliate links visible in status bar on hover |
| **Link Tracking** | Use `rel="sponsored"` on all affiliate links |
| **Content Integrity** | Affiliate partnerships do NOT influence recommendations |

#### Sponsored Content

| Rule | Specification |
|------|---------------|
| **Labeling** | Every sponsored post labeled "Sponsored" or "Paid Partnership" |
| **Placement** | Marked in URL: /sponsored/{slug}/ |
| **Disclosure** | FTC-compliant disclosure |
| **Editorial Control** | FinShastra retains editorial control |
| **Quality** | Same quality standards as editorial |
| **Frequency** | Maximum 2 sponsored articles per month at MVP |

#### Lead Generation

| Rule | Specification |
|------|---------------|
| **Method** | Form submissions connecting users with partner banks |
| **Disclosure** | Clear disclosure that submitting form shares data with partner |
| **Consent** | Explicit opt-in consent before sharing data |
| **Data Sharing** | Only: name, email, phone, loan requirement |
| **Privacy Policy** | Updated to reflect data sharing practices |

### 9.2 Forbidden Monetization Methods

| Method | Why Forbidden |
|--------|---------------|
| **Misleading Financial Advice** | Legal liability, trust destruction |
| **Fake Reviews/Ratings** | FTC violation, trust destruction |
| **Hidden Affiliate Links** | FTC violation, Google penalty |
| **Aggressive Popups** | Google interstitial penalty |
| **Selling User Data** | Legal violation, trust destruction |
| **Dark Pattern CTAs** | Manipulation, legal risk |
| **Guaranteed Returns Promises** | SEBI violation |
| **Crypto/Illegal Lending Promotion** | Regulatory risk |
| **Autoplay Video Ads** | Data cost, annoying |
| **Push Notification Spam** | User annoyance |

---

## 10. Analytics Specifications

### 10.1 Tracking Requirements

#### Google Analytics 4 (GA4)

| Setup | Specification |
|-------|---------------|
| **Enhanced Measurement** | Page views, scrolls, outbound clicks, site search, file downloads |
| **Custom Events** | Calculator usage, newsletter signup, CTA clicks, FAQ expand |
| **Consent Mode** | Respect user cookie consent preferences |
| **IP Anonymization** | Enabled (default in GA4) |
| **Data Retention** | 14 months |

#### Google Search Console

| Setup | Specification |
|-------|---------------|
| **Verification** | DNS TXT record |
| **Sitemap** | Submit sitemap.xml |
| **Monitoring** | Check weekly for crawl errors, manual actions |
| **Core Web Vitals** | Monitor CWV reports monthly |

### 10.2 Event Tracking

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `page_view` | Every page load | page_path, page_title, referrer |
| `scroll_depth` | 25%, 50%, 75%, 100% scroll | percent_scrolled |
| `cta_click` | CTA button click | cta_text, cta_location, target_url |
| `calculator_use` | Calculator form submit | calculator_type, inputs, result |
| `newsletter_signup` | Newsletter form submit | source |
| `faq_expand` | FAQ accordion expand | question_text, article_slug |
| `search_execute` | Search query executed | query, results_count |
| `affiliate_click` | Affiliate link click | partner_name, link_location |
| `outbound_click` | External link click | target_url, link_text |

### 10.3 Metrics That Matter

| Metric | Target |
|--------|--------|
| **Organic Traffic** | 100K/month by Month 12 |
| **Pages per Session** | > 2.0 |
| **Average Session Duration** | > 3 minutes |
| **Bounce Rate** | < 60% |
| **Newsletter Signups** | 5% of visitors |
| **Affiliate CTR** | > 3% of visitors |
| **Core Web Vitals** | All green |
| **Indexed Pages** | > 90% of target pages |
| **Domain Authority** | DR 50 by Month 24 |
| **Backlink Growth** | 50+ referring domains by Month 12 |

### 10.4 Metrics That Do Not Matter

| Metric | Why |
|--------|-----|
| **Pageviews** | Vanity metric without context |
| **Unique Visitors** | Without engagement context |
| **Social Likes** | Do not correlate with revenue |
| **Twitter Followers** | Do not drive traffic or revenue |
| **Page Rank** | Deprecated |
| **Vanity Keywords** | Ranking for irrelevant high-volume keywords |

---

## 11. Development Standards

### 11.1 Required Standards

#### TypeScript Rules

| Rule | Specification |
|------|---------------|
| **Strict Mode** | `strict: true` in tsconfig.json |
| **No Any** | `@typescript-eslint/no-explicit-any: error` |
| **Type Safety** | All functions, props, API responses typed |
| **Naming** | PascalCase for components, camelCase for functions, UPPER_SNAKE for constants |
| **Exports** | Named exports only. No default exports (except page/layout). |

#### Code Architecture

| Rule | Specification |
|------|---------------|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui components |
| **Database** | Supabase (PostgreSQL) |
| **ORM** | Prisma |
| **State Management** | React Server Components (primary), Zustand (client-only) |
| **Forms** | React Hook Form + Zod validation |
| **MDX** | next-mdx-remote for content rendering |

#### Component Rules

| Rule | Specification |
|------|---------------|
| **Single Responsibility** | Each component does one thing |
| **Composition over Configuration** | Prefer composable components |
| **Colocation** | Keep components near their usage |
| **Reusable Components** | `/src/components/ui/` for generic UI |
| **Feature Components** | `/src/features/{feature}/` for feature-specific |
| **Page Components** | `/src/app/` only for page routing logic |
| **Props Interface** | Every component has a named props interface |
| **No Inline Styles** | Use Tailwind classes only |

#### File Naming Rules

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ArticleCard.tsx` |
| Utilities | camelCase | `formatCurrency.ts` |
| Constants | UPPER_SNAKE_CASE | `SITE_CONFIG.ts` |
| Types | PascalCase | `Article.ts` |
| Pages | lowercase (Next.js) | `page.tsx`, `layout.tsx` |
| API Routes | lowercase | `route.ts` |

### 11.2 Forbidden Development Practices

| Practice | Why Forbidden |
|----------|---------------|
| **Hardcoded Data** | Use database, config files, or environment variables |
| **Massive Components** | Components > 200 lines should be split |
| **Duplicate Logic** | Extract to utility functions or shared components |
| **Unused Dependencies** | Remove unused packages. Audit quarterly. |
| `any` Type | Defeats TypeScript purpose |
| **Console.log in Production** | Use proper logging service |
| **Commented-Out Code** | Delete it. Use git history if needed. |
| **Magic Numbers** | Extract to named constants |
| **Deep Nesting** | Max 3 levels |
| **God Modules** | Single file doing everything |

### 11.3 Code Quality Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **TypeScript** | Type checking |
| **Husky** | Git hooks |
| **lint-staged** | Staged file linting |
| **Vitest** | Unit testing (80% coverage) |
| **Playwright** | E2E testing |
| **Lighthouse CI** | Performance testing |

### 11.4 Git Workflow

| Rule | Specification |
|------|---------------|
| **Main Branch** | `main` — production-ready code |
| **Development** | `develop` — integration branch |
| **Features** | `feature/{name}` |
| **Fixes** | `fix/{name}` |
| **Commits** | Conventional: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:` |
| **PR Reviews** | Minimum 1 approval before merge |
| **CI Checks** | ESLint, TypeScript, Tests must pass |
| **No Force Push** | Never force push to main or develop |

---

## 12. Future Roadmap

### Phase 1: Foundation (Months 1-6)

| Deliverable | Timeline |
|-------------|----------|
| Core website (Next.js, Supabase) | Month 1-2 |
| 3 pillar pages | Month 2 |
| 50 cluster articles | Month 2-4 |
| 100 programmatic pages | Month 3-5 |
| EMI Calculator, Personal Loan Calculator, Credit Score Guide | Month 3-4 |
| Newsletter system | Month 4 |
| Google AdSense integration | Month 4-5 |
| 10 affiliate partnerships | Month 4-6 |
| 500K monthly pageviews | Month 6 |

### Phase 2: Scale (Months 7-12)

| Deliverable | Timeline |
|-------------|----------|
| 200+ cluster articles | Month 7-10 |
| 405+ programmatic pages | Month 7-10 |
| SIP Calculator, FD Calculator, Tax Calculator | Month 7-9 |
| 30+ affiliate partnerships | Month 7-9 |
| Sponsored content program | Month 8 |
| Advanced search (Algolia) | Month 10 |
| Hindi content pilot | Month 11 |
| 1M monthly pageviews | Month 12 |

### Phase 3: Expand (Months 13-18)

| Deliverable | Timeline |
|-------------|----------|
| Mutual Funds vertical | Month 13-15 |
| Insurance vertical | Month 14-16 |
| Tax Planning vertical | Month 15-17 |
| Credit Card Eligibility Checker, Loan Eligibility Checker | Month 14-16 |
| Comparison tools | Month 14 |
| User accounts (basic) | Month 16 |
| Lead generation forms | Month 17 |
| 2M monthly pageviews | Month 18 |

### Phase 4: Authority (Months 19-24)

| Deliverable | Timeline |
|-------------|----------|
| Hindi/regional language support | Month 19-20 |
| Banking vertical | Month 19-21 |
| Government Schemes vertical | Month 20-22 |
| PWA (Progressive Web App) | Month 21 |
| Mobile app (React Native) | Month 22-24 |
| Account Aggregator integration | Month 23 |
| Financial planning tools | Month 24 |
| 5M monthly pageviews | Month 24 |

---

## 13. AI Agent Rules

### 13.1 Before Performing Any Task

```
1. READ specs.md
2. READ rules.md
3. READ coding-standards.md
4. READ project-plan.md
5. READ seo-architecture.md
6. READ features.md
7. READ technical-architecture.md
8. READ content-strategy.md
9. READ ui-ux.md
```

### 13.2 AI Agent Must

1. Read all project files before generating any code or content
2. Understand existing architecture before making changes
3. Check for existing components before creating new ones
4. Check for existing APIs before creating new endpoints
5. Check for existing database schema before modifying data models
6. Check for existing utilities before writing new utility functions
7. Follow project standards at all times
8. Avoid assumptions — ask for clarification if unsure
9. Avoid duplicate work — reuse existing code
10. Preserve SEO integrity
11. Preserve performance standards
12. Preserve accessibility standards
13. Document all changes

### 13.3 AI Agent Must NEVER

1. Ignore specifications
2. Add undocumented features
3. Change architecture without approval
4. Break SEO structures
5. Break content silos
6. Introduce technical debt
7. Introduce unnecessary dependencies
8. Remove existing functionality without justification
9. Skip testing
10. Commit secrets
11. Ignore accessibility
12. Ignore mobile experience
13. Ignore performance

---

## 14. AUTHORITY_BUILDING_SYSTEM

**Goal:** Become the most trusted finance education platform in India.

### Requirements

| Requirement | Specification |
|-------------|---------------|
| **Expert Author Profiles** | Real names, verifiable credentials, professional photos, LinkedIn links |
| **Editorial Review Process** | Every article reviewed by subject matter expert before publish |
| **Financial Content Fact Checking** | All data verified against RBI, CIBIL, bank official sources |
| **Source Citations** | All statistics cite official sources with links |
| **Annual Content Audits** | Full content audit every 12 months. Update, prune, or consolidate. |
| **Monthly Content Refreshes** | Critical articles reviewed and updated monthly |
| **Content Freshness Indicators** | "Last Updated: {date}" visible on every article |
| **Editorial Policy Page** | Public /editorial-policy/ page explaining our process |

### Authority Signals

| Signal | Implementation |
|--------|---------------|
| **Expert Authors** | Author bios with credentials on every article |
| **Review Badges** | "Reviewed by {Expert Name}, {Credential}" on articles |
| **Data Citations** | Links to RBI, SEBI, bank official sources |
| **Transparency** | Affiliate disclosure, sponsorship disclosure |
| **Corrections** | Public corrections page with edit history |
| **External Mentions** | Track and build backlinks from authoritative sources |
| **Google Knowledge Panel** | Claim and optimize Knowledge Panel |

---

## 15. TOOLS_ROADMAP

### Phase 1 Tools

| Tool | Description | SEO Value |
|------|-------------|-----------|
| **EMI Calculator** | Calculate EMI for personal loans | /tools/emi-calculator/ — high search volume |
| **Personal Loan Calculator** | Compare loan offers, calculate total cost | /tools/personal-loan-calculator/ |
| **Credit Score Guide** | Interactive guide to understanding scores | /tools/credit-score-guide/ |

### Phase 2 Tools

| Tool | Description | SEO Value |
|------|-------------|-----------|
| **SIP Calculator** | Calculate SIP returns | /tools/sip-calculator/ — 49,500+ volume |
| **FD Calculator** | Calculate fixed deposit maturity | /tools/fd-calculator/ — 33,100+ volume |
| **Tax Calculator** | Calculate income tax under old/new regime | /tools/tax-calculator/ — 74,000+ volume |

### Phase 3 Tools

| Tool | Description | SEO Value |
|------|-------------|-----------|
| **Credit Card Eligibility Checker** | Check which cards user qualifies for | /tools/credit-card-eligibility/ |
| **Loan Eligibility Checker** | Check loan amount user qualifies for | /tools/loan-eligibility/ |

### Rule

Every tool MUST generate SEO pages. Each tool page includes:
- Interactive calculator/checker
- Detailed explanation of the concept
- FAQ section with schema markup
- Related articles
- Internal links to relevant content

---

## 16. LEAD_GENERATION_SYSTEM

**Current State:** Educational Website
**Future State:** Lead Generation Platform

### Stages

| Stage | Description | Timeline |
|-------|-------------|----------|
| **Stage 1: Traffic** | Build organic traffic through SEO content | Months 1-6 |
| **Stage 2: Email Collection** | Capture emails via newsletter, calculators, guides | Months 3-6 |
| **Stage 3: Newsletter** | Weekly digest with personalized recommendations | Months 6-12 |
| **Stage 4: Affiliate Leads** | Drive qualified traffic to partner banks via affiliate links | Months 6-12 |
| **Stage 5: Direct Partner Leads** | Form submissions that connect users directly with partner banks | Months 12-18 |

### Lead Generation Tactics

| Tactic | Implementation |
|--------|---------------|
| **Newsletter Signup** | End of every article, sidebar, dedicated landing page |
| **Calculator Results** | "Get personalized recommendations" CTA after calculator results |
| **Comparison Pages** | "Apply Now" buttons on comparison pages |
| **Bank Pages** | "Check Eligibility" CTAs on bank profile pages |
| **City Pages** | "Find Loans in {City}" CTAs on city-specific pages |
| **Exit Intent** | Newsletter popup on exit intent (Phase 2) |
| **Push Notifications** | Web push for returning visitors (Phase 2) |

---

## 17. TOPICAL_AUTHORITY_SYSTEM

For every pillar page:

| Requirement | Specification |
|-------------|---------------|
| **Minimum** | 1 Pillar Article |
| **Required** | 10 Supporting Articles |
| **Target** | 25 Supporting Articles |
| **Orphan Pages** | No orphan pages allowed. Every page must be linked from at least one other page. |

### Pillar Page Structure

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

### Internal Linking Requirements

- Pillar page links to ALL supporting articles
- Supporting articles link back to pillar page (within first 100 words)
- Supporting articles link to 2-3 sibling articles
- Supporting articles link to 1 cross-silo article
- Programmatic pages link to parent pillar and related articles
- No orphan pages (reachable within 3 clicks from homepage)

---

## 18. COMPARISON_PAGE_SYSTEM

### URL Patterns

| Pattern | Example |
|---------|---------|
| `/credit-cards/{brand1}-vs-{brand2}` | /credit-cards/hdfc-vs-sbi |
| `/personal-loan/{brand1}-vs-{brand2}` | /personal-loan/hdfc-vs-icici |
| `/sip-vs-fd` | /compare/sip-vs-fd |

### Required Pages Per Topic

| Page Type | Description | Example |
|-----------|-------------|---------|
| **Comparison Pages** | Head-to-head comparison | HDFC vs SBI Credit Card |
| **Alternative Pages** | "Alternatives to X" | Alternatives to HDFC Credit Card |
| **Best Of Pages** | Top picks by category | Best Credit Cards for Travel |

### Comparison Page Structure

```
Title: {Product A} vs {Product B} - Complete Comparison (2026)
H1: {Product A} vs {Product B}
Intro: Quick verdict summary
Comparison Table: Side-by-side features
Detailed Comparison: Section-by-section analysis
Pros/Cons: For each product
Who Should Choose: Use case recommendations
FAQ: Common comparison questions
CTA: Apply/Check Eligibility
```

### Rules

- Every major topic MUST have comparison pages
- Every major topic MUST have alternative pages
- Every major topic MUST have best-of pages
- All comparison pages must be fact-checked and updated monthly
- Comparison tables must include all relevant features

---

## 19. PROGRAMMATIC_SEO_SYSTEM

### Future Page Types

| Page Type | URL Pattern | Example |
|-----------|-------------|---------|
| **Audience-Based** | /{topic}-for-{audience}/ | /credit-score-for-students/ |
| **Profession-Based** | /{topic}-for-{profession}/ | /credit-score-for-doctors/ |
| **Business-Based** | /{topic}-for-{business}/ | /credit-score-for-business-owners/ |
| **City-Based** | /{topic}-in-{city}/ | /personal-loan-in-ahmedabad/ |
| **Salary-Based** | /{topic}-salary-{range}/ | /personal-loan-salary-5-lakh/ |
| **Amount-Based** | /{topic}-amount-{range}/ | /personal-loan-10-lakh/ |
| **Tenure-Based** | /{topic}-tenure-{years}/ | /personal-loan-5-years/ |
| **Score-Based** | /{topic}-score-{range}/ | /credit-score-750/ |

### Requirements

| Requirement | Specification |
|-------------|---------------|
| **No Thin Pages** | Every programmatic page must have minimum 800 words of unique content |
| **Minimum Content Threshold** | 800 words unique content + comparison tables + FAQ |
| **Unique Value Per Page** | Each page must provide specific, relevant information for its target |
| **Internal Linking** | Every programmatic page links to parent pillar and related articles |
| **Schema Markup** | FinancialProduct schema where applicable, BreadcrumbList, FAQPage |
| **Quality Control** | All programmatic pages reviewed before publishing |

### Content Requirements Per Programmatic Page

1. **Unique Introduction** (100+ words) — specific to the page's target
2. **Relevant Data Table** — rates, features, eligibility for the specific target
3. **Detailed Content** (400+ words) — specific information for the target audience/city/salary
4. **Comparison Section** — relevant products for this specific target
5. **FAQ Section** (3-5 questions) — with FAQ schema
6. **CTA Section** — relevant call-to-action
7. **Internal Links** — links to related pillar and cluster articles

---

## 20. TRUST_SYSTEM

### Homepage Must Include

| Element | Placement |
|---------|-----------|
| **Editorial Policy** | Footer link, dedicated page |
| **Author Profiles** | Link to /author/ page |
| **Last Updated Dates** | Visible on featured articles |
| **Contact Information** | Footer |
| **Company Information** | Footer, dedicated /about/ page |
| **Disclaimer** | Footer, dedicated /disclaimer/ page |
| **Privacy Policy** | Footer, dedicated /privacy/ page |
| **Affiliate Disclosure** | Footer, dedicated /affiliate-disclosure/ page |

### Every Article Must Include

| Element | Placement |
|---------|-----------|
| **Author** | Below title, with photo and bio link |
| **Reviewer** | "Reviewed by {Expert Name}, {Credential}" |
| **Last Updated** | Below title, next to author |
| **Sources** | In-text citations with links to official sources |
| **Affiliate Disclosure** | Top of article (if monetized) |
| **Editorial Policy** | Link in footer |

### Trust Badge System

| Badge | Requirements |
|-------|-------------|
| **Expert Reviewed** | Article reviewed by certified professional |
| **Fact Checked** | All data verified against official sources |
| **Updated** | Article updated within last 90 days |
| **Comprehensive** | Article covers topic fully (2000+ words, FAQ, tables) |

---

## 21. MONETIZATION_ROADMAP

### Year 1: Google AdSense

| Milestone | Timeline |
|-----------|----------|
| Apply for AdSense | Month 4 (50+ articles, 100+ pages) |
| Get approved | Month 4-5 |
| Optimize placements | Month 5-6 |
| Target: ₹50K/month | Month 6 |

### Year 2: Affiliate Marketing

| Milestone | Timeline |
|-----------|----------|
| Partner with 10 banks/NBFCs | Month 7-8 |
| Partner with 30 banks/NBFCs | Month 12 |
| Optimize affiliate CTAs | Month 9-12 |
| Target: ₹2L/month affiliate revenue | Month 12 |

### Year 3: Lead Generation

| Milestone | Timeline |
|-----------|----------|
| Launch lead capture forms | Month 13-14 |
| Partner with 50+ banks for direct leads | Month 15-18 |
| Optimize conversion funnels | Month 16-18 |
| Target: ₹10L/month total revenue | Month 18 |

### Year 4: Partner Marketplace

| Milestone | Timeline |
|-----------|----------|
| Launch partner dashboard | Month 19-21 |
| Self-serve partner onboarding | Month 22-24 |
| Target: ₹25L/month total revenue | Month 24 |

### Year 5: Financial SaaS Tools

| Milestone | Timeline |
|-----------|----------|
| Premium calculator tools | Month 25-30 |
| Financial planning tools | Month 30-36 |
| Target: ₹50L/month total revenue | Month 36 |

---

## 22. AI_EXECUTION_PROTOCOL

### Before Any Task

```
Step 1: READ specs.md
Step 2: READ project-plan.md
Step 3: READ seo-architecture.md
Step 4: READ features.md
Step 5: READ technical-architecture.md
Step 6: READ content-strategy.md
Step 7: READ ui-ux.md
Step 8: READ rules.md
Step 9: READ coding-standards.md
```

### Then

- Search codebase for existing implementations
- Understand current architecture
- Check existing implementation
- Identify duplicates
- Verify SEO impact
- Verify performance impact

### Only Then

- Create or modify code
- Follow all project standards
- Document all changes

---

## 23. NEVER_BUILD_LIST

| Feature | Reason |
|---------|--------|
| **Forums** | Scope creep, moderation burden |
| **Social Networks** | Not our product |
| **Loan Processing Systems** | Requires NBFC license |
| **Banking Systems** | Not our product |
| **User Chat Platforms** | Scope creep, moderation burden |
| **Cryptocurrency Exchange** | Regulatory risk |
| **Trading Platform** | Requires SEBI license |
| **Unverified Financial Advice** | YMYL violation |

**Reason:** Focus on authority, SEO, and lead generation.

---

## 24. AI_AGENT_OPERATING_SYSTEM

### Before Performing Any Task

```
1. Read specs.md — This file. The constitution.
2. Read rules.md — Project-specific rules.
3. Read coding-standards.md — Coding conventions.
4. Read project-plan.md — Strategic context.
5. Read seo-architecture.md — SEO requirements.
6. Read features.md — Feature specifications.
7. Read technical-architecture.md — Technical decisions.
8. Read content-strategy.md — Content guidelines.
9. Read ui-ux.md — Design requirements.
```

### AI Agent Must

1. Search all project documents before making decisions
2. Understand existing architecture
3. Check existing implementation
4. Verify existing requirements
5. Follow project standards
6. Avoid assumptions
7. Avoid duplicate work
8. Preserve SEO integrity
9. Preserve performance standards
10. Preserve accessibility standards

### AI Agent Must NEVER

1. Ignore specifications
2. Add undocumented features
3. Change architecture without approval
4. Break SEO structures
5. Break content silos
6. Introduce technical debt
7. Introduce unnecessary dependencies
8. Remove existing functionality without justification

---

## 25. OPENCODE_EXECUTION_RULES

### Before Generating Code

```
1. Search all project files
2. Read all project files
3. Understand current implementation
4. Check for existing components
5. Check for existing APIs
6. Check for existing database schema
7. Check for existing utilities
8. Check for existing SEO systems
9. Check for existing design systems
```

### Before Creating Anything New

- Verify it does not already exist
- Verify it follows architecture
- Verify it follows naming conventions
- Verify it follows coding standards

### When Generating Code

- Reuse existing code
- Reuse existing components
- Reuse existing utilities
- Reuse existing patterns

### Never

- Create duplicate systems
- Create duplicate logic
- Create duplicate components
- Create duplicate APIs

### Always

- Prefer extension over replacement
- Follow existing patterns
- Document changes
- Test before committing

---

## 26. Project Principles

1. **SEO First** — Every feature evaluated through SEO lens
2. **Trust Before Monetization** — Build trust first. Revenue follows.
3. **Simplicity Over Complexity** — Choose simplest solution that works
4. **Mobile First** — Design for mobile first. Desktop is enhancement.
5. **Performance First** — Speed is a feature. Every millisecond matters.
6. **Accessibility First** — Every user matters. WCAG 2.1 AA minimum.
7. **Scalable Architecture** — Build for scale from day one
8. **Long-Term Authority** — Brand, not get-rich-quick scheme
9. **Data-Driven Decisions** — Measure everything. Optimize based on data.
10. **User Education Over Sales** — Educate first. Sales are byproduct.

---

## Appendix A: Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14+ |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS 3.x |
| **UI Components** | shadcn/ui |
| **Database** | Supabase (PostgreSQL) |
| **ORM** | Prisma |
| **Auth** | Supabase Auth |
| **Content** | MDX (next-mdx-remote) |
| **Search** | Fuse.js (MVP) -> Algolia (Scale) |
| **Hosting** | Vercel |
| **Analytics** | GA4 + Search Console |
| **Email** | Resend / SendGrid |
| **Testing** | Vitest + Playwright |
| **CI/CD** | GitHub Actions |

## Appendix B: Page Templates

| Template | Route Pattern | Rendering |
|----------|---------------|-----------|
| Homepage | `/` | SSG |
| Category Hub | `/{vertical}/` | SSG + ISR |
| Sub-Category | `/{vertical}/{sub}/` | SSG + ISR |
| Article | `/{vertical}/{slug}/` | SSG + ISR |
| Programmatic | `/{vertical}/{type}/{slug}/` | SSG + ISR |
| Comparison | `/{vertical}/{brand1}-vs-{brand2}/` | SSG + ISR |
| Best Of | `/{vertical}/best-{category}/` | SSG + ISR |
| Calculator | `/tools/{calculator}/` | SSG |
| Author | `/author/{slug}/` | SSG |
| Legal | `/{page}/` | SSG |
| Search | `/search` | CSR |
| 404 | `/not-found` | SSG |

## Appendix C: Database Tables (Core)

| Table | Purpose |
|-------|---------|
| `articles` | Article content and metadata |
| `authors` | Author profiles and credentials |
| `categories` | Category/subcategory hierarchy |
| `banks` | Bank/NBFC partner information |
| `calculators` | Calculator configuration and data |
| `faqs` | FAQ content per page |
| `newsletters` | Newsletter subscriber data |
| `contacts` | Contact form submissions |
| `comments` | Article comments (Phase 2) |
| `page_views` | Analytics data |
| `redirects` | URL redirect mappings |
| `comparisons` | Comparison page data |
| `programs` | Programmatic page data |

---

---

## 27. ADMIN_SYSTEM_ARCHITECTURE

> **Status:** Architecture Specification
> **Admin URL:** http://localhost:11
> **Frontend URL:** http://localhost:1111
> **Architecture:** Separate Next.js application, shared database

### 27.1 Architecture Overview

The admin panel is a **standalone Next.js application** running on port 11, completely separate from the public frontend (port 1111). Both applications share the same Supabase PostgreSQL database via Prisma.

```
finshastra/
+-- apps/
|   +-- web/                  <- Frontend (port 1111)
|   |   +-- src/app/          <- Public pages
|   |   +-- next.config.ts
|   |   +-- package.json
|   |
|   +-- admin/                <- Admin Panel (port 11)
|       +-- src/app/          <- Admin pages
|       +-- next.config.ts
|       +-- package.json
|
+-- packages/
|   +-- shared/               <- Shared code
|       +-- prisma/           <- Schema (single source of truth)
|       +-- types/            <- Shared TypeScript types
|       +-- utils/            <- Shared utilities
|       +-- validations/      <- Shared Zod schemas
|
+-- turbo.json                <- Turborepo config
+-- package.json              <- Root workspace config
```

**Why Separate Apps:**
- Admin has different security requirements (MFA, stricter auth)
- Admin has different performance requirements (no SEO concerns)
- Admin has different caching strategy (no ISR, no SSG)
- Admin can be deployed independently
- Admin can have different dependencies (rich text editors, image croppers)
- Clear separation of concerns

### 27.2 Admin Folder Structure

```
apps/admin/
+-- src/
|   +-- app/
|   |   +-- (auth)/                    <- Auth route group
|   |   |   +-- login/
|   |   |   |   +-- page.tsx
|   |   |   +-- logout/
|   |   |   |   +-- route.ts
|   |   |   +-- reset-password/
|   |   |   |   +-- page.tsx
|   |   |   +-- layout.tsx
|   |   |
|   |   +-- (dashboard)/               <- Protected dashboard route group
|   |   |   +-- layout.tsx             <- Admin layout (sidebar, header)
|   |   |   +-- page.tsx               <- Dashboard home
|   |   |   |
|   |   |   +-- articles/
|   |   |   |   +-- page.tsx           <- Article list
|   |   |   |   +-- new/
|   |   |   |   |   +-- page.tsx       <- Create article
|   |   |   |   +-- [id]/
|   |   |   |       +-- page.tsx       <- View article
|   |   |   |       +-- edit/
|   |   |   |           +-- page.tsx   <- Edit article
|   |   |   |
|   |   |   +-- categories/
|   |   |   |   +-- page.tsx           <- Category list
|   |   |   |   +-- new/
|   |   |   |   |   +-- page.tsx       <- Create category
|   |   |   |   +-- [id]/
|   |   |   |       +-- page.tsx       <- View category
|   |   |   |       +-- edit/
|   |   |   |           +-- page.tsx   <- Edit category
|   |   |   |
|   |   |   +-- tags/
|   |   |   |   +-- page.tsx           <- Tag list
|   |   |   |   +-- new/
|   |   |   |   |   +-- page.tsx       <- Create tag
|   |   |   |   +-- [id]/
|   |   |   |       +-- page.tsx       <- View tag
|   |   |   |       +-- edit/
|   |   |   |           +-- page.tsx   <- Edit tag
|   |   |   |
|   |   |   +-- authors/
|   |   |   |   +-- page.tsx           <- Author list
|   |   |   |   +-- new/
|   |   |   |   |   +-- page.tsx       <- Create author
|   |   |   |   +-- [id]/
|   |   |   |       +-- page.tsx       <- View author
|   |   |   |       +-- edit/
|   |   |   |           +-- page.tsx   <- Edit author
|   |   |   |
|   |   |   +-- seo/
|   |   |   |   +-- page.tsx           <- SEO overview
|   |   |   |   +-- meta/
|   |   |   |   |   +-- page.tsx       <- Meta editor
|   |   |   |   +-- sitemap/
|   |   |   |   |   +-- page.tsx       <- Sitemap management
|   |   |   |   +-- redirects/
|   |   |   |   |   +-- page.tsx       <- Redirect manager
|   |   |   |   +-- links/
|   |   |   |       +-- page.tsx       <- Internal link manager
|   |   |   |
|   |   |   +-- media/
|   |   |   |   +-- page.tsx           <- Media library
|   |   |   |   +-- upload/
|   |   |   |       +-- page.tsx       <- Upload interface
|   |   |   |
|   |   |   +-- analytics/
|   |   |   |   +-- page.tsx           <- Analytics dashboard
|   |   |   |   +-- traffic/
|   |   |   |   |   +-- page.tsx       <- Traffic details
|   |   |   |   +-- keywords/
|   |   |   |   |   +-- page.tsx       <- Keyword rankings
|   |   |   |   +-- pages/
|   |   |   |       +-- page.tsx       <- Page performance
|   |   |   |
|   |   |   +-- settings/
|   |   |   |   +-- page.tsx           <- Settings overview
|   |   |   |   +-- general/
|   |   |   |   |   +-- page.tsx       <- General settings
|   |   |   |   +-- seo/
|   |   |   |   |   +-- page.tsx       <- SEO settings
|   |   |   |   +-- analytics/
|   |   |   |   |   +-- page.tsx       <- Analytics settings
|   |   |   |   +-- email/
|   |   |   |   |   +-- page.tsx       <- Email settings
|   |   |   |   +-- security/
|   |   |   |       +-- page.tsx       <- Security settings
|   |   |   |
|   |   |   +-- audit-logs/
|   |   |   |   +-- page.tsx           <- Audit log viewer
|   |   |   |
|   |   |   +-- users/
|   |   |       +-- page.tsx           <- Admin user list
|   |   |       +-- new/
|   |   |       |   +-- page.tsx       <- Create admin user
|   |   |       +-- [id]/
|   |   |           +-- page.tsx       <- View admin user
|   |   |           +-- edit/
|   |   |               +-- page.tsx   <- Edit admin user
|   |   |
|   |   +-- api/
|   |   |   +-- auth/
|   |   |   |   +-- login/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- logout/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- refresh/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- reset-password/
|   |   |   |       +-- route.ts
|   |   |   |
|   |   |   +-- articles/
|   |   |   |   +-- route.ts           <- GET (list), POST (create)
|   |   |   |   +-- [id]/
|   |   |   |       +-- route.ts       <- GET (detail), PUT (update), DELETE
|   |   |   |       +-- status/
|   |   |   |           +-- route.ts   <- PATCH (status change)
|   |   |   |       +-- revisions/
|   |   |   |           +-- route.ts   <- GET (revisions)
|   |   |   |
|   |   |   +-- categories/
|   |   |   |   +-- route.ts
|   |   |   |   +-- [id]/
|   |   |   |       +-- route.ts
|   |   |   |
|   |   |   +-- tags/
|   |   |   |   +-- route.ts
|   |   |   |   +-- [id]/
|   |   |   |       +-- route.ts
|   |   |   |
|   |   |   +-- authors/
|   |   |   |   +-- route.ts
|   |   |   |   +-- [id]/
|   |   |   |       +-- route.ts
|   |   |   |
|   |   |   +-- media/
|   |   |   |   +-- route.ts
|   |   |   |   +-- upload/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- [id]/
|   |   |   |       +-- route.ts
|   |   |   |
|   |   |   +-- seo/
|   |   |   |   +-- meta/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- sitemap/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- redirects/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- links/
|   |   |   |       +-- route.ts
|   |   |   |
|   |   |   +-- analytics/
|   |   |   |   +-- dashboard/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- traffic/
|   |   |   |   |   +-- route.ts
|   |   |   |   +-- pages/
|   |   |   |       +-- route.ts
|   |   |   |
|   |   |   +-- settings/
|   |   |   |   +-- route.ts
|   |   |   |   +-- [key]/
|   |   |   |       +-- route.ts
|   |   |   |
|   |   |   +-- audit-logs/
|   |   |   |   +-- route.ts
|   |   |   |
|   |   |   +-- users/
|   |   |       +-- route.ts
|   |   |       +-- [id]/
|   |   |           +-- route.ts
|   |   |
|   |   +-- layout.tsx                 <- Root layout
|   |   +-- not-found.tsx
|   |
|   +-- components/
|   |   +-- ui/                         <- shadcn/ui components
|   |   +-- layout/
|   |   |   +-- AdminSidebar.tsx
|   |   |   +-- AdminHeader.tsx
|   |   |   +-- AdminBreadcrumb.tsx
|   |   |   +-- AdminShell.tsx
|   |   +-- articles/
|   |   |   +-- ArticleForm.tsx
|   |   |   +-- ArticleList.tsx
|   |   |   +-- ArticleStatusBadge.tsx
|   |   |   +-- ArticlePreview.tsx
|   |   |   +-- RevisionHistory.tsx
|   |   +-- categories/
|   |   |   +-- CategoryForm.tsx
|   |   |   +-- CategoryTree.tsx
|   |   |   +-- CategoryList.tsx
|   |   +-- tags/
|   |   |   +-- TagForm.tsx
|   |   |   +-- TagList.tsx
|   |   |   +-- TagCloud.tsx
|   |   +-- authors/
|   |   |   +-- AuthorForm.tsx
|   |   |   +-- AuthorList.tsx
|   |   |   +-- AuthorProfile.tsx
|   |   +-- seo/
|   |   |   +-- MetaEditor.tsx
|   |   |   +-- SEOScoreCard.tsx
|   |   |   +-- RedirectForm.tsx
|   |   |   +-- LinkSuggestion.tsx
|   |   +-- media/
|   |   |   +-- MediaLibrary.tsx
|   |   |   +-- MediaUploader.tsx
|   |   |   +-- ImageOptimizer.tsx
|   |   |   +-- AltTextEditor.tsx
|   |   +-- analytics/
|   |   |   +-- TrafficChart.tsx
|   |   |   +-- TopPagesTable.tsx
|   |   |   +-- SEOScoreCard.tsx
|   |   |   +-- KeywordRankings.tsx
|   |   +-- dashboard/
|   |   |   +-- StatsCard.tsx
|   |   |   +-- RecentActivity.tsx
|   |   |   +-- TrafficOverview.tsx
|   |   |   +-- ContentOverview.tsx
|   |   +-- settings/
|   |   |   +-- SettingsForm.tsx
|   |   |   +-- SEOSettings.tsx
|   |   |   +-- AnalyticsSettings.tsx
|   |   |   +-- EmailSettings.tsx
|   |   +-- audit/
|   |   |   +-- AuditLogTable.tsx
|   |   |   +-- AuditLogFilter.tsx
|   |   +-- auth/
|   |       +-- LoginForm.tsx
|   |       +-- ResetPasswordForm.tsx
|   |       +-- MFAForm.tsx
|   |
|   +-- features/
|   |   +-- auth/
|   |   |   +-- hooks/
|   |   |   |   +-- useAuth.ts
|   |   |   |   +-- useSession.ts
|   |   |   +-- lib/
|   |   |   |   +-- auth.ts
|   |   |   |   +-- permissions.ts
|   |   |   +-- components/
|   |   |   |   +-- AuthGuard.tsx
|   |   |   |   +-- RoleGuard.tsx
|   |   |   +-- types/
|   |   |       +-- auth.ts
|   |   |
|   |   +-- articles/
|   |   |   +-- hooks/
|   |   |   |   +-- useArticles.ts
|   |   |   |   +-- useArticle.ts
|   |   |   |   +-- useArticleStatus.ts
|   |   |   |   +-- useAutosave.ts
|   |   |   |   +-- useRevisions.ts
|   |   |   +-- lib/
|   |   |   |   +-- articles.ts
|   |   |   |   +-- article-validations.ts
|   |   |   +-- components/
|   |   |   |   +-- ArticleEditor.tsx
|   |   |   |   +-- ArticleList.tsx
|   |   |   |   +-- ArticleStatusFlow.tsx
|   |   |   |   +-- AutosaveIndicator.tsx
|   |   |   |   +-- RevisionDiff.tsx
|   |   |   +-- types/
|   |   |       +-- article.ts
|   |   |
|   |   +-- categories/
|   |   |   +-- hooks/
|   |   |   |   +-- useCategories.ts
|   |   |   |   +-- useCategory.ts
|   |   |   +-- lib/
|   |   |   |   +-- categories.ts
|   |   |   |   +-- category-validations.ts
|   |   |   +-- components/
|   |   |   |   +-- CategoryTree.tsx
|   |   |   |   +-- CategoryForm.tsx
|   |   |   +-- types/
|   |   |       +-- category.ts
|   |   |
|   |   +-- tags/
|   |   |   +-- hooks/
|   |   |   |   +-- useTags.ts
|   |   |   |   +-- useTag.ts
|   |   |   +-- lib/
|   |   |   |   +-- tags.ts
|   |   |   |   +-- tag-validations.ts
|   |   |   +-- components/
|   |   |   |   +-- TagList.tsx
|   |   |   |   +-- TagForm.tsx
|   |   |   +-- types/
|   |   |       +-- tag.ts
|   |   |
|   |   +-- authors/
|   |   |   +-- hooks/
|   |   |   |   +-- useAuthors.ts
|   |   |   |   +-- useAuthor.ts
|   |   |   +-- lib/
|   |   |   |   +-- authors.ts
|   |   |   |   +-- author-validations.ts
|   |   |   +-- components/
|   |   |   |   +-- AuthorForm.tsx
|   |   |   |   +-- AuthorList.tsx
|   |   |   |   +-- ReviewerProfile.tsx
|   |   |   |   +-- SEOAuthorProfile.tsx
|   |   |   +-- types/
|   |   |       +-- author.ts
|   |   |
|   |   +-- seo/
|   |   |   +-- hooks/
|   |   |   |   +-- useSEO.ts
|   |   |   |   +-- useRedirects.ts
|   |   |   |   +-- useInternalLinks.ts
|   |   |   +-- lib/
|   |   |   |   +-- seo.ts
|   |   |   |   +-- seo-validations.ts
|   |   |   +-- components/
|   |   |   |   +-- MetaEditor.tsx
|   |   |   |   +-- OGPreview.tsx
|   |   |   |   +-- TwitterPreview.tsx
|   |   |   |   +-- StructuredDataEditor.tsx
|   |   |   |   +-- RobotsEditor.tsx
|   |   |   |   +-- RedirectManager.tsx
|   |   |   |   +-- InternalLinkManager.tsx
|   |   |   |   +-- BrokenLinkDetector.tsx
|   |   |   |   +-- OrphanPageDetector.tsx
|   |   |   +-- types/
|   |   |       +-- seo.ts
|   |   |
|   |   +-- media/
|   |   |   +-- hooks/
|   |   |   |   +-- useMedia.ts
|   |   |   |   +-- useUpload.ts
|   |   |   +-- lib/
|   |   |   |   +-- media.ts
|   |   |   |   +-- image-optimizer.ts
|   |   |   +-- components/
|   |   |   |   +-- MediaGrid.tsx
|   |   |   |   +-- MediaUploader.tsx
|   |   |   |   +-- ImageCropper.tsx
|   |   |   |   +-- AltTextManager.tsx
|   |   |   |   +-- WebPConverter.tsx
|   |   |   +-- types/
|   |   |       +-- media.ts
|   |   |
|   |   +-- analytics/
|   |   |   +-- hooks/
|   |   |   |   +-- useAnalytics.ts
|   |   |   |   +-- useTraffic.ts
|   |   |   +-- lib/
|   |   |   |   +-- analytics.ts
|   |   |   +-- components/
|   |   |   |   +-- TrafficDashboard.tsx
|   |   |   |   +-- TopPages.tsx
|   |   |   |   +-- TopKeywords.tsx
|   |   |   |   +-- CTRAnalysis.tsx
|   |   |   +-- types/
|   |   |       +-- analytics.ts
|   |   |
|   |   +-- settings/
|   |   |   +-- hooks/
|   |   |   |   +-- useSettings.ts
|   |   |   +-- lib/
|   |   |   |   +-- settings.ts
|   |   |   |   +-- settings-validations.ts
|   |   |   +-- components/
|   |   |   |   +-- SiteSettings.tsx
|   |   |   |   +-- SEOSettings.tsx
|   |   |   |   +-- AnalyticsSettings.tsx
|   |   |   |   +-- EmailSettings.tsx
|   |   |   +-- types/
|   |   |       +-- settings.ts
|   |   |
|   |   +-- dashboard/
|   |   |   +-- hooks/
|   |   |   |   +-- useDashboard.ts
|   |   |   +-- lib/
|   |   |   |   +-- dashboard.ts
|   |   |   +-- components/
|   |   |   |   +-- StatsGrid.tsx
|   |   |   |   +-- TrafficChart.tsx
|   |   |   |   +-- ContentOverview.tsx
|   |   |   |   +-- RecentActivity.tsx
|   |   |   |   +-- SEOScoreCard.tsx
|   |   |   +-- types/
|   |   |       +-- dashboard.ts
|   |   |
|   |   +-- audit/
|   |       +-- hooks/
|   |       |   +-- useAuditLogs.ts
|   |       +-- lib/
|   |       |   +-- audit.ts
|   |       +-- components/
|   |       |   +-- AuditLogTable.tsx
|   |       |   +-- AuditLogFilter.tsx
|   |       |   +-- AuditLogDetail.tsx
|   |       +-- types/
|   |           +-- audit.ts
|   |
|   +-- hooks/
|   |   +-- useDebounce.ts
|   |   +-- usePagination.ts
|   |   +-- useConfirm.ts
|   |   +-- useToast.ts
|   |
|   +-- lib/
|   |   +-- supabase/
|   |   |   +-- client.ts
|   |   |   +-- server.ts
|   |   |   +-- middleware.ts
|   |   +-- prisma.ts
|   |   +-- auth.ts
|   |   +-- rbac.ts
|   |   +-- audit.ts
|   |   +-- api-response.ts
|   |   +-- pagination.ts
|   |   +-- search.ts
|   |
|   +-- middleware.ts              <- Auth + RBAC middleware
|   +-- types/
|       +-- index.ts
|       +-- api.ts
|       +-- admin.ts
|
+-- public/
+-- next.config.ts
+-- tailwind.config.ts
+-- tsconfig.json
+-- package.json
```

### 27.3 Admin Route Structure

#### Auth Routes (Unprotected)

| Route | Method | Description |
|-------|--------|-------------|
| `/login` | GET | Login page |
| `/login` | POST | Authenticate user |
| `/logout` | POST | Destroy session |
| `/reset-password` | GET | Password reset page |
| `/reset-password` | POST | Send reset email |

#### Dashboard Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Dashboard overview |

#### Articles Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/articles` | GET | List articles (paginated, filterable) |
| `/articles/new` | GET | Create article form |
| `/articles/[id]` | GET | View article detail |
| `/articles/[id]/edit` | GET | Edit article form |
| `/articles/[id]/status` | PATCH | Change article status |
| `/articles/[id]/revisions` | GET | View revision history |
| `/articles/[id]/revisions/[revId]` | GET | View specific revision |
| `/articles/[id]/revisions/[revId]/restore` | POST | Restore revision |

#### Categories Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/categories` | GET | List categories (tree view) |
| `/categories/new` | GET | Create category form |
| `/categories/[id]` | GET | View category detail |
| `/categories/[id]/edit` | GET | Edit category form |
| `/categories/[id]/delete` | POST | Delete category |

#### Tags Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/tags` | GET | List tags |
| `/tags/new` | GET | Create tag form |
| `/tags/[id]` | GET | View tag detail |
| `/tags/[id]/edit` | GET | Edit tag form |
| `/tags/[id]/delete` | POST | Delete tag |

#### Authors Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/authors` | GET | List authors |
| `/authors/new` | GET | Create author form |
| `/authors/[id]` | GET | View author detail |
| `/authors/[id]/edit` | GET | Edit author form |
| `/authors/[id]/articles` | GET | Author's articles |

#### SEO Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/seo` | GET | SEO overview dashboard |
| `/seo/meta` | GET | Meta editor (bulk) |
| `/seo/meta/[id]` | GET | Edit meta for specific page |
| `/seo/sitemap` | GET | Sitemap management |
| `/seo/sitemap/generate` | POST | Regenerate sitemap |
| `/seo/redirects` | GET | Redirect manager |
| `/seo/redirects/new` | GET | Create redirect |
| `/seo/redirects/[id]/edit` | GET | Edit redirect |
| `/seo/links` | GET | Internal link manager |
| `/seo/links/broken` | GET | Broken link detection |
| `/seo/links/orphan` | GET | Orphan page detection |

#### Media Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/media` | GET | Media library (grid view) |
| `/media/upload` | GET | Upload interface |
| `/media/[id]` | GET | View media detail |
| `/media/[id]/edit` | GET | Edit media (alt text, etc.) |
| `/media/[id]/delete` | POST | Delete media |

#### Analytics Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/analytics` | GET | Analytics dashboard |
| `/analytics/traffic` | GET | Traffic details |
| `/analytics/keywords` | GET | Keyword rankings |
| `/analytics/pages` | GET | Page performance |

#### Settings Routes (Protected - Super Admin only)

| Route | Method | Description |
|-------|--------|-------------|
| `/settings` | GET | Settings overview |
| `/settings/general` | GET | General settings |
| `/settings/seo` | GET | SEO settings |
| `/settings/analytics` | GET | Analytics settings |
| `/settings/email` | GET | Email settings |
| `/settings/security` | GET | Security settings |

#### Audit Logs Routes (Protected - Super Admin/Admin only)

| Route | Method | Description |
|-------|--------|-------------|
| `/audit-logs` | GET | Audit log viewer |

#### Users Routes (Protected - Super Admin only)

| Route | Method | Description |
|-------|--------|-------------|
| `/users` | GET | Admin user list |
| `/users/new` | GET | Create admin user |
| `/users/[id]` | GET | View admin user |
| `/users/[id]/edit` | GET | Edit admin user |
| `/users/[id]/delete` | POST | Delete admin user |

#### API Routes

| Route | Method | Auth | Description |
|-------|--------|------|-------------|
| `/api/auth/login` | POST | No | Authenticate, return JWT |
| `/api/auth/logout` | POST | Yes | Destroy session |
| `/api/auth/refresh` | POST | Yes | Refresh JWT |
| `/api/auth/reset-password` | POST | No | Send reset email |
| `/api/articles` | GET | Yes | List articles |
| `/api/articles` | POST | Yes | Create article |
| `/api/articles/[id]` | GET | Yes | Get article |
| `/api/articles/[id]` | PUT | Yes | Update article |
| `/api/articles/[id]` | DELETE | Yes | Delete article |
| `/api/articles/[id]/status` | PATCH | Yes | Change status |
| `/api/articles/[id]/revisions` | GET | Yes | Get revisions |
| `/api/categories` | GET | Yes | List categories |
| `/api/categories` | POST | Yes | Create category |
| `/api/categories/[id]` | GET | Yes | Get category |
| `/api/categories/[id]` | PUT | Yes | Update category |
| `/api/categories/[id]` | DELETE | Yes | Delete category |
| `/api/tags` | GET | Yes | List tags |
| `/api/tags` | POST | Yes | Create tag |
| `/api/tags/[id]` | GET | Yes | Get tag |
| `/api/tags/[id]` | PUT | Yes | Update tag |
| `/api/tags/[id]` | DELETE | Yes | Delete tag |
| `/api/authors` | GET | Yes | List authors |
| `/api/authors` | POST | Yes | Create author |
| `/api/authors/[id]` | GET | Yes | Get author |
| `/api/authors/[id]` | PUT | Yes | Update author |
| `/api/authors/[id]` | DELETE | Yes | Delete author |
| `/api/media` | GET | Yes | List media |
| `/api/media/upload` | POST | Yes | Upload media |
| `/api/media/[id]` | GET | Yes | Get media |
| `/api/media/[id]` | PUT | Yes | Update media |
| `/api/media/[id]` | DELETE | Yes | Delete media |
| `/api/seo/meta` | GET | Yes | Get all meta |
| `/api/seo/meta/[id]` | PUT | Yes | Update meta |
| `/api/seo/sitemap` | GET | Yes | Get sitemap data |
| `/api/seo/sitemap/generate` | POST | Yes | Regenerate sitemap |
| `/api/seo/redirects` | GET | Yes | List redirects |
| `/api/seo/redirects` | POST | Yes | Create redirect |
| `/api/seo/redirects/[id]` | PUT | Yes | Update redirect |
| `/api/seo/redirects/[id]` | DELETE | Yes | Delete redirect |
| `/api/seo/links/suggestions` | GET | Yes | Get link suggestions |
| `/api/seo/links/broken` | GET | Yes | Detect broken links |
| `/api/seo/links/orphan` | GET | Yes | Detect orphan pages |
| `/api/analytics/dashboard` | GET | Yes | Dashboard stats |
| `/api/analytics/traffic` | GET | Yes | Traffic data |
| `/api/analytics/pages` | GET | Yes | Page performance |
| `/api/analytics/keywords` | GET | Yes | Keyword data |
| `/api/settings` | GET | Yes | Get all settings |
| `/api/settings/[key]` | GET | Yes | Get setting |
| `/api/settings/[key]` | PUT | Yes | Update setting |
| `/api/audit-logs` | GET | Yes | List audit logs |
| `/api/users` | GET | Yes | List admin users |
| `/api/users` | POST | Yes | Create admin user |
| `/api/users/[id]` | GET | Yes | Get admin user |
| `/api/users/[id]` | PUT | Yes | Update admin user |
| `/api/users/[id]` | DELETE | Yes | Delete admin user |
| `/api/dashboard` | GET | Yes | Dashboard overview |

### 27.4 Database Tables

#### New Tables (Admin-Specific)

```prisma
// ============================================================
// ADMIN SYSTEM TABLES
// ============================================================

enum AdminRole {
  SUPER_ADMIN
  ADMIN
  EDITOR
  AUTHOR
  REVIEWER
}

enum ArticleStatus {
  DRAFT
  REVIEW
  APPROVED
  PUBLISHED
  ARCHIVED
  SCHEDULED
}

enum MediaType {
  IMAGE
  VIDEO
  DOCUMENT
  OTHER
}

enum AuditAction {
  CREATE
  UPDATE
  DELETE
  LOGIN
  LOGOUT
  LOGIN_FAILED
  PASSWORD_RESET
  STATUS_CHANGE
  PUBLISH
  ARCHIVE
  RESTORE
  SETTINGS_CHANGE
  ROLE_CHANGE
  PERMISSION_CHANGE
}

// Admin users (separate from public Author model)
model AdminUser {
  id              String    @id @default(cuid())
  email           String    @unique
  passwordHash    String
  name            String
  role            AdminRole @default(AUTHOR)
  avatar          String?
  isActive        Boolean   @default(true)
  isMFAEnabled    Boolean   @default(false)
  mFASecret       String?
  lastLoginAt     DateTime?
  lastLoginIP     String?
  loginAttempts   Int       @default(0)
  lockedUntil     DateTime?
  passwordResetAt DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  auditLogs       AuditLog[]
  sessions        AdminSession[]
  revisions       ArticleRevision[]

  @@index([email])
  @@index([role])
}

// Active sessions
model AdminSession {
  id           String   @id @default(cuid())
  userId       String
  token        String   @unique
  refreshToken String   @unique
  ipAddress    String?
  userAgent    String?
  expiresAt    DateTime
  createdAt    DateTime @default(now())

  user AdminUser @relation(fields: [userId], references: [id])

  @@index([userId])
  @@index([token])
  @@index([refreshToken])
}

// Article revisions for version history
model ArticleRevision {
  id          String   @id @default(cuid())
  articleId   String
  userId      String
  title       String
  content     String
  excerpt     String?
  metaTitle   String?
  metaDescription String?
  changeNote  String?
  createdAt   DateTime @default(now())

  article Article   @relation(fields: [articleId], references: [id])
  user    AdminUser @relation(fields: [userId], references: [id])

  @@index([articleId])
  @@index([userId])
  @@index([createdAt])
}

// Tags (many-to-many with articles)
model Tag {
  id        String   @id @default(cuid())
  name      String   @unique
  slug      String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  articles ArticleTag[]

  @@index([slug])
}

// Article-Tag junction
model ArticleTag {
  articleId String
  tagId     String

  article Article @relation(fields: [articleId], references: [id])
  tag     Tag     @relation(fields: [tagId], references: [id])

  @@id([articleId, tagId])
  @@index([articleId])
  @@index([tagId])
}

// Media library
model Media {
  id            String    @id @default(cuid())
  fileName      String
  originalName  String
  mimeType      String
  fileSize      Int
  width         Int?
  height        Int?
  altText       String?
  caption       String?
  url           String
  thumbnailUrl  String?
  uploadedById  String?
  isOptimized   Boolean   @default(false)
  webpUrl       String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([mimeType])
  @@index([createdAt])
}

// Site settings (key-value store)
model Setting {
  id        String   @id @default(cuid())
  key       String   @unique
  value     String
  group     String
  type      String   @default("string")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([key])
  @@index([group])
}

// Comprehensive audit log
model AuditLog {
  id          String      @id @default(cuid())
  userId      String?
  action      AuditAction
  entityType  String?
  entityId    String?
  oldValues   Json?
  newValues   Json?
  ipAddress   String?
  userAgent   String?
  metadata    Json?
  createdAt   DateTime    @default(now())

  user AdminUser? @relation(fields: [userId], references: [id])

  @@index([userId])
  @@index([action])
  @@index([entityType])
  @@index([createdAt])
}

// SEO metadata (centralized)
model SEOMeta {
  id              String   @id @default(cuid())
  entityType      String
  entityId        String
  metaTitle       String?
  metaDescription String?
  canonicalUrl    String?
  ogTitle         String?
  ogDescription   String?
  ogImage         String?
  twitterTitle    String?
  twitterDescription String?
  twitterImage    String?
  structuredData  Json?
  robotsDirective String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@unique([entityType, entityId])
  @@index([entityType])
}

// Internal links tracking
model InternalLink {
  id           String   @id @default(cuid())
  sourceId     String
  sourceType   String
  targetSlug   String
  anchorText   String
  isBroken     Boolean  @default(false)
  lastChecked  DateTime?
  createdAt    DateTime @default(now())

  @@index([sourceId])
  @@index([targetSlug])
  @@index([isBroken])
}
```

#### Modified Existing Tables

```prisma
// Add to existing Article model:
model Article {
  // ... existing fields ...

  // New admin fields
  status          ArticleStatus  @default(DRAFT)
  scheduledAt     DateTime?
  reviewerId      String?
  reviewNotes     String?
  qualityScore    Int?
  wordCount       Int?
  internalLinks   InternalLink[]
  seoMeta         SEOMeta?
  revisions       ArticleRevision[]
  tags            ArticleTag[]

  // Relations
  reviewer AdminUser? @relation(fields: [reviewerId], references: [id])

  @@index([status])
  @@index([scheduledAt])
  @@index([reviewerId])
}

// Add to existing Author model:
model Author {
  // ... existing fields ...

  // New fields
  credentials     String?
  specializations String[]
  linkedInUrl     String?
  isReviewer      Boolean   @default(false)
  articlesCount   Int       @default(0)
  seoProfile      SEOMeta?
}
```

### 27.5 Permissions Matrix

#### Role Definitions

| Role | Description | Access Level |
|------|-------------|--------------|
| **Super Admin** | Full system access. Manages users, settings, security. | Everything |
| **Admin** | Content management. Manages articles, authors, categories. | Content + Analytics |
| **Editor** | Content editing and publishing. Reviews and approves content. | Content (no delete) |
| **Author** | Creates and edits own articles. Cannot publish. | Own content only |
| **Reviewer** | Reviews articles, provides feedback. Cannot create content. | Review only |

#### Permissions Matrix

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| **Dashboard** | | | | | |
| View Dashboard | ✅ | ✅ | ✅ | ✅ | ✅ |
| View All Stats | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Own Stats | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Articles** | | | | | |
| View All Articles | ✅ | ✅ | ✅ | ❌ | ✅ |
| View Own Articles | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Article | ✅ | ✅ | ✅ | ✅ | ❌ |
| Edit Any Article | ✅ | ✅ | ✅ | ❌ | ❌ |
| Edit Own Article | ✅ | ✅ | ✅ | ✅ | ❌ |
| Delete Article | ✅ | ✅ | ❌ | ❌ | ❌ |
| Publish Article | ✅ | ✅ | ✅ | ❌ | ❌ |
| Schedule Article | ✅ | ✅ | ✅ | ❌ | ❌ |
| Archive Article | ✅ | ✅ | ✅ | ❌ | ❌ |
| Change Status | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Revisions | ✅ | ✅ | ✅ | ✅ | ✅ |
| Restore Revision | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Categories** | | | | | |
| View Categories | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Category | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Category | ✅ | ✅ | ❌ | ❌ | ❌ |
| Delete Category | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Tags** | | | | | |
| View Tags | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Tag | ✅ | ✅ | ✅ | ✅ | ❌ |
| Edit Tag | ✅ | ✅ | ✅ | ❌ | ❌ |
| Delete Tag | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Authors** | | | | | |
| View Authors | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Author | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Author | ✅ | ✅ | ❌ | ❌ | ❌ |
| Delete Author | ✅ | ✅ | ❌ | ❌ | ❌ |
| **SEO** | | | | | |
| View SEO Overview | ✅ | ✅ | ✅ | ❌ | ❌ |
| Edit Meta Tags | ✅ | ✅ | ✅ | ❌ | ❌ |
| Manage Redirects | ✅ | ✅ | ❌ | ❌ | ❌ |
| View Internal Links | ✅ | ✅ | ✅ | ❌ | ❌ |
| Manage Internal Links | ✅ | ✅ | ✅ | ❌ | ❌ |
| Regenerate Sitemap | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Media** | | | | | |
| View Media Library | ✅ | ✅ | ✅ | ✅ | ✅ |
| Upload Media | ✅ | ✅ | ✅ | ✅ | ❌ |
| Delete Media | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Alt Text | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Analytics** | | | | | |
| View Analytics | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Traffic | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Keywords | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Settings** | | | | | |
| View Settings | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit General Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit SEO Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit Analytics Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit Email Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit Security Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Users** | | | | | |
| View Users | ✅ | ❌ | ❌ | ❌ | ❌ |
| Create User | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit User | ✅ | ❌ | ❌ | ❌ | ❌ |
| Delete User | ✅ | ❌ | ❌ | ❌ | ❌ |
| Change User Role | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Audit Logs** | | | | | |
| View Audit Logs | ✅ | ✅ | ❌ | ❌ | ❌ |
| Export Audit Logs | ✅ | ❌ | ❌ | ❌ | ❌ |

#### Article Status Flow

```
DRAFT → REVIEW → APPROVED → PUBLISHED
  ↓        ↓         ↓
ARCHIVED  DRAFT    SCHEDULED → PUBLISHED
  ↑
  └── (restore from archive)
```

| Status | Who Can Set | Description |
|--------|-------------|-------------|
| **DRAFT** | Author, Editor, Admin | Initial state. Content in progress. |
| **REVIEW** | Author, Editor | Submitted for review. |
| **APPROVED** | Reviewer, Editor, Admin | Review passed. Ready to publish. |
| **PUBLISHED** | Editor, Admin | Live on site. Visible to public. |
| **SCHEDULED** | Editor, Admin | Set for future publish date. |
| **ARCHIVED** | Editor, Admin | Removed from site. Not deleted. |

### 27.6 API Requirements

#### Authentication

| Requirement | Specification |
|-------------|---------------|
| **Token Type** | JWT (HS256) |
| **Access Token** | 15 minutes expiry |
| **Refresh Token** | 7 days expiry |
| **Token Storage** | httpOnly cookie (not localStorage) |
| **MFA** | TOTP (Google Authenticator, Authy) |
| **Password Hashing** | bcrypt (12 rounds) |
| **Rate Limiting** | 5 login attempts per minute, 20 per hour |
| **Account Lockout** | 10 failed attempts → 30 minute lockout |

#### Request/Response Format

```typescript
// Standard API Response
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, string[]>;
  };
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// List Response with Filtering, Sorting, Pagination
interface ListQuery {
  page?: number;        // default: 1
  limit?: number;       // default: 20, max: 100
  search?: string;      // full-text search
  sort?: string;        // field:direction (e.g., "createdAt:desc")
  filter?: Record<string, string | string[]>;  // field:value
}
```

#### Content-Type Headers

| Endpoint | Content-Type |
|----------|-------------|
| GET requests | `application/json` |
| POST/PUT/PATCH (JSON) | `application/json` |
| POST (file upload) | `multipart/form-data` |
| Authentication | `Authorization: Bearer {token}` |

#### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request — Invalid input |
| `401` | Unauthorized — Invalid or missing token |
| `403` | Forbidden — Insufficient permissions |
| `404` | Not Found — Resource doesn't exist |
| `409` | Conflict — Duplicate resource |
| `413` | Payload Too Large — File too big |
| `422` | Unprocessable Entity — Validation error |
| `429` | Too Many Requests — Rate limit exceeded |
| `500` | Internal Server Error |

#### Validation

| Requirement | Specification |
|-------------|---------------|
| **Schema Validation** | Zod schemas for all inputs |
| **Sanitization** | DOMPurify for HTML content, trim for strings |
| **File Validation** | MIME type check, file size limit, dimension limits |
| **Slug Validation** | Unique, lowercase, hyphens only, no special chars |

#### Pagination

```
GET /api/articles?page=1&limit=20&sort=createdAt:desc&filter[status]=PUBLISHED

Response:
{
  "success": true,
  "data": [...],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 156,
    "totalPages": 8
  }
}
```

#### Filtering

```
GET /api/articles?filter[status]=PUBLISHED&filter[categoryId]=abc123&search=credit score

Supported filters per resource:
- articles: status, categoryId, authorId, isFeatured, dateRange
- categories: parentId, hasArticles
- tags: hasArticles
- authors: role, isReviewer
- media: mimeType
- audit-logs: userId, action, entityType, dateRange
```

#### Sorting

```
GET /api/articles?sort=createdAt:desc
GET /api/articles?sort=title:asc
GET /api/articles?sort=views:desc

Format: field:direction (asc|desc)
Default: createdAt:desc
```

### 27.7 Security Requirements

#### Authentication Security

| Requirement | Specification |
|-------------|---------------|
| **Password Policy** | Minimum 12 characters, uppercase, lowercase, number, special char |
| **Password Hashing** | bcrypt with 12 salt rounds |
| **JWT Secret** | 256-bit random key, rotated every 90 days |
| **Token Expiry** | Access: 15min, Refresh: 7days |
| **Token Storage** | httpOnly, Secure, SameSite=Strict cookies |
| **MFA** | TOTP-based, required for Super Admin, optional for others |
| **Brute Force** | 5 attempts/min, 20/hour, lockout after 10 failures |
| **Session Limit** | Max 3 active sessions per user |
| **Session Invalidation** | On password change, on role change, on manual logout |

#### Authorization Security

| Requirement | Specification |
|-------------|---------------|
| **RBAC** | Role-Based Access Control with 5 roles |
| **Middleware** | Every admin route checked by auth middleware |
| **API Protection** | Every admin API endpoint requires valid JWT |
| **Permission Check** | Server-side permission validation on every request |
| **Row-Level Security** | Supabase RLS policies for data isolation |
| **Principle of Least Privilege** | Users get minimum required permissions |

#### Input Security

| Requirement | Specification |
|-------------|---------------|
| **Validation** | Zod schemas for all API inputs |
| **Sanitization** | DOMPurify for MDX/HTML content |
| **SQL Injection** | Parameterized queries only (Prisma) |
| **XSS Prevention** | React escaping + DOMPurify + Content-Security-Policy |
| **CSRF Protection** | SameSite cookies + CSRF tokens for state-changing requests |
| **File Upload** | MIME type validation, file size limits, dimension checks |
| **Max File Size** | 5MB for images, 10MB for documents |
| **Allowed Image Types** | image/jpeg, image/png, image/webp, image/svg+xml |

#### Network Security

| Requirement | Specification |
|-------------|---------------|
| **HTTPS** | Enforce HTTPS in production |
| **CORS** | Allow only admin domain origins |
| **CSP** | Strict Content-Security-Policy headers |
| **HSTS** | max-age=63072000; includeSubDomains; preload |
| **Rate Limiting** | 30 req/min per user for admin APIs |
| **IP Allowlisting** | Optional IP whitelist for Super Admin |

#### Audit Security

| Requirement | Specification |
|-------------|---------------|
| **Audit Logging** | Every action logged with user, timestamp, IP, details |
| **Log Retention** | 1 year minimum |
| **Log Immutability** | Audit logs cannot be modified or deleted |
| **Sensitive Data** | Passwords, tokens never logged |
| **Export** | CSV/PDF export for compliance |

#### Environment Security

| Requirement | Specification |
|-------------|---------------|
| **Secrets** | Environment variables only, never in code |
| **Admin URL** | Not publicly linked or discoverable |
| **robots.txt** | Disallow /admin/ from crawlers |
| **Source Maps** | Disabled in production |
| **Error Messages** | Generic in production, detailed in development |

#### Session Management

| Requirement | Specification |
|-------------|---------------|
| **Session ID** | Cryptographically random 256-bit token |
| **Cookie Flags** | httpOnly, Secure, SameSite=Strict, Path=/ |
| **Idle Timeout** | 30 minutes of inactivity |
| **Absolute Timeout** | 24 hours maximum |
| **Concurrent Sessions** | Max 3 per user |
| **Session Invalidation** | Immediate on logout, password change, role change |
| **Remember Me** | Optional, extends refresh token to 30 days |

#### Password Reset

| Requirement | Specification |
|-------------|---------------|
| **Token Generation** | Cryptographically random 128-bit token |
| **Token Expiry** | 1 hour |
| **Token Usage** | Single-use only |
| **Notification** | Email notification on password reset |
| **Old Sessions** | All sessions invalidated on reset |

#### Content Security

| Requirement | Specification |
|-------------|---------------|
| **MDX Sanitization** | DOMPurify for all rendered MDX content |
| **Image Validation** | Server-side MIME type and dimension checks |
| **URL Validation** | Whitelist allowed URL schemes (https only) |
| **Slug Validation** | Uniqueness check, format validation |
| **Content Integrity** | Revision history for all content changes |

### 27.8 Module Specifications

#### Dashboard Module

| Widget | Data Source | Refresh Rate |
|--------|-------------|--------------|
| **Total Articles** | `articles` table count | Real-time |
| **Published Articles** | `articles` where `status=PUBLISHED` | Real-time |
| **Draft Articles** | `articles` where `status=DRAFT` | Real-time |
| **Total Authors** | `authors` table count | Real-time |
| **Total Categories** | `categories` table count | Real-time |
| **Total Tags** | `tags` table count | Real-time |
| **Traffic Overview** | GA4 API (last 7/30 days) | 5 minutes |
| **SEO Health Score** | Computed from meta completeness | 1 hour |
| **Indexed Pages** | Google Search Console API | 24 hours |
| **Top Pages** | GA4 API (top 10 by views) | 5 minutes |
| **Recent Activity** | `audit_logs` table (last 20) | Real-time |

#### Articles Module

| Feature | Specification |
|---------|---------------|
| **Create Article** | Title, slug (auto-generated), content (MDX editor), excerpt, category, tags, author, cover image, meta title, meta description, status |
| **Edit Article** | All create fields + revision history, autosave (every 30 seconds) |
| **Delete Article** | Soft delete (archive). Permanent delete only by Super Admin. |
| **Schedule Article** | Set `scheduledAt` date. Auto-publish via cron job. |
| **Draft System** | Auto-save drafts. Version history. Restore previous versions. |
| **Revision History** | Every save creates revision. Store diff. Allow restore. |
| **Autosave** | Client-side debounce (30s). Save to `/api/articles/[id]/autosave`. Show indicator. |
| **Content Status** | Draft → Review → Approved → Published. Status changes logged. |

#### Categories Module

| Feature | Specification |
|---------|---------------|
| **Create Category** | Name, slug (auto-generated), description, parent (optional), meta title, meta description |
| **Edit Category** | All create fields. Slug change creates redirect. |
| **Delete Category** | Only if no articles. Reassign articles first. |
| **SEO Metadata** | Meta title, meta description per category |

#### Tags Module

| Feature | Specification |
|---------|---------------|
| **Create Tag** | Name, slug (auto-generated) |
| **Edit Tag** | Name, slug. Slug change updates all articles. |
| **Delete Tag** | Remove from all articles. No orphan tags. |

#### Authors Module

| Feature | Specification |
|---------|---------------|
| **Create Author** | Name, email, bio, avatar, credentials, specializations, LinkedIn URL, role, isReviewer flag |
| **Edit Author** | All create fields. Email change requires verification. |
| **Reviewer Profiles** | Credentials, specializations, articles reviewed count |
| **SEO Author Profiles** | Author page meta, social links, expertise areas |

#### SEO Module

| Feature | Specification |
|---------|---------------|
| **Meta Title** | 50-60 chars, keyword-optimized, unique |
| **Meta Description** | 120-158 chars, includes CTA, unique |
| **Canonical URL** | Self-referencing, HTTPS, no trailing slash |
| **Open Graph** | og:title, og:description, og:image (1200x630), og:type |
| **Twitter Cards** | summary_large_image, title, description, image |
| **Structured Data** | JSON-LD editor for Article, FAQ, BreadcrumbList |
| **Robots Control** | index/noindex, follow/nofollow per page |
| **Internal Link Suggestion** | AI-powered suggestions based on content analysis |
| **Broken Link Detection** | Crawl site weekly, report broken internal links |
| **Orphan Page Detection** | Find pages with no incoming internal links |

#### Media Library Module

| Feature | Specification |
|---------|---------------|
| **Upload Images** | Drag-and-drop, multi-file, progress indicator |
| **Optimize Images** | Auto-compress, generate thumbnails, create WebP |
| **Alt Text Management** | Required field, SEO-optimized suggestions |
| **WebP Conversion** | Auto-convert uploaded images to WebP |
| **Image Cropping** | Crop/resize tool for OG images, thumbnails |
| **Storage** | Supabase Storage or Cloudinary |
| **Max Size** | 5MB per image |
| **Allowed Types** | JPEG, PNG, WebP, SVG |

#### Analytics Module

| Feature | Specification |
|---------|---------------|
| **Traffic Dashboard** | GA4 data: sessions, users, pageviews, bounce rate |
| **Top Pages** | Top 10/25/50 pages by views, with trends |
| **Top Keywords** | Search Console data: queries, impressions, clicks, CTR, position |
| **CTR Analysis** | Click-through rate by page, by keyword, by device |
| **Date Range** | 7 days, 30 days, 90 days, custom range |
| **Comparison** | Compare two date ranges side-by-side |

#### Settings Module

| Setting Group | Keys | Access |
|---------------|------|--------|
| **General** | siteName, siteDescription, siteUrl, logo, favicon, socialLinks | Super Admin |
| **SEO** | defaultMetaTitle, defaultMetaDescription, googleSearchConsole, robotsTxt | Super Admin |
| **Analytics** | ga4MeasurementId, gtmContainerId, enableTracking | Super Admin |
| **Email** | smtpHost, smtpPort, smtpUser, fromEmail, fromName | Super Admin |
| **Security** | sessionTimeout, maxLoginAttempts, lockoutDuration, mfaRequired | Super Admin |

#### Audit Logs Module

| Feature | Specification |
|---------|---------------|
| **Log All Actions** | CRUD operations, auth events, status changes |
| **Filterable** | By user, action, entity type, date range |
| **Exportable** | CSV and PDF export |
| **Immutable** | Cannot be edited or deleted |
| **Retention** | 1 year minimum |
| **Detail Level** | Old values, new values, IP address, user agent |

### 27.9 Middleware Architecture

```
Request → Middleware → Auth Check → RBAC Check → Rate Limit → Handler

Middleware Stack (in order):
1. CORS Headers
2. Security Headers (HSTS, CSP, etc.)
3. Rate Limiting (per user/IP)
4. Authentication (JWT validation)
5. Authorization (RBAC permission check)
6. Audit Logging (log the action)
7. Input Validation (Zod schema)
8. Route Handler
```

#### Middleware Rules

| Rule | Specification |
|------|---------------|
| **Auth Check** | Validate JWT on every `/api/*` and protected page route |
| **RBAC Check** | Verify user role has permission for requested action |
| **Rate Limit** | 30 req/min per user, 100 req/min per IP |
| **Audit Log** | Log all state-changing operations |
| **Input Validation** | Validate all request bodies with Zod |
| **Error Handling** | Catch all errors, return standardized responses |

### 27.10 Autosave Architecture

```
User types → Debounce (30s) → POST /api/articles/[id]/autosave → Save revision

Autosave Rules:
- Save after 30 seconds of inactivity
- Save on explicit save (Ctrl+S / Cmd+S)
- Save before page unload
- Show save status indicator (Saving... | Saved | Error)
- Store as revision with changeNote="Autosave"
- Maximum 1 autosave per 30 seconds
- Client-side queue for offline support (future)
```

### 27.11 Future Modules

| Module | Description | Phase |
|--------|-------------|-------|
| **Affiliate Management** | Track affiliate links, clicks, conversions, revenue | Phase 2 |
| **Lead Management** | Track lead submissions, partner assignments, status | Phase 2 |
| **Newsletter Management** | Manage subscribers, send campaigns, track opens/clicks | Phase 2 |
| **Calculator Management** | Configure calculator inputs, formulas, display | Phase 2 |
| **Multi-Language** | Manage content translations, language switching | Phase 4 |
| **Role-Based Workflow** | Custom workflows, approval chains, notifications | Phase 3 |
| **API Keys** | Generate and manage API keys for integrations | Phase 3 |
| **Webhooks** | Configure webhooks for external integrations | Phase 3 |

---

> **Remember:** This architecture is the foundation for the admin system. All implementation must follow these specifications. When in doubt, refer to this section.
