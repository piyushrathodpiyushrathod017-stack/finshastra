# API Architecture

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## API Design Principles

1. **RESTful** — Use standard HTTP methods and status codes
2. **Typed** — All requests and responses are typed
3. **Paginated** — List endpoints support pagination
4. **Filterable** — List endpoints support filtering
5. **Sortable** — List endpoints support sorting
6. **Secure** — Authentication and authorization on all endpoints

## Request/Response Format

### Standard API Response

```typescript
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
```

### List Query Parameters

```typescript
interface ListQuery {
  page?: number;        // default: 1
  limit?: number;       // default: 20, max: 100
  search?: string;      // full-text search
  sort?: string;        // field:direction (e.g., "createdAt:desc")
  filter?: Record<string, string | string[]>;  // field:value
}
```

## API Routes

### Public API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/articles` | GET | List published articles |
| `/api/articles/[slug]` | GET | Get article by slug |
| `/api/categories` | GET | List categories |
| `/api/categories/[slug]` | GET | Get category by slug |
| `/api/authors` | GET | List authors |
| `/api/authors/[slug]` | GET | Get author by slug |
| `/api/banks` | GET | List banks |
| `/api/banks/[slug]` | GET | Get bank by slug |
| `/api/search` | GET | Search articles |
| `/api/newsletter` | POST | Subscribe to newsletter |
| `/api/contact` | POST | Submit contact form |

### Admin API Routes

| Route | Method | Auth | Description |
|-------|--------|------|-------------|
| `/api/admin/auth/login` | POST | No | Authenticate user |
| `/api/admin/auth/logout` | POST | Yes | Destroy session |
| `/api/admin/auth/refresh` | POST | Yes | Refresh JWT |
| `/api/admin/articles` | GET | Yes | List articles |
| `/api/admin/articles` | POST | Yes | Create article |
| `/api/admin/articles/[id]` | GET | Yes | Get article |
| `/api/admin/articles/[id]` | PUT | Yes | Update article |
| `/api/admin/articles/[id]` | DELETE | Yes | Delete article |
| `/api/admin/articles/[id]/status` | PATCH | Yes | Change status |
| `/api/admin/articles/[id]/revisions` | GET | Yes | Get revisions |
| `/api/admin/categories` | GET | Yes | List categories |
| `/api/admin/categories` | POST | Yes | Create category |
| `/api/admin/categories/[id]` | GET | Yes | Get category |
| `/api/admin/categories/[id]` | PUT | Yes | Update category |
| `/api/admin/categories/[id]` | DELETE | Yes | Delete category |
| `/api/admin/tags` | GET | Yes | List tags |
| `/api/admin/tags` | POST | Yes | Create tag |
| `/api/admin/tags/[id]` | GET | Yes | Get tag |
| `/api/admin/tags/[id]` | PUT | Yes | Update tag |
| `/api/admin/tags/[id]` | DELETE | Yes | Delete tag |
| `/api/admin/authors` | GET | Yes | List authors |
| `/api/admin/authors` | POST | Yes | Create author |
| `/api/admin/authors/[id]` | GET | Yes | Get author |
| `/api/admin/authors/[id]` | PUT | Yes | Update author |
| `/api/admin/authors/[id]` | DELETE | Yes | Delete author |
| `/api/admin/media` | GET | Yes | List media |
| `/api/admin/media/upload` | POST | Yes | Upload media |
| `/api/admin/media/[id]` | GET | Yes | Get media |
| `/api/admin/media/[id]` | PUT | Yes | Update media |
| `/api/admin/media/[id]` | DELETE | Yes | Delete media |
| `/api/admin/seo/meta` | GET | Yes | Get all meta |
| `/api/admin/seo/meta/[id]` | PUT | Yes | Update meta |
| `/api/admin/seo/sitemap` | GET | Yes | Get sitemap data |
| `/api/admin/seo/sitemap/generate` | POST | Yes | Regenerate sitemap |
| `/api/admin/seo/redirects` | GET | Yes | List redirects |
| `/api/admin/seo/redirects` | POST | Yes | Create redirect |
| `/api/admin/seo/redirects/[id]` | PUT | Yes | Update redirect |
| `/api/admin/seo/redirects/[id]` | DELETE | Yes | Delete redirect |
| `/api/admin/analytics/dashboard` | GET | Yes | Dashboard stats |
| `/api/admin/analytics/traffic` | GET | Yes | Traffic data |
| `/api/admin/analytics/pages` | GET | Yes | Page performance |
| `/api/admin/settings` | GET | Yes | Get all settings |
| `/api/admin/settings/[key]` | GET | Yes | Get setting |
| `/api/admin/settings/[key]` | PUT | Yes | Update setting |
| `/api/admin/audit-logs` | GET | Yes | List audit logs |
| `/api/admin/users` | GET | Yes | List admin users |
| `/api/admin/users` | POST | Yes | Create admin user |
| `/api/admin/users/[id]` | GET | Yes | Get admin user |
| `/api/admin/users/[id]` | PUT | Yes | Update admin user |
| `/api/admin/users/[id]` | DELETE | Yes | Delete admin user |

## Error Responses

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

## Rate Limiting

| Endpoint Type | Rate Limit | Window |
|---------------|------------|--------|
| Public Pages | No limit | — |
| API Routes (public) | 100 req/min | Per IP |
| API Routes (admin) | 30 req/min | Per user |
| Contact Form | 5 submissions | Per IP per hour |
| Newsletter Signup | 3 submissions | Per IP per day |
| Search | 30 requests | Per minute per IP |

## Validation

| Requirement | Specification |
|-------------|---------------|
| **Schema Validation** | Zod schemas for all API inputs |
| **Sanitization** | DOMPurify for HTML content, trim for strings |
| **File Validation** | MIME type check, file size limit, dimension limits |
| **Slug Validation** | Unique, lowercase, hyphens only, no special chars |