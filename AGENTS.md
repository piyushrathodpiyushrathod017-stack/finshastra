# FinShastra - Development Guide

## Tech Stack
- **Framework**: Next.js 16.2.7 (Turbopack)
- **React**: 19.2.4
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x
- **Database**: Prisma 7.8 (PostgreSQL)
- **UI**: shadcn/ui + Radix UI
- **Icons**: Lucide React

## Dev Commands

### Core Development
```bash
npm run dev              # Start dev server (port 3000)
npm run dev:admin        # Start admin dev server (port 1111)
npm run build            # Production build
npm run start            # Start production server
```

### Code Quality
```bash
npm run lint             # Run ESLint
npm run lint:fix         # Run ESLint with auto-fix
npm run format           # Format code with Prettier
npm run format:check     # Check formatting
npm run typecheck        # TypeScript type checking
npm run check            # Run all: typecheck + lint + format:check
```

### Testing
```bash
npm run test             # Run vitest in watch mode
npm run test:run         # Run vitest once
npm run test:coverage    # Run with coverage report
npm run test:ui          # Open vitest UI
npx playwright test      # Run e2e tests
npx playwright show-report  # View e2e test report
```

### Database
```bash
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema to database
npm run db:migrate       # Run migrations
npm run db:seed          # Seed database
npm run db:reset         # Reset database
```

### Build Analysis
```bash
npm run analyze          # Analyze bundle size
```

## Project Structure
```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable components
│   ├── admin/        # Admin panel components
│   ├── calculators/  # Financial calculators
│   ├── layout/       # Header, Footer, Sidebar, MobileNav
│   ├── sections/     # Page sections
│   ├── seo/          # SEO components (JsonLd, Breadcrumbs, FAQ)
│   └── ui/           # shadcn/ui base components
├── config/           # Site configuration (seo, site)
├── features/         # Feature-specific components
├── generated/        # Generated Prisma client (DO NOT EDIT)
├── hooks/            # Custom React hooks
├── lib/              # Utilities, auth, content, constants
├── types/            # TypeScript type definitions
└── middleware.ts     # Next.js middleware (auth, redirects)
```

## Key Conventions
- Navigation is defined in `src/lib/constants.ts` (single source of truth)
- All routes must resolve to existing pages (no broken links)
- Use `<Image>` from `next/image` for all images
- Components use Tailwind CSS v4 with CSS variables for theming
- Forms use `react-hook-form` + `zod` validation
- State management uses `zustand`
- Testing uses `vitest` (unit) + `playwright` (e2e)

## Environment Variables
See `.env.example` for all required env vars.

## MCP Servers
Playwright MCP is configured in `opencode.json` for browser automation.
