import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { QuickLinksBox } from '@/components/sections/QuickLinksBox';
import { getArticlesByCategory, getAllComparisons, getCategoryBySlug } from '@/lib/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CreditCard, Plane, Gift, ArrowRightLeft } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Best Credit Cards in India 2026 — Compare Cashback, Travel & Rewards',
  description:
    'Compare the best credit cards in India for 2026. Find top cashback, travel, and rewards credit cards from HDFC, ICICI, SBI and more.',
  alternates: {
    canonical: `${SITE_URL}/credit-cards`,
  },
  openGraph: {
    title: 'Best Credit Cards in India 2026',
    description: 'Compare and find the best credit card for your needs.',
    url: `${SITE_URL}/credit-cards`,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Credit Cards', href: '/credit-cards' },
];

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-text-primary mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Credit Cards in India
        </h1>
        <p className="text-text-secondary mt-4 max-w-2xl text-lg">
          Compare credit cards across categories — cashback, travel, rewards, and lifetime free.
          Find the best credit card for your spending pattern.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/credit-cards/best">Best Credit Cards</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/credit-cards/compare">Compare Cards</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SubcategoryNav() {
  const subcategories = [
    { label: 'Best Cards 2026', href: '/credit-cards/best', icon: CreditCard },
    { label: 'Cashback Cards', href: '/credit-cards/cashback', icon: Gift },
    { label: 'Travel Cards', href: '/credit-cards/travel', icon: Plane },
    { label: 'Card Comparison', href: '/credit-cards/compare', icon: ArrowRightLeft },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-text-primary mb-6 text-2xl font-bold">Browse by Category</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subcategories.map((sub) => (
            <Link key={sub.href} href={sub.href}>
              <Card className="h-full transition-all hover:border-orange-300 hover:shadow-md">
                <CardHeader className="pb-2">
                  <sub.icon className="h-6 w-6 text-orange-600" />
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

export default async function CreditCardsPage() {
  const articles = await getArticlesByCategory('credit-cards');
  const comparisons = await getAllComparisons();
  const category = await getCategoryBySlug('credit-cards');

  const quickLinks = [
    { label: 'Best Credit Cards', href: '/credit-cards/best' },
    { label: 'Cashback Cards', href: '/credit-cards/cashback' },
    { label: 'Travel Cards', href: '/credit-cards/travel' },
    { label: 'Rewards Cards', href: '/credit-cards/rewards' },
    { label: 'Credit Card Fees', href: '/credit-cards/fees' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <SubcategoryNav />

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-text-primary mb-8 text-3xl font-bold">Credit Card Guides</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link key={article.id} href={`/credit-cards/${article.slug}`}>
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
                      <Badge variant="secondary" className="mt-3 text-xs">
                        {article.readingTime} min read
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {comparisons.length > 0 && (
          <section className="bg-bg-secondary py-12">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-text-primary mb-8 text-3xl font-bold">Card Comparisons</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {comparisons.map((comp) => (
                  <Card key={comp.id} className="transition-shadow hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">{comp.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary text-sm">{comp.description}</p>
                      <div className="mt-4 flex gap-2">
                        {comp.items.map((item) => (
                          <Badge key={item.id} variant="outline">
                            {item.bank.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <NewsletterSignup />
            </div>
            <QuickLinksBox title="Credit Card Quick Links" links={quickLinks} />
          </div>
        </div>
      </main>
    </div>
  );
}
