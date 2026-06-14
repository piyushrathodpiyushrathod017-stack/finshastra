# Admin Overview

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14  
> **Admin URL:** http://localhost:11  
> **Frontend URL:** http://localhost:1111

## Architecture

The admin panel is a **standalone Next.js application** running on port 11, completely separate from the public frontend (port 1111). Both applications share the same Supabase PostgreSQL database via Prisma.

```
finshastra/
+-- apps/
|   +-- web/                  <- Frontend (port 1111)
|   +-- admin/                <- Admin Panel (port 11)
|
+-- packages/
|   +-- shared/               <- Shared code (Prisma, types, utils)
```

## Why Separate Apps

- Admin has different security requirements (MFA, stricter auth)
- Admin has different performance requirements (no SEO concerns)
- Admin has different caching strategy (no ISR, no SSG)
- Admin can be deployed independently
- Admin can have different dependencies
- Clear separation of concerns

## Admin Modules

| Module | Description |
|--------|-------------|
| **Dashboard** | Overview of site metrics and activity |
| **Articles** | Create, edit, manage articles |
| **Categories** | Manage content categories |
| **Tags** | Manage content tags |
| **Authors** | Manage author profiles |
| **SEO** | Manage metadata, sitemap, redirects |
| **Media** | Upload and manage media files |
| **Analytics** | View traffic and performance data |
| **Settings** | Manage site settings |
| **Audit Logs** | View system activity logs |
| **Users** | Manage admin users |

## Admin Route Structure

```
/admin/
├── (auth)/
│   ├── login/
│   ├── logout/
│   └── reset-password/
├── (dashboard)/
│   ├── page.tsx                # Dashboard
│   ├── articles/               # Article management
│   ├── categories/             # Category management
│   ├── tags/                   # Tag management
│   ├── authors/                # Author management
│   ├── seo/                    # SEO management
│   ├── media/                  # Media library
│   ├── analytics/              # Analytics
│   ├── settings/               # Settings
│   ├── audit-logs/             # Audit logs
│   └── users/                  # User management
├── layout.tsx                  # Admin layout
└── not-found.tsx               # 404 page
```

## Key Features

### Content Management

- Rich text editor (MDX)
- Autosave every 30 seconds
- Revision history
- Status workflow (Draft → Review → Approved → Published)
- Bulk operations

### SEO Management

- Meta editor (title, description)
- Open Graph preview
- Sitemap management
- Redirect manager
- Internal link suggestions

### Media Library

- Drag-and-drop upload
- Image optimization (WebP conversion)
- Alt text management
- Grid view

### Analytics

- Traffic dashboard
- Top pages
- Keyword rankings
- CTR analysis