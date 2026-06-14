# Folder Structure

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Root Structure

```
finshastra/
├── apps/
│   ├── web/                    # Frontend (port 1111)
│   │   ├── src/
│   │   │   ├── app/           # Next.js App Router
│   │   │   ├── components/    # React components
│   │   │   ├── features/      # Feature-specific code
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   ├── lib/           # Utility functions
│   │   │   ├── types/         # TypeScript types
│   │   │   └── middleware.ts  # Next.js middleware
│   │   ├── public/            # Static assets
│   │   ├── next.config.ts     # Next.js config
│   │   ├── tailwind.config.ts # Tailwind config
│   │   ├── tsconfig.json      # TypeScript config
│   │   └── package.json       # Dependencies
│   │
│   └── admin/                  # Admin Panel (port 11)
│       ├── src/
│       │   ├── app/           # Admin pages
│       │   ├── components/    # Admin components
│       │   ├── features/      # Admin features
│       │   ├── hooks/         # Admin hooks
│       │   ├── lib/           # Admin utilities
│       │   ├── types/         # Admin types
│       │   └── middleware.ts  # Admin middleware
│       ├── public/            # Admin static assets
│       ├── next.config.ts     # Admin Next.js config
│       ├── tailwind.config.ts # Admin Tailwind config
│       ├── tsconfig.json      # Admin TypeScript config
│       └── package.json       # Admin dependencies
│
├── packages/
│   └── shared/                 # Shared code
│       ├── prisma/            # Database schema
│       │   ├── schema.prisma  # Prisma schema
│       │   └── migrations/    # Database migrations
│       ├── types/             # Shared TypeScript types
│       ├── utils/             # Shared utilities
│       └── validations/       # Shared Zod schemas
│
├── specs/                      # Project specifications
│   ├── 00-START-HERE.md       # Master entry point
│   ├── 01-project/            # Vision, roadmap, business
│   ├── 02-architecture/       # System design
│   ├── 03-seo/                # SEO rules
│   ├── 04-content/            # Content strategy
│   ├── 05-ui-ux/              # Design system
│   ├── 06-admin/              # Admin architecture
│   ├── 07-features/           # Feature specs
│   ├── 08-security/           # Security rules
│   ├── 09-development/        # Coding standards
│   ├── 10-ai-agents/          # AI agent rules
│   ├── 11-audits/             # Audit templates
│   └── master-playbook.md     # Complete playbook
│
├── turbo.json                  # Turborepo config
├── package.json                # Root workspace config
├── .gitignore                  # Git ignore rules
└── README.md                   # Project readme
```

## Frontend Structure (apps/web/src)

```
src/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Auth route group
│   ├── (marketing)/            # Marketing pages
│   ├── credit-score/           # Credit Score vertical
│   │   ├── page.tsx           # Hub page
│   │   ├── [slug]/            # Article pages
│   │   ├── bank/              # Bank pages
│   │   └── score/             # Score-based pages
│   ├── personal-loan/          # Personal Loan vertical
│   │   ├── page.tsx           # Hub page
│   │   ├── [slug]/            # Article pages
│   │   ├── bank/              # Bank pages
│   │   ├── city/              # City pages
│   │   └── salary/            # Salary pages
│   ├── credit-cards/           # Credit Cards vertical
│   │   ├── page.tsx           # Hub page
│   │   ├── [slug]/            # Article pages
│   │   ├── bank/              # Bank pages
│   │   └── rewards/           # Reward type pages
│   ├── tools/                  # Calculators and tools
│   │   ├── emi-calculator/
│   │   ├── personal-loan-calculator/
│   │   └── credit-score-guide/
│   ├── compare/                # Comparison pages
│   ├── best/                   # Best-of pages
│   ├── author/                 # Author profiles
│   │   └── [slug]/
│   ├── blog/                   # Cross-cutting articles
│   ├── about/                  # About page
│   ├── contact/                # Contact page
│   ├── privacy/                # Privacy policy
│   ├── terms/                  # Terms of service
│   ├── disclaimer/             # Disclaimer
│   ├── editorial-policy/       # Editorial policy
│   ├── affiliate-disclosure/   # Affiliate disclosure
│   ├── sitemap.xml             # Dynamic sitemap
│   ├── robots.txt              # Robots file
│   ├── feed.xml                # RSS feed
│   ├── not-found.tsx           # 404 page
│   └── layout.tsx             # Root layout
│
├── components/                 # Reusable components
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── Breadcrumbs.tsx
│   ├── article/                # Article components
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleContent.tsx
│   │   ├── ArticleMeta.tsx
│   │   └── RelatedArticles.tsx
│   ├── author/                 # Author components
│   │   ├── AuthorBio.tsx
│   │   ├── AuthorCard.tsx
│   │   └── AuthorPage.tsx
│   ├── calculator/             # Calculator components
│   │   ├── EMICalculator.tsx
│   │   ├── CalculatorForm.tsx
│   │   └── CalculatorResult.tsx
│   ├── comparison/             # Comparison components
│   │   ├── ComparisonTable.tsx
│   │   ├── ComparisonCard.tsx
│   │   └── ProsCons.tsx
│   ├── faq/                    # FAQ components
│   │   ├── FAQSection.tsx
│   │   └── FAQItem.tsx
│   ├── forms/                  # Form components
│   │   ├── ContactForm.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── SearchForm.tsx
│   └── seo/                    # SEO components
│       ├── StructuredData.tsx
│       ├── OpenGraph.tsx
│       └── Breadcrumbs.tsx
│
├── features/                   # Feature-specific code
│   ├── auth/                   # Authentication
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── components/
│   ├── articles/               # Article management
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── components/
│   ├── calculators/            # Calculator logic
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── components/
│   ├── search/                 # Search functionality
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── components/
│   └── newsletter/             # Newsletter system
│       ├── hooks/
│       ├── lib/
│       └── components/
│
├── hooks/                      # Custom React hooks
│   ├── useDebounce.ts
│   ├── usePagination.ts
│   ├── useLocalStorage.ts
│   └── useMediaQuery.ts
│
├── lib/                        # Utility functions
│   ├── supabase/               # Supabase client
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── prisma.ts               # Prisma client
│   ├── utils.ts                # General utilities
│   ├── constants.ts            # Constants
│   └── validations.ts          # Zod schemas
│
├── types/                      # TypeScript types
│   ├── index.ts
│   ├── article.ts
│   ├── author.ts
│   ├── category.ts
│   └── api.ts
│
└── middleware.ts                # Next.js middleware
```

## Key Principles

1. **Colocation** — Keep related files together
2. **Feature-based** — Group by feature, not by type
3. **Shared code** — Extract reusable code to packages/shared
4. **Clear boundaries** — Separate frontend, admin, and shared code
5. **Scalable** — Structure supports growth