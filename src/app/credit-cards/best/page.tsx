import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Check } from '@/components/icons';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/config/seo';

interface CreditCard {
  name: string;
  bank: string;
  slug: string;
  annualFee: string;
  rating: number;
  benefits: string[];
  category: string;
  applyUrl: string;
}

const CATEGORIES = [
  'All',
  'Best Overall',
  'Best for Travel',
  'Best for Cashback',
  'Best for Rewards',
  'Best for Beginners',
  'Best for Students',
] as const;

const CREDIT_CARDS: CreditCard[] = [
  {
    name: 'HDFC Regalia Gold',
    bank: 'HDFC Bank',
    slug: 'hdfc-regalia-gold',
    annualFee: 'Rs. 5,000',
    rating: 4.6,
    benefits: [
      '5X reward points on dining & travel',
      '8 lounge visits/year',
      'Rs. 10,000 welcome bonus',
      'Golf privileges',
    ],
    category: 'Best Overall',
    applyUrl: 'https://www.hdfcbank.com',
  },
  {
    name: 'ICICI Sapphiro',
    bank: 'ICICI Bank',
    slug: 'icici-sapphiro',
    annualFee: 'Rs. 6,500',
    rating: 4.5,
    benefits: [
      '6X reward points on international',
      'Airport lounge access',
      'Concierge services',
      'Golf privileges',
    ],
    category: 'Best for Travel',
    applyUrl: 'https://www.icicibank.com',
  },
  {
    name: 'SBI SimplyCLICK',
    bank: 'SBI',
    slug: 'sbi-simplyclick',
    annualFee: 'Rs. 499',
    rating: 4.3,
    benefits: [
      '10X reward points online',
      'Amazon vouchers',
      'Fuel surcharge waiver',
      'Contactless payment',
    ],
    category: 'Best for Cashback',
    applyUrl: 'https://www.sbicard.com',
  },
  {
    name: 'Axis Bank Magnus',
    bank: 'Axis Bank',
    slug: 'axis-magnus',
    annualFee: 'Rs. 10,000',
    rating: 4.4,
    benefits: [
      'EDGE reward points',
      'International lounge access',
      'Travel insurance',
      'Concierge services',
    ],
    category: 'Best for Travel',
    applyUrl: 'https://www.axisbank.com',
  },
  {
    name: 'HDFC Millennia',
    bank: 'HDFC Bank',
    slug: 'hdfc-millennia',
    annualFee: 'Rs. 1,000',
    rating: 4.2,
    benefits: [
      '5% cashback on online',
      'Smartpay benefits',
      'Contactless payment',
      'No annual fee conditions',
    ],
    category: 'Best for Beginners',
    applyUrl: 'https://www.hdfcbank.com',
  },
  {
    name: 'Kotak 811 Credit Card',
    bank: 'Kotak Mahindra Bank',
    slug: 'kotak-811',
    annualFee: 'Rs. 0',
    rating: 4.1,
    benefits: [
      'Lifetime free',
      '5% cashback on online',
      'Fuel surcharge waiver',
      'Welcome vouchers',
    ],
    category: 'Best for Students',
    applyUrl: 'https://www.kotak.com',
  },
];

const TOP_5 = CREDIT_CARDS.slice(0, 5);

const faqs = [
  {
    question: 'What is the best credit card in India in 2026?',
    answer:
      'The best credit card depends on your spending habits. HDFC Regalia Gold is best overall for its rewards and benefits. For travel, ICICI Sapphiro and Axis Magnus are excellent choices. For cashback on online shopping, SBI SimplyCLICK is highly recommended.',
  },
  {
    question: 'How do I choose a credit card for the first time?',
    answer:
      'For beginners, choose a card with low annual fees (under Rs. 1,000), simple reward structure, and easy approval criteria. HDFC Millennia and Kotak 811 are great first credit cards with minimal fees and good online cashback.',
  },
  {
    question: 'Which credit card has the best cashback?',
    answer:
      'SBI SimplyCLICK offers 10X reward points on online spends, effectively giving up to 10% cashback on Amazon and other online platforms. HDFC Millennia offers 5% cashback on all online spends.',
  },
  {
    question: 'Are lifetime free credit cards worth it?',
    answer:
      'Yes, lifetime free credit cards like Kotak 811 are excellent for those who want basic credit card benefits without paying annual fees. They typically offer 1-5% cashback on various categories.',
  },
  {
    question: 'Can I get a credit card with a low salary?',
    answer:
      'Yes, many banks offer credit cards with minimum salary of Rs. 15,000-20,000. SBI SimplyCLICK and HDFC Millennia have relatively lower income requirements compared to premium cards.',
  },
];

export const metadata: Metadata = {
  title: `Best Credit Cards in India 2026 - Compare & Apply | ${SITE_NAME}`,
  description:
    'Find the best credit cards in India for 2026. Compare annual fees, rewards, cashback, and benefits. Apply online for top credit cards from HDFC, ICICI, SBI, and more.',
  openGraph: {
    title: 'Best Credit Cards in India 2026',
    description: 'Compare and find the best credit cards for your needs.',
    url: `${SITE_URL}/credit-cards/best`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function BestCreditCardsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Credit Cards', href: '/credit-cards' },
    { label: 'Best Credit Cards', href: '/credit-cards/best' },
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />

        <section className="mb-12">
          <Badge className="mb-4">Credit Cards</Badge>
          <h1 className="text-text-primary text-4xl font-bold">Best Credit Cards in India 2026</h1>
          <p className="text-text-secondary mt-4 max-w-3xl text-lg">
            Discover the top credit cards in India across categories - from cashback and rewards to
            travel and lifestyle. Compare annual fees, benefits, and apply online.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-2xl font-bold">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Badge
                key={cat}
                variant="outline"
                className="hover:bg-primary cursor-pointer transition-colors hover:text-white"
              >
                {cat}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CREDIT_CARDS.map((card) => (
            <Card key={card.slug} className="flex flex-col transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {card.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{card.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <p className="text-text-secondary text-sm">{card.bank}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-primary mb-3 text-sm font-medium">{card.annualFee} annual fee</p>
                <ul className="mb-4 flex-1 space-y-1.5">
                  {card.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="text-text-secondary flex items-start gap-2 text-xs"
                    >
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                      {benefit}
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

        <ComparisonTable
          title="Top 5 Credit Cards Comparison"
          headers={['Card', 'Annual Fee', 'Rating', 'Best For']}
          rows={TOP_5.map((card) => ({
            cells: [
              { text: card.name, highlight: true },
              { text: card.annualFee },
              { text: `${card.rating}/5` },
              { text: card.category },
            ],
          }))}
        />

        <JsonLd schema={generateFAQSchema(faqs)} />
        <FAQAccordion faqs={faqs} />

        <div className="mt-12">
          <NewsletterSignup />
        </div>
      </main>
    </>
  );
}
