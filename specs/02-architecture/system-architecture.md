# System Architecture

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Architecture Overview

FinShastra is built on a modern, scalable architecture optimized for performance, SEO, and maintainability.

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT (Browser)                       │
├─────────────────────────────────────────────────────────────┤
│                    Next.js 14+ (App Router)                  │
│                    React Server Components                   │
│                    Tailwind CSS + shadcn/ui                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      VERCEL (Hosting)                        │
├─────────────────────────────────────────────────────────────┤
│                    Edge Network (CDN)                        │
│                    Serverless Functions                      │
│                    ISR (Incremental Static Regeneration)     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      SUPABASE (Backend)                      │
├─────────────────────────────────────────────────────────────┤
│                    PostgreSQL Database                       │
│                    Authentication                            │
│                    Storage (Images)                          │
│                    Edge Functions                            │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | Next.js | 14+ | React framework with App Router |
| **Language** | TypeScript | 5.x | Type safety |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS |
| **UI Components** | shadcn/ui | Latest | Pre-built accessible components |
| **Database** | Supabase (PostgreSQL) | Latest | Database, auth, storage |
| **ORM** | Prisma | Latest | Database access |
| **Content** | MDX (next-mdx-remote) | Latest | Rich content rendering |
| **Search** | Fuse.js (MVP) → Algolia (Scale) | Latest | Client-side search |
| **Hosting** | Vercel | Latest | Deployment, CDN, edge functions |
| **Analytics** | GA4 + Search Console | Latest | Traffic and SEO monitoring |
| **Email** | Resend / SendGrid | Latest | Newsletter, transactional |
| **Testing** | Vitest + Playwright | Latest | Unit and E2E testing |
| **CI/CD** | GitHub Actions | Latest | Automated workflows |

## Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| **App Router over Pages Router** | Better performance, RSC support, layouts |
| **Server Components by default** | Smaller bundles, better SEO, faster TTFB |
| **Supabase over custom backend** | Faster development, built-in auth, real-time |
| **Prisma over raw SQL** | Type safety, migrations, developer experience |
| **MDX over headless CMS** | Version control, developer-friendly, flexible |
| **Vercel over self-hosted** | Zero-config deployment, edge functions, analytics |

## Performance Architecture

| Strategy | Implementation |
|----------|---------------|
| **Static Generation** | Most pages pre-built at build time |
| **ISR** | Content pages revalidate every hour |
| **Edge Functions** | API routes run at edge for low latency |
| **Code Splitting** | Automatic with App Router |
| **Image Optimization** | Next.js Image component with WebP |
| **Font Optimization** | Self-hosted fonts with `font-display: swap` |

## Security Architecture

| Layer | Implementation |
|-------|---------------|
| **Transport** | HTTPS enforced everywhere |
| **Authentication** | Supabase Auth with JWT |
| **Authorization** | Row Level Security (RLS) |
| **Input Validation** | Zod schemas on all inputs |
| **Output Sanitization** | DOMPurify for MDX content |
| **Rate Limiting** | Vercel Edge Middleware |
| **CSP Headers** | Strict Content-Security-Policy |