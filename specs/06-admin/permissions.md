# Permissions

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Role Definitions

| Role | Description | Access Level |
|------|-------------|--------------|
| **Super Admin** | Full system access. Manages users, settings, security. | Everything |
| **Admin** | Content management. Manages articles, authors, categories. | Content + Analytics |
| **Editor** | Content editing and publishing. Reviews and approves content. | Content (no delete) |
| **Author** | Creates and edits own articles. Cannot publish. | Own content only |
| **Reviewer** | Reviews articles, provides feedback. Cannot create content. | Review only |

## Permissions Matrix

### Dashboard

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Dashboard | ✅ | ✅ | ✅ | ✅ | ✅ |
| View All Stats | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Own Stats | ✅ | ✅ | ✅ | ✅ | ✅ |

### Articles

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View All Articles | ✅ | ✅ | ✅ | ❌ | ✅ |
| View Own Articles | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Article | ✅ | ✅ | ✅ | ✅ | ❌ |
| Edit Any Article | ✅ | ✅ | ✅ | ❌ | ❌ |
| Edit Own Article | ✅ | ✅ | ✅ | ✅ | ❌ |
| Delete Article | ✅ | ✅ | ❌ | ❌ | ❌ |
| Publish Article | ✅ | ✅ | ✅ | ❌ | ❌ |
| Schedule Article | ✅ | ✅ | ✅ | ❌ | ❌ |
| Archive Article | ✅ | ✅ | ✅ | ❌ | ❌ |
| Change Status | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Revisions | ✅ | ✅ | ✅ | ✅ | ✅ |
| Restore Revision | ✅ | ✅ | ✅ | ❌ | ❌ |

### Categories

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Categories | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Category | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Category | ✅ | ✅ | ❌ | ❌ | ❌ |
| Delete Category | ✅ | ✅ | ❌ | ❌ | ❌ |

### Tags

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Tags | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Tag | ✅ | ✅ | ✅ | ✅ | ❌ |
| Edit Tag | ✅ | ✅ | ✅ | ❌ | ❌ |
| Delete Tag | ✅ | ✅ | ❌ | ❌ | ❌ |

### Authors

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Authors | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Author | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Author | ✅ | ✅ | ❌ | ❌ | ❌ |
| Delete Author | ✅ | ✅ | ❌ | ❌ | ❌ |

### SEO

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View SEO Overview | ✅ | ✅ | ✅ | ❌ | ❌ |
| Edit Meta Tags | ✅ | ✅ | ✅ | ❌ | ❌ |
| Manage Redirects | ✅ | ✅ | ❌ | ❌ | ❌ |
| View Internal Links | ✅ | ✅ | ✅ | ❌ | ❌ |
| Manage Internal Links | ✅ | ✅ | ✅ | ❌ | ❌ |
| Regenerate Sitemap | ✅ | ✅ | ❌ | ❌ | ❌ |

### Media

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Media Library | ✅ | ✅ | ✅ | ✅ | ✅ |
| Upload Media | ✅ | ✅ | ✅ | ✅ | ❌ |
| Delete Media | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Alt Text | ✅ | ✅ | ✅ | ✅ | ❌ |

### Analytics

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Analytics | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Traffic | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Keywords | ✅ | ✅ | ❌ | ❌ | ❌ |

### Settings

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Settings | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit General Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit SEO Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit Analytics Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit Email Settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit Security Settings | ✅ | ❌ | ❌ | ❌ | ❌ |

### Users

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Users | ✅ | ❌ | ❌ | ❌ | ❌ |
| Create User | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit User | ✅ | ❌ | ❌ | ❌ | ❌ |
| Delete User | ✅ | ❌ | ❌ | ❌ | ❌ |
| Change User Role | ✅ | ❌ | ❌ | ❌ | ❌ |

### Audit Logs

| Action | Super Admin | Admin | Editor | Author | Reviewer |
|--------|:-----------:|:-----:|:------:|:------:|:--------:|
| View Audit Logs | ✅ | ✅ | ❌ | ❌ | ❌ |
| Export Audit Logs | ✅ | ❌ | ❌ | ❌ | ❌ |

## Implementation

### Middleware

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  // 1. Check authentication
  // 2. Check authorization (role-based)
  // 3. Check rate limiting
  // 4. Log audit event
  // 5. Validate input
  // 6. Continue to handler
}
```

### Permission Check

```typescript
// lib/rbac.ts
export function hasPermission(user: AdminUser, action: string, resource: string): boolean {
  const role = user.role;
  const permissions = ROLE_PERMISSIONS[role];
  return permissions.includes(`${resource}:${action}`);
}
```