# Content Update Policy

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Overview

Content freshness is critical for finance websites. Google prioritizes fresh, accurate content for YMYL topics. This policy ensures all content remains accurate and up-to-date.

## Update Frequencies

| Content Type | Update Frequency | Trigger Events |
|-------------|-----------------|----------------|
| **Articles** | Every 90 days minimum | Interest rate changes, regulatory changes |
| **Programmatic Pages** | Every 30 days | Bank rate updates, new products |
| **Pillar Pages** | Every 60 days | Major market shifts |
| **Calculator Data** | Every 30 days | Interest rate changes |
| **Legal Pages** | Every 180 days | Regulatory changes |

## Update Triggers

### Immediate Updates (Within 7 Days)

- Interest rate changes by banks
- RBI regulatory changes
- CIBIL score range changes
- New product launches
- Product discontinuations
- Fee structure changes

### Scheduled Updates

- Monthly: All programmatic pages
- Quarterly: All articles
- Semi-annually: Pillar pages
- Annually: Legal pages

## Update Process

```
Identify → Research → Update → Review → Publish → Monitor
```

| Stage | Owner | Duration |
|-------|-------|----------|
| Identify | SEO Team | Ongoing |
| Research | Content Team | 1 day |
| Update | Author | 1-2 days |
| Review | Editor | 1 day |
| Publish | Admin | 1 day |
| Monitor | SEO Team | Ongoing |

## What to Update

### Interest Rate Changes

1. Check bank websites for current rates
2. Update all mentions of affected rates
3. Update comparison tables
4. Update calculator defaults
5. Update FAQ answers
6. Refresh "Last Updated" date

### Regulatory Changes

1. Check RBI/SEBI/IRDAI for new regulations
2. Update affected content
3. Add new sections if needed
4. Update FAQs
5. Refresh "Last Updated" date

### New Product Launches

1. Research new product details
2. Add to relevant comparison pages
3. Create dedicated article if significant
4. Update "best of" pages
5. Update programmatic pages

### Product Discontinuations

1. Remove from comparison pages
2. Update "best of" pages
3. Add redirect if URL changes
4. Update programmatic pages
5. Archive article if needed

## Update Checklist

### For Articles

- [ ] Verify all interest rates are current
- [ ] Verify all fees and charges are current
- [ ] Verify all eligibility criteria are current
- [ ] Verify all regulatory information is current
- [ ] Update any outdated statistics
- [ ] Update any outdated links
- [ ] Update "Last Updated" date
- [ ] Review and update FAQ section
- [ ] Update any affected internal links

### For Programmatic Pages

- [ ] Verify bank product details are current
- [ ] Verify interest rates are current
- [ ] Verify fees and charges are current
- [ ] Verify eligibility criteria are current
- [ ] Update comparison tables
- [ ] Update "Last Updated" date

### For Pillar Pages

- [ ] Verify all sub-links are working
- [ ] Verify all statistics are current
- [ ] Update any new cluster articles
- [ ] Update any new programmatic pages
- [ ] Update "Last Updated" date

## Monitoring

### Automated Monitoring

- Set up Google Alerts for bank name changes
- Set up Google Alerts for RBI regulations
- Monitor competitor content for updates
- Monitor search console for ranking changes

### Manual Monitoring

- Weekly: Check top 10 articles for accuracy
- Monthly: Check all programmatic pages
- Quarterly: Full content audit
- Annually: Complete content review

## Update Logging

All updates are logged in the article revision history:

```typescript
interface UpdateLog {
  articleId: string;
  updateType: 'rate_change' | 'regulatory' | 'product' | 'scheduled';
  description: string;
  previousValue: string;
  newValue: string;
  updatedBy: string;
  updatedAt: Date;
}
```

## Quality Assurance

After every update:

1. Verify all changes are accurate
2. Check for broken links
3. Verify schema is still valid
4. Test on mobile and desktop
5. Monitor search console for errors