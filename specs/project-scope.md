# Project Scope

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

## What MUST Be Built

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

## What MUST NOT Be Built

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