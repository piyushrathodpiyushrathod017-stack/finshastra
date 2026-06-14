# Admin System Architecture

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09  
> **Status:** Architecture Specification  
> **Admin URL:** http://localhost:11  
> **Frontend URL:** http://localhost:1111  
> **Architecture:** Separate Next.js application, shared database

## Architecture Overview

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

## Admin Route Structure

### Auth Routes (Unprotected)

| Route | Method | Description |
|-------|--------|-------------|
| `/login` | GET | Login page |
| `/login` | POST | Authenticate user |
| `/logout` | POST | Destroy session |
| `/reset-password` | GET | Password reset page |
| `/reset-password` | POST | Send reset email |

### Dashboard Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Dashboard overview |

### Articles Routes (Protected)

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

### Categories Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/categories` | GET | List categories (tree view) |
| `/categories/new` | GET | Create category form |
| `/categories/[id]` | GET | View category detail |
| `/categories/[id]/edit` | GET | Edit category form |
| `/categories/[id]/delete` | POST | Delete category |

### Tags Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/tags` | GET | List tags |
| `/tags/new` | GET | Create tag form |
| `/tags/[id]` | GET | View tag detail |
| `/tags/[id]/edit` | GET | Edit tag form |
| `/tags/[id]/delete` | POST | Delete tag |

### Authors Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/authors` | GET | List authors |
| `/authors/new` | GET | Create author form |
| `/authors/[id]` | GET | View author detail |
| `/authors/[id]/edit` | GET | Edit author form |
| `/authors/[id]/articles` | GET | Author's articles |

### SEO Routes (Protected)

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

### Media Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/media` | GET | Media library (grid view) |
| `/media/upload` | GET | Upload interface |
| `/media/[id]` | GET | View media detail |
| `/media/[id]/edit` | GET | Edit media (alt text, etc.) |
| `/media/[id]/delete` | POST | Delete media |

### Analytics Routes (Protected)

| Route | Method | Description |
|-------|--------|-------------|
| `/analytics` | GET | Analytics dashboard |
| `/analytics/traffic` | GET | Traffic details |
| `/analytics/keywords` | GET | Keyword rankings |
| `/analytics/pages` | GET | Page performance |

### Settings Routes (Protected - Super Admin only)

| Route | Method | Description |
|-------|--------|-------------|
| `/settings` | GET | Settings overview |
| `/settings/general` | GET | General settings |
| `/settings/seo` | GET | SEO settings |
| `/settings/analytics` | GET | Analytics settings |
| `/settings/email` | GET | Email settings |
| `/settings/security` | GET | Security settings |

### Audit Logs Routes (Protected - Super Admin/Admin only)

| Route | Method | Description |
|-------|--------|-------------|
| `/audit-logs` | GET | Audit log viewer |

### Users Routes (Protected - Super Admin only)

| Route | Method | Description |
|-------|--------|-------------|
| `/users` | GET | Admin user list |
| `/users/new` | GET | Create admin user |
| `/users/[id]` | GET | View admin user |
| `/users/[id]/edit` | GET | Edit admin user |
| `/users/[id]/delete` | POST | Delete admin user |

## Permissions Matrix

### Role Definitions

| Role | Description | Access Level |
|------|-------------|--------------|
| **Super Admin** | Full system access. Manages users, settings, security. | Everything |
| **Admin** | Content management. Manages articles, authors, categories. | Content + Analytics |
| **Editor** | Content editing and publishing. Reviews and approves content. | Content (no delete) |
| **Author** | Creates and edits own articles. Cannot publish. | Own content only |
| **Reviewer** | Reviews articles, provides feedback. Cannot create content. | Review only |

### Article Status Flow

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

## API Requirements

### Authentication

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

### Request/Response Format

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

### Error Responses

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

## Security Requirements

### Authentication Security

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

### Authorization Security

| Requirement | Specification |
|-------------|---------------|
| **RBAC** | Role-Based Access Control with 5 roles |
| **Middleware** | Every admin route checked by auth middleware |
| **API Protection** | Every admin API endpoint requires valid JWT |
| **Permission Check** | Server-side permission validation on every request |
| **Row-Level Security** | Supabase RLS policies for data isolation |
| **Principle of Least Privilege** | Users get minimum required permissions |

### Input Security

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

## Module Specifications

### Dashboard Module

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

### Articles Module

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

### SEO Module

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

### Media Library Module

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

### Analytics Module

| Feature | Specification |
|---------|---------------|
| **Traffic Dashboard** | GA4 data: sessions, users, pageviews, bounce rate |
| **Top Pages** | Top 10/25/50 pages by views, with trends |
| **Top Keywords** | Search Console data: queries, impressions, clicks, CTR, position |
| **CTR Analysis** | Click-through rate by page, by keyword, by device |
| **Date Range** | 7 days, 30 days, 90 days, custom range |
| **Comparison** | Compare two date ranges side-by-side |

### Settings Module

| Setting Group | Keys | Access |
|---------------|------|--------|
| **General** | siteName, siteDescription, siteUrl, logo, favicon, socialLinks | Super Admin |
| **SEO** | defaultMetaTitle, defaultMetaDescription, googleSearchConsole, robotsTxt | Super Admin |
| **Analytics** | ga4MeasurementId, gtmContainerId, enableTracking | Super Admin |
| **Email** | smtpHost, smtpPort, smtpUser, fromEmail, fromName | Super Admin |
| **Security** | sessionTimeout, maxLoginAttempts, lockoutDuration, mfaRequired | Super Admin |

### Audit Logs Module

| Feature | Specification |
|---------|---------------|
| **Log All Actions** | CRUD operations, auth events, status changes |
| **Filterable** | By user, action, entity type, date range |
| **Exportable** | CSV and PDF export |
| **Immutable** | Cannot be edited or deleted |
| **Retention** | 1 year minimum |
| **Detail Level** | Old values, new values, IP address, user agent |

## Middleware Architecture

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

### Middleware Rules

| Rule | Specification |
|------|---------------|
| **Auth Check** | Validate JWT on every `/api/*` and protected page route |
| **RBAC Check** | Verify user role has permission for requested action |
| **Rate Limit** | 30 req/min per user, 100 req/min per IP |
| **Audit Log** | Log all state-changing operations |
| **Input Validation** | Validate all request bodies with Zod |
| **Error Handling** | Catch all errors, return standardized responses |

## Autosave Architecture

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

## Future Modules

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