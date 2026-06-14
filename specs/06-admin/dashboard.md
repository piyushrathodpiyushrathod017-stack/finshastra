# Dashboard

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    SIDEBAR │ HEADER                         │
├─────────────────────────────────────────────────────────────┤
│                    STATS CARDS                              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ Articles │ │Published│ │ Authors │ │ Categories│          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────┐ ┌─────────────────────────┐   │
│  │   TRAFFIC OVERVIEW      │ │   RECENT ACTIVITY       │   │
│  │   (Chart)               │ │   (List)                │   │
│  └─────────────────────────┘ └─────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────┐ ┌─────────────────────────┐   │
│  │   TOP PAGES             │ │   CONTENT OVERVIEW      │   │
│  │   (Table)               │ │   (Chart)               │   │
│  └─────────────────────────┘ └─────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Stats Cards

### Required Widgets

| Widget | Data Source | Refresh Rate |
|--------|-------------|--------------|
| **Total Articles** | `articles` table count | Real-time |
| **Published Articles** | `articles` where `status=PUBLISHED` | Real-time |
| **Draft Articles** | `articles` where `status=DRAFT` | Real-time |
| **Total Authors** | `authors` table count | Real-time |
| **Total Categories** | `categories` table count | Real-time |
| **Total Tags** | `tags` table count | Real-time |

### Design Rules

- 4-column grid on desktop
- 2-column grid on tablet
- 1-column grid on mobile
- Clear labels and values
- Trend indicators (up/down)

## Traffic Overview

### Requirements

| Element | Specification |
|---------|---------------|
| **Chart** | Line chart showing traffic over time |
| **Date Range** | Last 7 days, 30 days, 90 days |
| **Metrics** | Sessions, users, pageviews |
| **Data Source** | GA4 API |

## Recent Activity

### Requirements

| Element | Specification |
|---------|---------------|
| **List** | Last 20 activities |
| **Content** | User, action, entity, timestamp |
| **Icons** | Action-specific icons |

### Activity Types

| Type | Icon | Description |
|------|------|-------------|
| Create | Plus | Article created |
| Edit | Edit | Article edited |
| Publish | Check | Article published |
| Delete | Trash | Article deleted |
| Login | LogIn | User logged in |

## Top Pages

### Requirements

| Element | Specification |
|---------|---------------|
| **Table** | Top 10 pages by views |
| **Columns** | Page, Views, Bounce Rate, Avg Time |
| **Sorting** | Click to sort by any column |

## Content Overview

### Requirements

| Element | Specification |
|---------|---------------|
| **Chart** | Bar chart showing content by status |
| **Categories** | Draft, Review, Published, Archived |
| **Data Source** | Database |