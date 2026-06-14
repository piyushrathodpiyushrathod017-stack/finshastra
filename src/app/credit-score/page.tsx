import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { QuickLinksBox } from '@/components/sections/QuickLinksBox';
import { getArticlesByCategory, getCategoryBySlug } from '@/lib/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, AlertTriangle, BarChart3, BookOpen } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Credit Score Guide India 2026 — Check, Improve & Understand CIBIL Score',
  description:
    'Complete guide to credit scores in India. Learn how to check your CIBIL score for free, understand factors affecting it, and improve your credit score quickly.',
  alternates: {
    canonical: `${SITE_URL}/credit-score`,
  },
  openGraph: {
    title: 'Credit Score Guide India 2026',
    description: 'Everything you need to know about credit scores in India.',
    url: `${SITE_URL}/credit-score`,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Credit Score', href: '/credit-score' },
];

function HeroSection() {
  const stats = [
    { label: 'Average CIBIL Score', value: '732', icon: BarChart3 },
    { label: 'Score Range', value: '300 - 900', icon: TrendingUp },
    { label: 'Good Score', value: '750+', icon: AlertTriangle },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-text-primary mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Credit Score in India
        </h1>
        <p className="text-text-secondary mt-4 max-w-2xl text-lg">
          Everything you need to know about credit scores — how they work, how to check them for
          free, and proven strategies to improve your CIBIL score.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-text-primary text-2xl font-bold">{stat.value}</p>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubcategoryNav() {
  const subcategories = [
    { label: 'What is Credit Score', href: '/credit-score/what-is-credit-score', icon: BookOpen },
    { label: 'Improve Your Score', href: '/credit-score/improve', icon: TrendingUp },
    { label: 'Score Ranges', href: '/credit-score/range', icon: BarChart3 },
    { label: 'Factors Affecting Score', href: '/credit-score/factors', icon: AlertTriangle },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-text-primary mb-6 text-2xl font-bold">Browse by Topic</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subcategories.map((sub) => (
            <Link key={sub.href} href={sub.href}>
              <Card className="hover:border-primary/30 h-full transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <sub.icon className="text-primary h-6 w-6" />
                  <CardTitle className="text-base">{sub.label}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function CreditScorePage() {
  const articles = await getArticlesByCategory('credit-score');
  const category = await getCategoryBySlug('credit-score');

  const quickLinks = [
    { label: 'Check Credit Score Free', href: '/credit-score/check-credit-score-free' },
    { label: 'CIBIL Score Guide', href: '/credit-score/cibil-score' },
    { label: 'Credit Score Range', href: '/credit-score/range' },
    { label: 'Factors Affecting Score', href: '/credit-score/factors' },
    { label: 'Credit Score FAQs', href: '/credit-score/faqs' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <SubcategoryNav />

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-text-primary mb-2 text-3xl font-bold">Credit Score Articles</h2>
            <p className="text-text-secondary mb-8">{category?.description}</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link key={article.id} href={`/credit-score/${article.slug}`}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <div className="relative aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary line-clamp-2 text-sm">{article.excerpt}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.readingTime} min read
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <NewsletterSignup />
            </div>
            <QuickLinksBox title="Credit Score Quick Links" links={quickLinks} />
          </div>
        </div>
      </main>
    </div>
  );
}
