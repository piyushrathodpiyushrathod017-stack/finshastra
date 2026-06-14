# Topical Authority System

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

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