# Security Specifications

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

## Authentication Rules

| Rule | Specification |
|------|---------------|
| **Auth Provider** | Supabase Auth |
| **Admin Auth** | Email + password with MFA |
| **Session Management** | JWT tokens, httpOnly cookies |
| **Session Duration** | 24 hours, refresh token 7 days |
| **Password Policy** | Minimum 12 characters, complexity requirements |
| **Brute Force Protection** | Rate limit: 5 per minute, 20 per hour |
| **Account Lockout** | Temporary lockout after 10 failed attempts |

## Environment Variables

| Rule | Specification |
|------|---------------|
| **Storage** | `.env.local` for dev, Vercel Environment Variables for prod |
| **Never Commit** | `.env` files excluded via `.gitignore` |
| **Naming** | `NEXT_PUBLIC_` prefix for client-side variables only |
| **Secrets** | Server-side only |
| **Rotation** | Rotate API keys every 90 days |

## API Security

| Rule | Specification |
|------|---------------|
| **Authentication** | All admin APIs require valid JWT |
| **Authorization** | Row Level Security (RLS) in Supabase |
| **Input Validation** | Validate all inputs server-side with Zod |
| **Output Sanitization** | Sanitize all outputs to prevent XSS |
| **CORS** | Only allow `finshastra.in` origins |
| **Rate Limiting** | 100 requests per minute per IP |
| **Admin Routes** | Separate middleware, MFA required |

## Rate Limiting

| Endpoint Type | Rate Limit | Window |
|---------------|------------|--------|
| Public Pages | No limit | — |
| API Routes (public) | 100 req/min | Per IP |
| API Routes (admin) | 30 req/min | Per user |
| Contact Form | 5 submissions | Per IP per hour |
| Newsletter Signup | 3 submissions | Per IP per day |
| Search | 30 requests | Per minute per IP |
| Calculator | 60 requests | Per minute per IP |

## Data Validation Rules

| Rule | Specification |
|------|---------------|
| **Schema Validation** | Zod schemas for all API inputs |
| **Type Safety** | TypeScript strict mode, no `any` types |
| **SQL Injection** | Use parameterized queries only (Prisma/Supabase client) |
| **XSS Prevention** | React escaping + DOMPurify for MDX content |
| **CSRF Protection** | SameSite cookies + CSRF tokens for forms |

## Security Headers

| Header | Value |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `X-XSS-Protection` | `0` (rely on CSP instead) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy` | See Development Standards CSP spec |

## Security Best Practices

1. **Dependency Scanning:** Run `npm audit` weekly. Fix critical/high within 48 hours.
2. **Minimal Dependencies:** Audit new packages before adding.
3. **No Secrets in Code:** Never hardcode API keys, passwords, or tokens.
4. **Least Privilege:** Supabase service role key used only for admin operations.
5. **Regular Updates:** Update Next.js, React, and all dependencies monthly.
6. **Error Handling:** Never expose stack traces or internal errors to users.