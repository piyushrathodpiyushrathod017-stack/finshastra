import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Check, X } from '@/components/icons';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/config/seo';

interface ComparisonData {
  brand1: {
    name: string;
    annualFee: string;
    interestRate: string;
    welcomeBonus: string;
    rewards: string;
    cashback: string;
    loungeAccess: string;
    fuelSurcharge: string;
    pros: string[];
    cons: string[];
    bestFor: string;
    applyUrl: string;
    rating: number;
  };
  brand2: {
    name: string;
    annualFee: string;
    interestRate: string;
    welcomeBonus: string;
    rewards: string;
    cashback: string;
    loungeAccess: string;
    fuelSurcharge: string;
    pros: string[];
    cons: string[];
    bestFor: string;
    applyUrl: string;
    rating: number;
  };
  faqs: { question: string; answer: string }[];
}

const COMPARISONS: Record<string, ComparisonData> = {
  'hdfc-bank-vs-icici-bank': {
    brand1: {
      name: 'HDFC Bank',
      annualFee: 'Rs. 500 - Rs. 10,000',
      interestRate: '3.49% per month (41.88% APR)',
      welcomeBonus: 'Up to 10,000 reward points',
      rewards: '2X points on online spends, 5X on selected categories',
      cashback: 'Up to 5% on select categories',
      loungeAccess: '8 domestic lounge visits per year',
      fuelSurcharge: '1% waiver on fuel spends Rs. 400 - Rs. 5,000',
      pros: [
        'Wide range of card variants',
        'Excellent rewards program',
        'Strong merchant offers',
        'Premium lounge access',
      ],
      cons: [
        'High annual fees on premium cards',
        'Reward redemption charges',
        'Strict eligibility criteria',
      ],
      bestFor: 'Frequent travelers and high spenders who want premium benefits',
      applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
      rating: 4.5,
    },
    brand2: {
      name: 'ICICI Bank',
      annualFee: 'Rs. 500 - Rs. 12,500',
      interestRate: '3.49% per month (41.88% APR)',
      welcomeBonus: 'Up to 12,000 bonus points',
      rewards: '2X points on all spends, 5X on dining & travel',
      cashback: 'Up to 3% on all online spends',
      loungeAccess: '6 domestic lounge visits per year',
      fuelSurcharge: '1% waiver on fuel spends Rs. 400 - Rs. 4,000',
      pros: [
        'Instant approval for pre-approved customers',
        'Good cashback on online spends',
        'No joining fee on select cards',
        'Digital-first approach',
      ],
      cons: [
        'Fewer lounge visits than competitors',
        'Higher forex markup',
        'Reward points expire after 2 years',
      ],
      bestFor: 'Online shoppers and digital-savvy users who prefer easy approvals',
      applyUrl: 'https://www.icicibank.com/card/credit-cards',
      rating: 4.4,
    },
    faqs: [
      {
        question: 'Which card is better for travel - HDFC or ICICI?',
        answer:
          'HDFC Bank credit cards generally offer better travel benefits with more lounge visits (8 vs 6 per year) and stronger international rewards. However, ICICI cards offer better value for domestic online spends.',
      },
      {
        question: 'Do both banks charge foreign transaction fees?',
        answer:
          'Yes, both HDFC and ICICI Bank charge 3.5% foreign transaction fees on international spends. HDFC Infinia and Diners Club cards offer lower forex markup of 2%.',
      },
      {
        question: 'Which bank offers faster credit card approval?',
        answer:
          'ICICI Bank typically offers faster approval, especially for existing account holders who may get pre-approved offers. HDFC Bank may take 5-7 working days for new customers.',
      },
      {
        question: 'Can I get lifetime free credit cards from both banks?',
        answer:
          'Both HDFC and ICICI offer lifetime free cards with no annual fee. HDFC MoneyBack and ICICI Platinum Chip are popular lifetime free options.',
      },
    ],
  },
  'sbi-vs-axis-bank': {
    brand1: {
      name: 'SBI',
      annualFee: 'Rs. 499 - Rs. 4,999',
      welcomeBonus: '5,000 reward points on first spend',
      interestRate: '3.35% per month (40.20% APR)',
      rewards: '1.5X reward points on all spends',
      cashback: '1% cashback on all transactions',
      loungeAccess: '4 domestic lounge visits per year',
      fuelSurcharge: '1% waiver on fuel spends Rs. 500 - Rs. 3,000',
      pros: [
        'Lowest annual fee among PSU banks',
        'Widest branch network',
        'Government-backed trust',
        'Competitive interest rates',
      ],
      cons: ['Slower digital processing', 'Limited premium card options', 'Fewer lounge visits'],
      bestFor: 'First-time credit card users and those preferring public sector banks',
      applyUrl: 'https://www.sbicard.com/credit-cards',
      rating: 4.3,
    },
    brand2: {
      name: 'Axis Bank',
      annualFee: 'Rs. 500 - Rs. 10,000',
      welcomeBonus: 'Up to 8,000 EDGE Reward points',
      interestRate: '3.40% per month (40.80% APR)',
      rewards: '4X EDGE points on travel & dining',
      cashback: 'Up to 2% on all spends',
      loungeAccess: '6 domestic lounge visits per year',
      fuelSurcharge: '1% waiver on fuel spends Rs. 400 - Rs. 5,000',
      pros: [
        'Strong travel card portfolio',
        'Good international acceptance',
        'Fast digital approvals',
        'Flexible reward redemption',
      ],
      cons: [
        'Higher annual fees than SBI',
        'Reward points have expiry',
        'Customer service can be inconsistent',
      ],
      bestFor: 'Young professionals who want a mix of travel and lifestyle benefits',
      applyUrl: 'https://www.axisbank.com/retail/cards/credit-cards',
      rating: 4.2,
    },
    faqs: [
      {
        question: 'Which is better for beginners - SBI or Axis Bank?',
        answer:
          'SBI is better for beginners due to lower fees, wider branch network, and government backing. Axis Bank is better for those comfortable with digital banking.',
      },
      {
        question: 'Which bank has better fuel surcharge waiver?',
        answer:
          'Axis Bank offers fuel surcharge waiver on a wider range (Rs. 400-5000) compared to SBI (Rs. 500-3000). Both waive 1% surcharge.',
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'hdfc-bank-vs-icici-bank' },
    { slug: 'sbi-vs-axis-bank' },
    { slug: 'hdfc-bank-vs-sbi' },
    { slug: 'icici-bank-vs-axis-bank' },
  ];
}

function getComparison(slug: string): ComparisonData | undefined {
  return COMPARISONS[slug];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return { title: 'Not Found' };
  const title = `${comparison.brand1.name} vs ${comparison.brand2.name} Credit Card Comparison 2026`;
  const description = `Compare ${comparison.brand1.name} and ${comparison.brand2.name} credit cards on annual fee, interest rate, rewards, cashback, and lounge access. Find the best card for your needs.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/compare/credit-cards/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
  };
}

export default async function CreditCardComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const { brand1, brand2, faqs } = comparison;
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Credit Cards', href: '/credit-cards' },
    { label: `${brand1.name} vs ${brand2.name}`, href: `/compare/credit-cards/${slug}` },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />

      <section className="mb-12">
        <Badge className="mb-4">Credit Card Comparison</Badge>
        <h1 className="text-text-primary text-4xl font-bold">
          {brand1.name} vs {brand2.name} Credit Card Comparison
        </h1>
        <p className="text-text-secondary mt-4 max-w-3xl text-lg">
          An in-depth comparison of credit cards from {brand1.name} and {brand2.name} to help you
          choose the right card for your spending needs.
        </p>
      </section>

      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-primary/20 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{brand1.name}</CardTitle>
              <Badge variant="secondary">{brand1.rating}/5</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary mb-4 text-sm">{brand1.bestFor}</p>
            <Button asChild className="w-full">
              <Link href={brand1.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply Now
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="border-primary/20 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{brand2.name}</CardTitle>
              <Badge variant="secondary">{brand2.rating}/5</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary mb-4 text-sm">{brand2.bestFor}</p>
            <Button asChild className="w-full">
              <Link href={brand2.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <ComparisonTable
        title="Feature-by-Feature Comparison"
        headers={['Feature', brand1.name, brand2.name]}
        rows={[
          {
            cells: [
              { text: 'Annual Fee', highlight: true },
              { text: brand1.annualFee },
              { text: brand2.annualFee },
            ],
          },
          {
            cells: [
              { text: 'Interest Rate', highlight: true },
              { text: brand1.interestRate },
              { text: brand2.interestRate },
            ],
          },
          {
            cells: [
              { text: 'Welcome Bonus' },
              { text: brand1.welcomeBonus },
              { text: brand2.welcomeBonus },
            ],
          },
          { cells: [{ text: 'Rewards' }, { text: brand1.rewards }, { text: brand2.rewards }] },
          { cells: [{ text: 'Cashback' }, { text: brand1.cashback }, { text: brand2.cashback }] },
          {
            cells: [
              { text: 'Lounge Access' },
              { text: brand1.loungeAccess },
              { text: brand2.loungeAccess },
            ],
          },
          {
            cells: [
              { text: 'Fuel Surcharge Waiver' },
              { text: brand1.fuelSurcharge },
              { text: brand2.fuelSurcharge },
            ],
          },
        ]}
      />

      <Separator className="my-8" />

      <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{brand1.name} - Pros</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {brand1.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {pro}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{brand1.name} - Cons</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {brand1.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  {con}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{brand2.name} - Pros</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {brand2.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {pro}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{brand2.name} - Cons</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {brand2.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  {con}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg">Who Should Choose {brand1.name}?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary text-sm">{brand1.bestFor}</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg">Who Should Choose {brand2.name}?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary text-sm">{brand2.bestFor}</p>
          </CardContent>
        </Card>
      </section>

      <JsonLd schema={generateFAQSchema(faqs)} />
      <FAQAccordion faqs={faqs} />
    </main>
  );
}
