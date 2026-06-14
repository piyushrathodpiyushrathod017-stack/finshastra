# Monetization Specifications

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

## Allowed Monetization Methods

### Google AdSense

| Rule | Specification |
|------|---------------|
| **Placement** | Below article content, sidebar (desktop), between sections (mobile) |
| **Density** | Maximum 3 ad units per page |
| **Format** | In-article, in-feed. No popups. |
| **Approval** | Apply after 50+ articles, 100+ pages, 3+ months old |
| **Policy Compliance** | No ads on legal pages, no ads in calculators |
| **Layout Shift** | Ads must have fixed dimensions (prevent CLS) |

### Affiliate Marketing

| Rule | Specification |
|------|---------------|
| **Partners** | Only RBI-regulated banks and NBFCs |
| **Disclosure** | Every page with affiliate links has disclosure at top |
| **Link Type** | Text links within content. No deceptive button styling. |
| **No Cloaking** | Affiliate links visible in status bar on hover |
| **Link Tracking** | Use `rel="sponsored"` on all affiliate links |
| **Content Integrity** | Affiliate partnerships do NOT influence recommendations |

### Sponsored Content

| Rule | Specification |
|------|---------------|
| **Labeling** | Every sponsored post labeled "Sponsored" or "Paid Partnership" |
| **Placement** | Marked in URL: /sponsored/{slug}/ |
| **Disclosure** | FTC-compliant disclosure |
| **Editorial Control** | FinShastra retains editorial control |
| **Quality** | Same quality standards as editorial |
| **Frequency** | Maximum 2 sponsored articles per month at MVP |

### Lead Generation

| Rule | Specification |
|------|---------------|
| **Method** | Form submissions connecting users with partner banks |
| **Disclosure** | Clear disclosure that submitting form shares data with partner |
| **Consent** | Explicit opt-in consent before sharing data |
| **Data Sharing** | Only: name, email, phone, loan requirement |
| **Privacy Policy** | Updated to reflect data sharing practices |

## Forbidden Monetization Methods

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