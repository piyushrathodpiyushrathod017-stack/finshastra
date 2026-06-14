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

interface LoanComparison {
  brand1: {
    name: string;
    interestRate: string;
    processingFee: string;
    prepaymentCharges: string;
    minAmount: string;
    maxAmount: string;
    tenure: string;
    disbursalTime: string;
    pros: string[];
    cons: string[];
    bestFor: string;
    applyUrl: string;
    rating: number;
  };
  brand2: {
    name: string;
    interestRate: string;
    processingFee: string;
    prepaymentCharges: string;
    minAmount: string;
    maxAmount: string;
    tenure: string;
    disbursalTime: string;
    pros: string[];
    cons: string[];
    bestFor: string;
    applyUrl: string;
    rating: number;
  };
  faqs: { question: string; answer: string }[];
}

const LOAN_COMPARISONS: Record<string, LoanComparison> = {
  'hdfc-bank-vs-icici-bank': {
    brand1: {
      name: 'HDFC Bank',
      interestRate: '10.50% - 21.00% p.a.',
      processingFee: 'Up to 2.5% of loan amount',
      prepaymentCharges: '4% of outstanding principal (after 1 year: 2%)',
      minAmount: 'Rs. 50,000',
      maxAmount: 'Rs. 40,00,000',
      tenure: '12 - 60 months',
      disbursalTime: 'Within 48 hours for existing customers',
      pros: [
        'Fast disbursal for existing customers',
        'No collateral required',
        'Flexible repayment options',
        'Pre-approved offers available',
      ],
      cons: [
        'Higher processing fees',
        'Strict income eligibility',
        'Prepayment penalty in first year',
      ],
      bestFor: 'Salaried professionals with existing HDFC accounts who need quick funds',
      applyUrl: 'https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan',
      rating: 4.5,
    },
    brand2: {
      name: 'ICICI Bank',
      interestRate: '10.75% - 18.00% p.a.',
      processingFee: 'Up to 2% of loan amount',
      prepaymentCharges: '5% of outstanding principal (after 1 year: 3%)',
      minAmount: 'Rs. 50,000',
      maxAmount: 'Rs. 50,00,000',
      tenure: '12 - 72 months',
      disbursalTime: 'Within 72 hours',
      pros: [
        'Higher loan amount ceiling',
        'Longer tenure option (72 months)',
        'Digital-first application',
        'Competitive rates for high credit scores',
      ],
      cons: [
        'Higher prepayment charges',
        'Processing fee non-refundable',
        'Documentation requirements can be strict',
      ],
      bestFor: 'High-income professionals seeking larger loan amounts with flexible tenure',
      applyUrl: 'https://www.icicibank.com/personal-loans',
      rating: 4.4,
    },
    faqs: [
      {
        question: 'Which bank offers a lower interest rate for personal loans?',
        answer:
          'HDFC Bank starts at 10.50% p.a. while ICICI Bank starts at 10.75% p.a. However, the actual rate depends on your credit score, income, and relationship with the bank. Both offer preferential rates for existing customers.',
      },
      {
        question: 'Which bank has lower processing fees?',
        answer:
          'ICICI Bank charges up to 2% processing fee, while HDFC Bank charges up to 2.5%. For a Rs. 10 lakh loan, the difference could be Rs. 5,000. Both fees are negotiable for high-value loans.',
      },
      {
        question: 'Can I prepay my loan without penalty?',
        answer:
          'Both banks charge prepayment penalties in the first year. After 1 year, HDFC charges 2% while ICICI charges 3%. Floating rate loans from banks registered under RBI guidelines may have no prepayment penalty.',
      },
      {
        question: 'Which bank approves loans faster?',
        answer:
          'HDFC Bank can disburse within 48 hours for existing customers with pre-approved offers. ICICI Bank typically takes 72 hours. Both banks offer instant approval for their digital banking customers.',
      },
      {
        question: 'What documents are required for both banks?',
        answer:
          'Both banks require: KYC documents (Aadhaar/PAN), salary slips (last 3 months), bank statements (last 6 months), and employment proof. Existing customers may have simplified documentation.',
      },
    ],
  },
  'sbi-vs-axis-bank': {
    brand1: {
      name: 'SBI',
      interestRate: '11.00% - 16.00% p.a.',
      processingFee: 'Up to 1% of loan amount',
      prepaymentCharges: '3% of outstanding principal',
      minAmount: 'Rs. 25,000',
      maxAmount: 'Rs. 20,00,000',
      tenure: '12 - 60 months',
      disbursalTime: '5 - 7 working days',
      pros: [
        'Lowest processing fee (1%)',
        'Government-backed trust',
        'No hidden charges',
        'Pan-India branch network',
      ],
      cons: [
        'Slowest processing time',
        'Lower maximum loan amount',
        'Limited digital features',
        'Paper-intensive process',
      ],
      bestFor: 'Conservative borrowers who prefer low fees and government backing',
      applyUrl: 'https://sbi.co.in/web/personal-borrowing/loans/personal-loans',
      rating: 4.3,
    },
    brand2: {
      name: 'Axis Bank',
      interestRate: '10.75% - 20.00% p.a.',
      processingFee: 'Up to 2% of loan amount',
      prepaymentCharges: '4% of outstanding principal (after 1 year: 2%)',
      minAmount: 'Rs. 50,000',
      maxAmount: 'Rs. 35,00,000',
      tenure: '12 - 60 months',
      disbursalTime: 'Within 48 hours',
      pros: [
        'Fastest digital processing',
        'Flexible tenure options',
        'Good pre-payment terms after 1 year',
        'Online application available',
      ],
      cons: [
        'Higher processing fees than SBI',
        'Maximum amount lower than some competitors',
        'Customer service inconsistent',
      ],
      bestFor: 'Young professionals who prefer quick digital processing',
      applyUrl: 'https://www.axisbank.com/retail/loans/personal-loan',
      rating: 4.2,
    },
    faqs: [
      {
        question: 'Is SBI the cheapest option for personal loans?',
        answer:
          'SBI has the lowest processing fee at 1% and competitive interest rates starting at 11%. However, ICICI and Axis may offer better rates for high credit score individuals. SBI is best for those who prioritize low fees.',
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [{ slug: 'hdfc-bank-vs-icici-bank' }, { slug: 'sbi-vs-axis-bank' }];
}

function getComparison(slug: string): LoanComparison | undefined {
  return LOAN_COMPARISONS[slug];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparison(slug);
  if (!comp) return { title: 'Not Found' };
  const title = `${comp.brand1.name} vs ${comp.brand2.name} Personal Loan Comparison 2026`;
  const description = `Compare ${comp.brand1.name} and ${comp.brand2.name} personal loan interest rates, processing fees, tenure, and eligibility. Find the best personal loan for your needs.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/compare/personal-loan/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
  };
}

export default async function PersonalLoanComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comp = getComparison(slug);
  if (!comp) notFound();

  const { brand1, brand2, faqs } = comp;
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Personal Loan', href: '/personal-loan' },
    { label: `${brand1.name} vs ${brand2.name}`, href: `/compare/personal-loan/${slug}` },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />

      <section className="mb-12">
        <Badge className="mb-4">Personal Loan Comparison</Badge>
        <h1 className="text-text-primary text-4xl font-bold">
          {brand1.name} vs {brand2.name} Personal Loan Comparison
        </h1>
        <p className="text-text-secondary mt-4 max-w-3xl text-lg">
          A detailed comparison of personal loan offerings from {brand1.name} and {brand2.name}{' '}
          including interest rates, fees, and eligibility criteria.
        </p>
      </section>

      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-primary/20 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{brand1.name} Personal Loan</CardTitle>
              <Badge variant="secondary">{brand1.rating}/5</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4 space-y-2 text-sm">
              <p>
                <span className="font-medium">Interest Rate:</span> {brand1.interestRate}
              </p>
              <p>
                <span className="font-medium">Max Amount:</span> {brand1.maxAmount}
              </p>
            </div>
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
              <CardTitle className="text-xl">{brand2.name} Personal Loan</CardTitle>
              <Badge variant="secondary">{brand2.rating}/5</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4 space-y-2 text-sm">
              <p>
                <span className="font-medium">Interest Rate:</span> {brand2.interestRate}
              </p>
              <p>
                <span className="font-medium">Max Amount:</span> {brand2.maxAmount}
              </p>
            </div>
            <Button asChild className="w-full">
              <Link href={brand2.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <ComparisonTable
        title="Detailed Feature Comparison"
        headers={['Feature', brand1.name, brand2.name]}
        rows={[
          {
            cells: [
              { text: 'Interest Rate', highlight: true },
              { text: brand1.interestRate },
              { text: brand2.interestRate },
            ],
          },
          {
            cells: [
              { text: 'Processing Fee', highlight: true },
              { text: brand1.processingFee },
              { text: brand2.processingFee },
            ],
          },
          {
            cells: [
              { text: 'Prepayment Charges' },
              { text: brand1.prepaymentCharges },
              { text: brand2.prepaymentCharges },
            ],
          },
          {
            cells: [
              { text: 'Min Loan Amount' },
              { text: brand1.minAmount },
              { text: brand2.minAmount },
            ],
          },
          {
            cells: [
              { text: 'Max Loan Amount' },
              { text: brand1.maxAmount },
              { text: brand2.maxAmount },
            ],
          },
          { cells: [{ text: 'Tenure' }, { text: brand1.tenure }, { text: brand2.tenure }] },
          {
            cells: [
              { text: 'Disbursal Time' },
              { text: brand1.disbursalTime },
              { text: brand2.disbursalTime },
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
