# Development Standards

> **Version:** 1.1.0  
> **Last Updated:** 2026-06-09

## Required Standards

### TypeScript Rules

| Rule | Specification |
|------|---------------|
| **Strict Mode** | `strict: true` in tsconfig.json |
| **No Any** | `@typescript-eslint/no-explicit-any: error` |
| **Type Safety** | All functions, props, API responses typed |
| **Naming** | PascalCase for components, camelCase for functions, UPPER_SNAKE for constants |
| **Exports** | Named exports only. No default exports (except page/layout). |

### Code Architecture

| Rule | Specification |
|------|---------------|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui components |
| **Database** | Supabase (PostgreSQL) |
| **ORM** | Prisma |
| **State Management** | React Server Components (primary), Zustand (client-only) |
| **Forms** | React Hook Form + Zod validation |
| **MDX** | next-mdx-remote for content rendering |

### Component Rules

| Rule | Specification |
|------|---------------|
| **Single Responsibility** | Each component does one thing |
| **Composition over Configuration** | Prefer composable components |
| **Colocation** | Keep components near their usage |
| **Reusable Components** | `/src/components/ui/` for generic UI |
| **Feature Components** | `/src/features/{feature}/` for feature-specific |
| **Page Components** | `/src/app/` only for page routing logic |
| **Props Interface** | Every component has a named props interface |
| **No Inline Styles** | Use Tailwind classes only |

### File Naming Rules

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ArticleCard.tsx` |
| Utilities | camelCase | `formatCurrency.ts` |
| Constants | UPPER_SNAKE_CASE | `SITE_CONFIG.ts` |
| Types | PascalCase | `Article.ts` |
| Pages | lowercase (Next.js) | `page.tsx`, `layout.tsx` |
| API Routes | lowercase | `route.ts` |

## Forbidden Development Practices

| Practice | Why Forbidden |
|----------|---------------|
| **Hardcoded Data** | Use database, config files, or environment variables |
| **Massive Components** | Components > 200 lines should be split |
| **Duplicate Logic** | Extract to utility functions or shared components |
| **Unused Dependencies** | Remove unused packages. Audit quarterly. |
| `any` Type | Defeats TypeScript purpose |
| **Console.log in Production** | Use proper logging service |
| **Commented-Out Code** | Delete it. Use git history if needed. |
| **Magic Numbers** | Extract to named constants |
| **Deep Nesting** | Max 3 levels |
| **God Modules** | Single file doing everything |

## Code Quality Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **TypeScript** | Type checking |
| **Husky** | Git hooks |
| **lint-staged** | Staged file linting |
| **Vitest** | Unit testing (80% coverage) |
| **Playwright** | E2E testing |
| **Lighthouse CI** | Performance testing |

## Git Workflow

| Rule | Specification |
|------|---------------|
| **Main Branch** | `main` — production-ready code |
| **Development** | `develop` — integration branch |
| **Features** | `feature/{name}` |
| **Fixes** | `fix/{name}` |
| **Commits** | Conventional: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:` |
| **PR Reviews** | Minimum 1 approval before merge |
| **CI Checks** | ESLint, TypeScript, Tests must pass |
| **No Force Push** | Never force push to main or develop |