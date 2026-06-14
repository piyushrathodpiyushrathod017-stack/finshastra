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

interface BankLoanData {
  name: string;
  slug: string;
  rating: number;
  interestRate: string;
  processingFee: string;
  minAmount: string;
  maxAmount: string;
  tenure: string;
  disbursalTime: string;
  prepaymentCharges: string;
  eligibility: string[];
  documents: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  applyUrl: string;
}

const BANK_LOANS: Record<string, BankLoanData> = {
  'hdfc-bank': {
    name: 'HDFC Bank',
    slug: 'hdfc-bank',
    rating: 4.5,
    interestRate: '10.50% - 21.00% p.a.',
    processingFee: 'Up to 2.5% of loan amount',
    minAmount: 'Rs. 50,000',
    maxAmount: 'Rs. 40,00,000',
    tenure: '12 - 60 months',
    disbursalTime: 'Within 48 hours',
    prepaymentCharges: '4% of outstanding (2% after 1 year)',
    eligibility: [
      'Age: 21-60 years',
      'Min salary: Rs. 25,000/month',
      'Min 2 years work experience',
      'CIBIL score: 750+',
    ],
    documents: [
      'Aadhaar & PAN card',
      'Last 3 months salary slips',
      'Last 6 months bank statements',
      'Employment proof',
      'Passport-size photos',
    ],
    features: [
      'Fastest disbursal for existing customers',
      'Pre-approved offers up to Rs. 40 lakh',
      'Flexible repayment options',
      'Online application available',
      'No collateral required',
    ],
    faqs: [
      {
        question: 'What is the minimum salary for HDFC personal loan?',
        answer:
          'HDFC Bank requires a minimum monthly salary of Rs. 25,000 for salaried individuals. Self-employed individuals need annual income of Rs. 5 lakh or more.',
      },
      {
        question: 'How long does HDFC personal loan take to disburse?',
        answer:
          'HDFC Bank can disburse personal loans within 48 hours for existing customers with pre-approved offers. New customers may take 3-5 working days.',
      },
      {
        question: 'Can I get an HDFC personal loan with a CIBIL score of 700?',
        answer:
          'HDFC Bank generally requires a CIBIL score of 750+ for personal loans. However, existing customers with good banking history may get approved with 700+ score at slightly higher rates.',
      },
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan',
  },
  'icici-bank': {
    name: 'ICICI Bank',
    slug: 'icici-bank',
    rating: 4.4,
    interestRate: '10.75% - 18.00% p.a.',
    processingFee: 'Up to 2% of loan amount',
    minAmount: 'Rs. 50,000',
    maxAmount: 'Rs. 50,00,000',
    tenure: '12 - 72 months',
    disbursalTime: 'Within 72 hours',
    prepaymentCharges: '5% of outstanding (3% after 1 year)',
    eligibility: [
      'Age: 23-58 years',
      'Min salary: Rs. 30,000/month',
      'Min 2 years work experience',
      'CIBIL score: 750+',
    ],
    documents: [
      'Aadhaar & PAN card',
      'Last 3 months salary slips',
      'Last 6 months bank statements',
      'Employment letter',
      'Passport-size photos',
    ],
    features: [
      'Highest loan amount up to Rs. 50 lakh',
      'Longest tenure up to 72 months',
      'Digital-first application',
      'Pre-approved offers for existing customers',
      'Competitive rates for high scores',
    ],
    faqs: [
      {
        question: 'What is the maximum ICICI personal loan amount?',
        answer:
          'ICICI Bank offers personal loans up to Rs. 50 lakh for eligible applicants. The actual amount depends on your income, credit score, and repayment capacity.',
      },
      {
        question: 'Does ICICI charge prepayment penalty?',
        answer:
          'Yes, ICICI charges 5% prepayment penalty in the first year, which reduces to 3% after 1 year. Floating rate loans may have lower prepayment charges as per RBI guidelines.',
      },
    ],
    applyUrl: 'https://www.icicibank.com/personal-loans',
  },
  sbi: {
    name: 'SBI',
    slug: 'sbi',
    rating: 4.3,
    interestRate: '11.00% - 16.00% p.a.',
    processingFee: 'Up to 1% of loan amount',
    minAmount: 'Rs. 25,000',
    maxAmount: 'Rs. 20,00,000',
    tenure: '12 - 60 months',
    disbursalTime: '5 - 7 working days',
    prepaymentCharges: '3% of outstanding principal',
    eligibility: [
      'Age: 21-58 years',
      'Min salary: Rs. 15,000/month',
      'Min 1 year work experience',
      'CIBIL score: 700+',
    ],
    documents: [
      'Aadhaar & PAN card',
      'Last 6 months salary slips',
      'Last 6 months bank statements',
      'ID proof',
      'Passport-size photos',
    ],
    features: [
      'Lowest processing fee at 1%',
      'Lowest minimum salary requirement',
      'Government-backed trust',
      'No hidden charges',
      'Wide branch network for support',
    ],
    faqs: [
      {
        question: 'Can I get an SBI personal loan with low salary?',
        answer:
          'Yes, SBI requires minimum Rs. 15,000 monthly salary, which is lower than most private banks. Existing SBI account holders with good history may get better terms.',
      },
    ],
    applyUrl: 'https://sbi.co.in/web/personal-borrowing/loans/personal-loans',
  },
};

function getBankLoanData(slug: string): BankLoanData | undefined {
  return BANK_LOANS[slug];
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
  const title = `${bank.name} Personal Loan - Interest Rates, Eligibility & Apply Online 2026`;
  const description = `Apply for ${bank.name} personal loan online. Check interest rates starting at 10.50% p.a., processing fees, eligibility criteria, and required documents.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/personal-loan/bank/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
  };
}

export default async function BankPersonalLoanPage({ params }: PageProps) {
  const { slug } = await params;
  const bankInfo = getBankInfo(slug);
  if (!bankInfo) notFound();

  const bankData = getBankLoanData(slug);
  if (!bankData) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Personal Loan', href: '/personal-loan' },
    { label: bankInfo.name, href: `/personal-loan/bank/${slug}` },
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />
        <JsonLd
          schema={generateFinancialProductSchema({
            id: bankInfo.slug,
            ...bankInfo,
            description: `${bankInfo.name} personal loan`,
            website: '',
            features: bankData.features,
            pros: bankData.features,
            cons: [],
            interestRate: bankData.interestRate,
            processingFee: bankData.processingFee,
            minLoanAmount: 50000,
            maxLoanAmount: 4000000,
            minCreditScore: 750,
            createdAt: new Date(),
            updatedAt: new Date(),
          })}
        />

        <section className="mb-12">
          <Badge className="mb-4">{bankInfo.name}</Badge>
          <h1 className="text-text-primary text-4xl font-bold">{bankInfo.name} Personal Loan</h1>
          <p className="text-text-secondary mt-4 max-w-3xl text-lg">
            Apply for {bankInfo.name} personal loan online. Check interest rates, eligibility,
            required documents, and apply for quick disbursal.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{bankInfo.rating}/5 Rating</span>
          </div>
        </section>

        <Card className="border-primary/20 mb-12 border-2">
          <CardHeader>
            <CardTitle className="text-xl">{bankInfo.name} Personal Loan Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-bg-secondary rounded-lg p-4">
                <p className="text-text-secondary text-sm">Interest Rate</p>
                <p className="text-primary text-lg font-bold">{bankData.interestRate}</p>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4">
                <p className="text-text-secondary text-sm">Processing Fee</p>
                <p className="text-lg font-bold">{bankData.processingFee}</p>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4">
                <p className="text-text-secondary text-sm">Max Loan Amount</p>
                <p className="text-lg font-bold">{bankData.maxAmount}</p>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4">
                <p className="text-text-secondary text-sm">Tenure</p>
                <p className="text-lg font-bold">{bankData.tenure}</p>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4">
                <p className="text-text-secondary text-sm">Disbursal Time</p>
                <p className="text-lg font-bold">{bankData.disbursalTime}</p>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4">
                <p className="text-text-secondary text-sm">Prepayment Charges</p>
                <p className="text-lg font-bold">{bankData.prepaymentCharges}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {bankData.eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Documents Required</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {bankData.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {doc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-text-primary mb-4 text-2xl font-bold">Key Features</h2>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {bankData.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <div className="mb-12">
          <Button asChild size="lg">
            <Link href={bankData.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply for {bankInfo.name} Personal Loan
            </Link>
          </Button>
        </div>

        <JsonLd schema={generateFAQSchema(bankData.faqs)} />
        <FAQAccordion faqs={bankData.faqs} />
      </main>
    </>
  );
}
