# Deployment Architecture

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Deployment Strategy

### Frontend (apps/web)

| Aspect | Specification |
|--------|---------------|
| **Platform** | Vercel |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |
| **Node Version** | 18+ |
| **Environment** | Production, Preview, Development |

### Admin Panel (apps/admin)

| Aspect | Specification |
|--------|---------------|
| **Platform** | Vercel |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |
| **Node Version** | 18+ |
| **Environment** | Production, Preview, Development |

## Environment Variables

### Frontend Environment

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database
DATABASE_URL=postgresql://user:password@host:5432/finshastra

# Analytics
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX

# Site
NEXT_PUBLIC_SITE_URL=https://finshastra.in
NEXT_PUBLIC_SITE_NAME=FinShastra

# Email (optional)
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### Admin Environment

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database
DATABASE_URL=postgresql://user:password@host:5432/finshastra

# Auth
JWT_SECRET=your-256-bit-secret
ADMIN_URL=http://localhost:11

# Site
NEXT_PUBLIC_SITE_URL=https://finshastra.in
```

## Build Process

### Frontend Build

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Build application
npm run build

# Start production server
npm start
```

### Admin Build

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Build application
npm run build

# Start production server
npm start
```

## Caching Strategy

| Resource | Cache Duration |
|----------|---------------|
| **HTML Pages (SSG)** | 1 hour (ISR) |
| **Static Assets** | 1 year (immutable) |
| **Images** | 30 days |
| **Fonts** | 1 year (immutable) |
| **API Responses** | 5 minutes |

## Performance Targets

| Metric | Target |
|--------|--------|
| **Lighthouse Performance** | >= 90 |
| **LCP** | < 2.5s |
| **INP** | < 200ms |
| **CLS** | < 0.1 |
| **FID** | < 100ms |
| **TTFB** | < 800ms |

## Monitoring

| Tool | Purpose |
|------|---------|
| **Vercel Analytics** | Performance metrics |
| **Google Analytics 4** | Traffic tracking |
| **Google Search Console** | SEO monitoring |
| **Sentry** | Error tracking (optional) |

## Rollback Strategy

1. **Vercel Rollback** — Use Vercel dashboard to rollback to previous deployment
2. **Database Rollback** — Use Prisma migrations to rollback schema changes
3. **Feature Flags** — Use feature flags for gradual rollouts

## CI/CD Pipeline

```yaml
# GitHub Actions Workflow
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx prisma generate
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run test
      - run: npm run build
```