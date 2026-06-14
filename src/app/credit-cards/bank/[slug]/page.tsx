import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Check } from '@/components/icons';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BANK_LIST } from '@/config/site';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateFinancialProductSchema,
} from '@/config/seo';

interface BankCardData {
  name: string;
  annualFee: string;
  annualFeeWaiver: string;
  interestRate: string;
  rewards: string;
  cashback: string;
  loungeAccess: string;
  fuelSurcharge: string;
  features: string[];
  applyUrl: string;
}

interface BankData {
  name: string;
  slug: string;
  rating: number;
  cards: BankCardData[];
  faqs: { question: string; answer: string }[];
}

const BANK_CREDIT_CARDS: Record<string, BankData> = {
  'hdfc-bank': {
    name: 'HDFC Bank',
    slug: 'hdfc-bank',
    rating: 4.5,
    cards: [
      {
        name: 'HDFC Regalia Gold',
        annualFee: 'Rs. 5,000',
        annualFeeWaiver: 'Waived on Rs. 5L annual spend',
        interestRate: '3.49% per month',
        rewards: '5X on dining & travel',
        cashback: 'Up to 5% on select categories',
        loungeAccess: '8 domestic/year',
        fuelSurcharge: '1% waiver Rs. 400-5000',
        features: [
          'Reward points on all spends',
          'Airport lounge access',
          'Golf privileges',
          'Concierge services',
        ],
        applyUrl: 'https://www.hdfcbank.com',
      },
      {
        name: 'HDFC Millennia',
        annualFee: 'Rs. 1,000',
        annualFeeWaiver: 'Waived on Rs. 1L annual spend',
        interestRate: '3.49% per month',
        rewards: '2X on online spends',
        cashback: '5% on online spends',
        loungeAccess: '2 domestic/year',
        fuelSurcharge: '1% waiver Rs. 400-5000',
        features: [
          'Best for beginners',
          '5% online cashback',
          'Contactless payment',
          'Smartpay benefits',
        ],
        applyUrl: 'https://www.hdfcbank.com',
      },
      {
        name: 'HDFC Freedom',
        annualFee: 'Rs. 500',
        annualFeeWaiver: 'Lifetime free',
        interestRate: '3.49% per month',
        rewards: '1X reward points',
        cashback: '1% on all spends',
        loungeAccess: 'None',
        fuelSurcharge: '1% waiver Rs. 400-5000',
        features: ['Lifetime free card', 'No annual fee ever', 'Basic rewards', 'Easy approval'],
        applyUrl: 'https://www.hdfcbank.com',
      },
    ],
    faqs: [
      {
        question: 'Which HDFC credit card is best for beginners?',
        answer:
          'HDFC Millennia is the best card for beginners with a low annual fee of Rs. 1,000 (waived on Rs. 1L spend), 5% cashback on online spends, and easy approval criteria.',
      },
      {
        question: 'How to get HDFC credit card with no annual fee?',
        answer:
          'HDFC Freedom is a lifetime free card with zero annual fee. For other cards, you can get annual fee waiver by meeting minimum spend requirements - typically Rs. 1-5 lakh per year.',
      },
      {
        question: 'What is the interest rate on HDFC credit cards?',
        answer:
          'HDFC credit cards charge 3.49% per month (41.88% APR) on outstanding balances. Paying your bill in full avoids all interest charges.',
      },
    ],
  },
  'icici-bank': {
    name: 'ICICI Bank',
    slug: 'icici-bank',
    rating: 4.4,
    cards: [
      {
        name: 'ICICI Sapphiro',
        annualFee: 'Rs. 6,500',
        annualFeeWaiver: 'Waived on Rs. 8L annual spend',
        interestRate: '3.49% per month',
        rewards: '6X on international',
        cashback: 'Up to 3% on all online',
        loungeAccess: '12 domestic/year',
        fuelSurcharge: '1% waiver Rs. 400-4000',
        features: [
          'Premium travel card',
          'International lounge access',
          'Concierge services',
          'Golf privileges',
        ],
        applyUrl: 'https://www.icicibank.com',
      },
      {
        name: 'ICICI Platinum Chip',
        annualFee: 'Rs. 0',
        annualFeeWaiver: 'Lifetime free',
        interestRate: '3.49% per month',
        rewards: '1X reward points',
        cashback: '1% on all spends',
        loungeAccess: 'None',
        fuelSurcharge: '1% waiver Rs. 400-4000',
        features: ['Lifetime free', 'No annual fee', 'Basic chip card', 'Easy approval'],
        applyUrl: 'https://www.icicibank.com',
      },
    ],
    faqs: [
      {
        question: 'Which ICICI credit card is best for travel?',
        answer:
          'ICICI Sapphiro is the best travel card with 12 domestic lounge visits, 6X reward points on international spends, and premium concierge services.',
      },
      {
        question: 'Does ICICI offer lifetime free credit cards?',
        answer:
          'Yes, ICICI Platinum Chip is a lifetime free card with no annual fee. ICICI also offers Amazon Pay ICICI credit card with no annual fee and 5% cashback for Prime members.',
      },
    ],
  },
  sbi: {
    name: 'SBI',
    slug: 'sbi',
    rating: 4.3,
    cards: [
      {
        name: 'SBI SimplyCLICK',
        annualFee: 'Rs. 499',
        annualFeeWaiver: 'Waived on Rs. 1L annual spend',
        interestRate: '3.35% per month',
        rewards: '10X on online',
        cashback: 'Up to 10% on Amazon',
        loungeAccess: '2 domestic/year',
        fuelSurcharge: '1% waiver Rs. 500-3000',
        features: [
          'Best online rewards',
          'Amazon partnership',
          'Contactless payment',
          'Low annual fee',
        ],
        applyUrl: 'https://www.sbicard.com',
      },
      {
        name: 'SBI SimplySave',
        annualFee: 'Rs. 499',
        annualFeeWaiver: 'Waived on Rs. 1L annual spend',
        interestRate: '3.35% per month',
        rewards: '10X on dining & groceries',
        cashback: 'Up to 5% on categories',
        loungeAccess: '2 domestic/year',
        fuelSurcharge: '1% waiver Rs. 500-3000',
        features: [
          'Rewards on daily spends',
          'Dining benefits',
          'Grocery rewards',
          'Easy approval',
        ],
        applyUrl: 'https://www.sbicard.com',
      },
    ],
    faqs: [
      {
        question: 'Which SBI credit card is best for online shopping?',
        answer:
          'SBI SimplyCLICK is the best for online shopping with 10X reward points on Amazon and other online platforms, effectively giving up to 10% cashback on online purchases.',
      },
    ],
  },
};

function getBankData(slug: string): BankData | undefined {
  return BANK_CREDIT_CARDS[slug];
}

function getBankInfo(slug: string) {
  return BANK_LIST.find((b) => b.slug === slug);
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BANK_LIST.map((bank) => ({ slug: bank.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bank = getBankInfo(slug);
  if (!bank) return { title: 'Not Found' };
  const title = `${bank.name} Credit Cards - Best Cards, Rewards & Benefits 2026`;
  const description = `Explore all ${bank.name} credit cards. Compare annual fees, rewards, cashback, and benefits. Apply online for the best ${bank.name} credit card.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/credit-cards/bank/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
  };
}

export default async function BankCreditCardPage({ params }: PageProps) {
  const { slug } = await params;
  const bankInfo = getBankInfo(slug);
  if (!bankInfo) notFound();

  const bankData = getBankData(slug);
  if (!bankData) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Credit Cards', href: '/credit-cards' },
    { label: bankInfo.name, href: `/credit-cards/bank/${slug}` },
  ];

  const financialProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: `${bankInfo.name} Credit Cards`,
    description: `Explore all ${bankInfo.name} credit cards with rewards, cashback, and benefits.`,
    provider: {
      '@type': 'Organization',
      name: bankInfo.name,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: bankInfo.rating,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />
        <JsonLd schema={financialProductSchema} />

        <section className="mb-12">
          <Badge className="mb-4">{bankInfo.name}</Badge>
          <h1 className="text-text-primary text-4xl font-bold">{bankInfo.name} Credit Cards</h1>
          <p className="text-text-secondary mt-4 max-w-3xl text-lg">
            Explore all credit cards from {bankInfo.name}. Compare annual fees, rewards, cashback,
            and benefits to find the right card for you.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{bankInfo.rating}/5 Rating</span>
          </div>
        </section>

        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bankData.cards.map((card) => (
            <Card key={card.name} className="flex flex-col transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <div className="text-text-secondary flex items-center gap-2 text-sm">
                  <span>{card.annualFee}/year</span>
                  <Badge variant="success" className="text-xs">
                    {card.annualFeeWaiver}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <div className="mb-4 space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Rewards</span>
                    <span className="font-medium">{card.rewards}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Cashback</span>
                    <span className="font-medium">{card.cashback}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Lounge Access</span>
                    <span className="font-medium">{card.loungeAccess}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Fuel Surcharge</span>
                    <span className="font-medium">{card.fuelSurcharge}</span>
                  </div>
                </div>
                <ul className="mb-4 flex-1 space-y-1.5">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-text-secondary flex items-start gap-2 text-xs"
                    >
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href={card.applyUrl} target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <JsonLd schema={generateFAQSchema(bankData.faqs)} />
        <FAQAccordion faqs={bankData.faqs} />
      </main>
    </>
  );
}
