import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { QuickLinksBox } from '@/components/sections/QuickLinksBox';
import { getArticlesByCategory, getAllBanks, getCategoryBySlug } from '@/lib/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, CheckCircle, Building } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Personal Loans in India 2026 — Best Rates, Eligibility & EMI Calculator',
  description:
    'Find the best personal loan rates in India. Compare offers from HDFC, ICICI, SBI and more. Check eligibility, documents required and calculate EMI online.',
  alternates: {
    canonical: `${SITE_URL}/personal-loan`,
  },
  openGraph: {
    title: 'Personal Loans in India 2026',
    description: 'Compare personal loan rates and find the best deal.',
    url: `${SITE_URL}/personal-loan`,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Personal Loan', href: '/personal-loan' },
];

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-text-primary mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Personal Loans in India
        </h1>
        <p className="text-text-secondary mt-4 max-w-2xl text-lg">
          Compare personal loan interest rates, eligibility criteria, and documentation requirements
          from top banks in India.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/personal-loan/best-rates">Compare Rates</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/tools/emi-calculator">EMI Calculator</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SubcategoryNav() {
  const subcategories = [
    { label: 'Personal Loan Guide', href: '/personal-loan/guide', icon: FileText },
    { label: 'Eligibility Criteria', href: '/personal-loan/eligibility', icon: CheckCircle },
    { label: 'Documents Required', href: '/personal-loan/documents', icon: FileText },
    { label: 'EMI Calculator', href: '/tools/emi-calculator', icon: Calculator },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-text-primary mb-6 text-2xl font-bold">Quick Navigation</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subcategories.map((sub) => (
            <Link key={sub.href} href={sub.href}>
              <Card className="h-full transition-all hover:border-emerald-300 hover:shadow-md">
                <CardHeader className="pb-2">
                  <sub.icon className="h-6 w-6 text-emerald-600" />
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

export default async function PersonalLoanPage() {
  const articles = await getArticlesByCategory('personal-loan');
  const banks = await getAllBanks();

  const quickLinks = [
    { label: 'Best Personal Loan Rates', href: '/personal-loan/best-rates' },
    { label: 'Eligibility Calculator', href: '/personal-loan/eligibility' },
    { label: 'Documents Required', href: '/personal-loan/documents' },
    { label: 'EMI Calculator', href: '/tools/emi-calculator' },
    { label: 'Top Banks', href: '/personal-loan/top-banks' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <SubcategoryNav />

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-text-primary mb-8 text-3xl font-bold">Personal Loan Articles</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link key={article.id} href={`/personal-loan/${article.slug}`}>
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

        <section className="bg-bg-secondary py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-text-primary mb-8 text-3xl font-bold">
              Top Banks for Personal Loans
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {banks.slice(0, 6).map((bank) => (
                <Card key={bank.id} className="transition-shadow hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={bank.logo}
                        alt={bank.name}
                        className="h-10 w-10 object-contain"
                        loading="lazy"
                      />
                      <div>
                        <CardTitle className="text-base">{bank.name}</CardTitle>
                        <p className="text-text-secondary text-sm">Rating: {bank.rating}/5</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Interest Rate</span>
                        <span className="text-text-primary font-medium">{bank.interestRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Min Credit Score</span>
                        <span className="text-text-primary font-medium">{bank.minCreditScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Max Loan</span>
                        <span className="text-text-primary font-medium">
                          {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0,
                          }).format(bank.maxLoanAmount)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <NewsletterSignup />
            </div>
            <QuickLinksBox title="Personal Loan Quick Links" links={quickLinks} />
          </div>
        </div>
      </main>
    </div>
  );
}
