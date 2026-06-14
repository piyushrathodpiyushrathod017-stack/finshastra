import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { VERTICALS_CONFIG } from '@/config/site';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { getFeaturedArticles } from '@/lib/content';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  FileCheck,
  RefreshCw,
  Calculator,
  CreditCard,
  TrendingUp,
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  Banknote,
} from '@/components/icons';

export const metadata: Metadata = {
  title: `${SITE_NAME} — Your Trusted Guide to Personal Finance in India`,
  description:
    'Expert guides on credit scores, personal loans, and credit cards. Compare rates from top Indian banks and make smarter financial decisions.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — Personal Finance Guide for India`,
    description: 'Expert guides on credit scores, personal loans, and credit cards.',
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
  },
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge className="border-blue-400/30 bg-blue-500/20 text-blue-100">
                Trusted by 5,00,000+ Readers
              </Badge>
              <Badge className="border-green-400/30 bg-green-500/20 text-green-100">
                Expert Reviewed
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Trusted Guide to <span className="text-blue-200">Personal Finance</span> in India
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
              Expert guides on credit scores, personal loans, and credit cards. Compare rates from
              top banks and make smarter financial decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/credit-score">
                  Check Credit Score Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-400 text-white hover:bg-blue-600/20"
              >
                <Link href="/personal-loan/best">Compare Loan Rates</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Fact Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                <span>RBI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                <span>Updated Monthly</span>
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-blue-400/20 bg-white/10 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: TrendingUp, value: '732', label: 'Avg CIBIL Score' },
                    { icon: Banknote, value: '10.5%', label: 'Lowest PL Rate' },
                    { icon: CreditCard, value: '500+', label: 'Cards Compared' },
                    { icon: Users, value: '50K+', label: 'Monthly Readers' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-blue-400/20 bg-white/10 p-4"
                    >
                      <stat.icon className="h-6 w-6 text-blue-200" />
                      <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-blue-200">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSignals() {
  const signals = [
    {
      icon: ShieldCheck,
      label: 'Expert Reviewed',
      description: 'All content reviewed by certified financial advisors',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: FileCheck,
      label: 'Fact Checked',
      description: 'Interest rates and data verified against official sources',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: RefreshCw,
      label: 'Updated Regularly',
      description: 'Content reviewed and updated every 30 days',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section className="border-border bg-bg-secondary border-b py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="border-border flex items-center gap-4 rounded-xl border bg-white p-5 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${signal.color}`}
              >
                <signal.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold">{signal.label}</h3>
                <p className="text-text-secondary text-sm">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCategories() {
  const verticals = [
    {
      ...VERTICALS_CONFIG.creditScore,
      icon: TrendingUp,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      articles: '15+ Articles',
    },
    {
      ...VERTICALS_CONFIG.personalLoan,
      icon: Banknote,
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      articles: '17+ Articles',
    },
    {
      ...VERTICALS_CONFIG.creditCards,
      icon: CreditCard,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      articles: '17+ Articles',
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-text-primary text-3xl font-bold">Explore Our Financial Guides</h2>
          <p className="text-text-secondary mt-2">
            Expert-reviewed content across all major personal finance verticals
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {verticals.map((v) => (
            <Link key={v.basePath} href={v.basePath} className="group">
              <div className="border-border relative h-full overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className={`inline-flex rounded-xl p-3 ${v.lightColor}`}>
                  <v.icon className={`h-6 w-6 ${v.textColor}`} />
                </div>
                <h3 className="text-text-primary group-hover:text-primary mt-4 text-xl font-bold transition-colors">
                  {v.title}
                </h3>
                <p className="text-text-secondary mt-2 text-sm">{v.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {v.articles}
                  </Badge>
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularGuides() {
  const guides = [
    {
      title: 'How to Check Your Credit Score for Free',
      category: 'Credit Score',
      href: '/credit-score/check-credit-score-free',
      readTime: '8 min',
      icon: TrendingUp,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Best Personal Loan Rates Compared',
      category: 'Personal Loan',
      href: '/personal-loan/best',
      readTime: '12 min',
      icon: Banknote,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Best Cashback Credit Cards in India',
      category: 'Credit Cards',
      href: '/credit-cards/best',
      readTime: '11 min',
      icon: CreditCard,
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <section className="bg-bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-text-primary text-3xl font-bold">Popular Financial Guides</h2>
          <p className="text-text-secondary mt-2">
            Our most read guides to help you make informed decisions
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group">
              <div className="border-border h-full overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                  <div className={`rounded-2xl p-6 ${guide.color}`}>
                    <guide.icon className="h-12 w-12" />
                  </div>
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {guide.category}
                  </Badge>
                  <h3 className="text-text-primary group-hover:text-primary line-clamp-2 text-lg font-bold transition-colors">
                    {guide.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-text-muted flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{guide.readTime} read</span>
                    </div>
                    <span className="text-primary text-sm font-medium group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const tools = [
    {
      label: 'EMI Calculator',
      href: '/tools/emi-calculator',
      description: 'Calculate your loan EMI instantly',
      icon: Calculator,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      label: 'Credit Score Guide',
      href: '/credit-score',
      description: 'Learn about CIBIL scores and how to improve them',
      icon: TrendingUp,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Loan Eligibility',
      href: '/personal-loan/personal-loan-eligibility',
      description: 'Check if you qualify for a personal loan',
      icon: FileCheck,
      color: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-text-primary text-3xl font-bold">Free Financial Tools</h2>
          <p className="text-text-secondary mt-2">
            Calculators and guides to help you plan your finances
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group">
              <div className="border-border h-full rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className={`inline-flex rounded-xl p-3 ${tool.color}`}>
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="text-text-primary group-hover:text-primary mt-4 text-lg font-bold transition-colors">
                  {tool.label}
                </h3>
                <p className="text-text-secondary mt-2 text-sm">{tool.description}</p>
                <span className="text-primary mt-4 inline-block text-sm font-medium group-hover:underline">
                  Try now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestArticles({
  articles,
}: {
  articles: Awaited<ReturnType<typeof getFeaturedArticles>>;
}) {
  return (
    <section className="bg-bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-text-primary text-3xl font-bold">Latest Articles</h2>
          <p className="text-text-secondary mt-2">
            In-depth guides to help you navigate the financial landscape
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/${article.category.slug}/${article.slug}`}
              className="group"
            >
              <div className="border-border h-full overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category.name}
                    </Badge>
                    <span className="text-text-muted flex items-center gap-1 text-xs">
                      <Clock className="h-3 w-3" />
                      {article.readingTime} min
                    </span>
                  </div>
                  <h3 className="text-text-primary group-hover:text-primary line-clamp-2 text-lg font-bold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary mt-2 line-clamp-2 text-sm">{article.excerpt}</p>
                  <span className="text-primary mt-4 inline-block text-sm font-medium group-hover:underline">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const featuredArticles = await getFeaturedArticles(3);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <TrustSignals />
        <FeaturedCategories />
        <PopularGuides />
        <ToolsSection />
        <LatestArticles articles={featuredArticles} />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>
      </main>
    </div>
  );
}
