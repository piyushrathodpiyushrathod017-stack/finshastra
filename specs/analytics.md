# Analytics Specifications

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

## Tracking Requirements

### Google Analytics 4 (GA4)

| Setup | Specification |
|-------|---------------|
| **Enhanced Measurement** | Page views, scrolls, outbound clicks, site search, file downloads |
| **Custom Events** | Calculator usage, newsletter signup, CTA clicks, FAQ expand |
| **Consent Mode** | Respect user cookie consent preferences |
| **IP Anonymization** | Enabled (default in GA4) |
| **Data Retention** | 14 months |

### Google Search Console

| Setup | Specification |
|-------|---------------|
| **Verification** | DNS TXT record |
| **Sitemap** | Submit sitemap.xml |
| **Monitoring** | Check weekly for crawl errors, manual actions |
| **Core Web Vitals** | Monitor CWV reports monthly |

## Event Tracking

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

## Metrics That Matter

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

## Metrics That Do Not Matter

| Metric | Why |
|--------|-----|
| **Pageviews** | Vanity metric without context |
| **Unique Visitors** | Without engagement context |
| **Social Likes** | Do not correlate with revenue |
| **Twitter Followers** | Do not drive traffic or revenue |
| **Page Rank** | Deprecated |
| **Vanity Keywords** | Ranking for irrelevant high-volume keywords |