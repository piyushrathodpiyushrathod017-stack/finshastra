# Content Management

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Article Management

### Article List

| Feature | Specification |
|---------|---------------|
| **View** | Table view with key columns |
| **Columns** | Title, Status, Author, Category, Date, Views |
| **Filtering** | By status, category, author, date range |
| **Sorting** | By title, date, views, status |
| **Search** | Full-text search |
| **Pagination** | 20 items per page |
| **Bulk Actions** | Delete, change status |

### Article Editor

| Feature | Specification |
|---------|---------------|
| **Title** | Required, 50-60 characters |
| **Slug** | Auto-generated from title, editable |
| **Content** | MDX editor with preview |
| **Excerpt** | Optional, 150-200 characters |
| **Category** | Required, single select |
| **Tags** | Optional, multi-select |
| **Author** | Required, single select |
| **Cover Image** | Optional, upload or URL |
| **Meta Title** | Optional, 50-60 characters |
| **Meta Description** | Optional, 120-158 characters |
| **Status** | Draft, Review, Approved, Published, Archived |
| **Scheduled At** | Optional, future date/time |

### Autosave

| Feature | Specification |
|---------|---------------|
| **Interval** | Every 30 seconds |
| **Indicator** | "Saving..." / "Saved" / "Error" |
| **Manual Save** | Ctrl+S / Cmd+S |
| **Pre-unload** | Save before page unload |

### Revision History

| Feature | Specification |
|---------|---------------|
| **Storage** | Every save creates revision |
| **View** | List of revisions with timestamps |
| **Compare** | Diff view between revisions |
| **Restore** | Restore previous version |

### Status Workflow

```
DRAFT → REVIEW → APPROVED → PUBLISHED
  ↓        ↓         ↓
ARCHIVED  DRAFT    SCHEDULED → PUBLISHED
```

| Status | Who Can Set | Description |
|--------|-------------|-------------|
| **DRAFT** | Author, Editor, Admin | Initial state |
| **REVIEW** | Author, Editor | Submitted for review |
| **APPROVED** | Reviewer, Editor, Admin | Review passed |
| **PUBLISHED** | Editor, Admin | Live on site |
| **SCHEDULED** | Editor, Admin | Set for future publish |
| **ARCHIVED** | Editor, Admin | Removed from site |

## Category Management

### Category List

| Feature | Specification |
|---------|---------------|
| **View** | Tree view |
| **Columns** | Name, Slug, Articles, Parent |
| **Actions** | Edit, Delete |

### Category Editor

| Feature | Specification |
|---------|---------------|
| **Name** | Required, unique |
| **Slug** | Auto-generated, editable |
| **Description** | Optional |
| **Parent** | Optional, single select |
| **Meta Title** | Optional |
| **Meta Description** | Optional |

## Tag Management

### Tag List

| Feature | Specification |
|---------|---------------|
| **View** | Table view |
| **Columns** | Name, Slug, Articles |
| **Actions** | Edit, Delete |

### Tag Editor

| Feature | Specification |
|---------|---------------|
| **Name** | Required, unique |
| **Slug** | Auto-generated, editable |

## Author Management

### Author List

| Feature | Specification |
|---------|---------------|
| **View** | Table view |
| **Columns** | Name, Email, Articles, Credentials |
| **Actions** | Edit, Delete |

### Author Editor

| Feature | Specification |
|---------|---------------|
| **Name** | Required |
| **Email** | Optional |
| **Bio** | Required, 200-300 words |
| **Avatar** | Upload or URL |
| **Credentials** | Optional |
| **LinkedIn** | Optional |
| **Is Reviewer** | Boolean |