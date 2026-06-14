import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Check, TrendingUp, Shield, Clock, Banknote } from '@/components/icons';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/config/seo';

interface PersonalLoan {
  rank: number;
  name: string;
  slug: string;
  interestRate: string;
  processingFee: string;
  maxAmount: string;
  tenure: string;
  disbursalTime: string;
  rating: number;
  minCreditScore: number;
  minSalary: string;
  prepaymentCharges: string;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  applyUrl: string;
}

const PERSONAL_LOANS: PersonalLoan[] = [
  {
    rank: 1,
    name: 'HDFC Bank Personal Loan',
    slug: 'hdfc-bank',
    interestRate: '10.50% p.a. onwards',
    processingFee: 'Up to 2.5%',
    maxAmount: '₹40 Lakh',
    tenure: '12-60 months',
    disbursalTime: '24 hours',
    rating: 4.5,
    minCreditScore: 750,
    minSalary: '₹25,000',
    prepaymentCharges: '2% - 4%',
    features: [
      'No collateral required',
      'Pre-approved offers for existing customers',
      'Flexible repayment from 12 to 60 months',
      'Online application with minimal documentation',
      'Instant approval for salary account holders',
    ],
    pros: [
      'Fastest disbursal in the industry (24 hours)',
      'Competitive interest rates from 10.50%',
      'Wide branch network across India',
      'Excellent digital banking experience',
    ],
    cons: [
      'Strict eligibility for new customers',
      'Higher processing fees for low credit scores',
      'Prepayment charges of 2% to 4%',
    ],
    bestFor: 'Salaried professionals with high credit scores',
    applyUrl: 'https://www.hdfcbank.com',
  },
  {
    rank: 2,
    name: 'ICICI Bank Personal Loan',
    slug: 'icici-bank',
    interestRate: '10.75% p.a. onwards',
    processingFee: 'Up to 2%',
    maxAmount: '₹50 Lakh',
    tenure: '12-72 months',
    disbursalTime: '48 hours',
    rating: 4.4,
    minCreditScore: 750,
    minSalary: '₹30,000',
    prepaymentCharges: '2% - 3%',
    features: [
      'Higher loan amount up to ₹50 lakhs',
      'Longer tenure up to 72 months',
      'Digital-first processing via iMobile app',
      'Minimal documentation for salaried',
      'Top-up loan facility available',
    ],
    pros: [
      'Highest loan amount among private banks',
      'Quick online application process',
      'Good customer support',
      'Competitive credit card offerings',
    ],
    cons: [
      'Strict processing for self-employed',
      'Higher rates for low credit scores',
      'Limited flexibility on tenure for small loans',
    ],
    bestFor: 'High-income professionals seeking larger loan amounts',
    applyUrl: 'https://www.icicibank.com',
  },
  {
    rank: 3,
    name: 'SBI Personal Loan',
    slug: 'sbi',
    interestRate: '11.15% p.a. onwards',
    processingFee: 'Up to 1%',
    maxAmount: '₹20 Lakh',
    tenure: '12-60 months',
    disbursalTime: '5-7 days',
    rating: 4.3,
    minCreditScore: 700,
    minSalary: '₹15,000',
    prepaymentCharges: 'Nil for floating rate',
    features: [
      'Lowest processing fee among major banks',
      'Government backed reliability',
      'Wide branch and ATM network',
      'No hidden charges',
      'Special schemes for government employees',
    ],
    pros: [
      'Lowest interest rates starting from 11.15%',
      'Trusted government bank',
      'Wide branch and ATM network',
      'Special schemes for government employees',
    ],
    cons: [
      'Slower processing compared to private banks',
      'Higher documentation requirements',
      'Digital platform less polished than private peers',
    ],
    bestFor: 'Government employees and those preferring PSU banks',
    applyUrl: 'https://sbi.co.in',
  },
  {
    rank: 4,
    name: 'Axis Bank Personal Loan',
    slug: 'axis-bank',
    interestRate: '10.49% p.a. onwards',
    processingFee: 'Up to 2%',
    maxAmount: '₹35 Lakh',
    tenure: '12-60 months',
    disbursalTime: '48 hours',
    rating: 4.2,
    minCreditScore: 750,
    minSalary: '₹25,000',
    prepaymentCharges: '2% - 4%',
    features: [
      'Fast disbursal within 48 hours',
      'Flexible EMI options',
      'Pre-approved offers for existing customers',
      'Salary account special rates',
      'Strong credit card portfolio',
    ],
    pros: [
      'Good balance of rate and service',
      'Strong credit card portfolio',
      'Competitive processing fees',
      'Good digital banking platform',
    ],
    cons: [
      'Higher interest rates for new customers',
      'Limited tenure options for small loans',
      'Stricter eligibility for self-employed',
    ],
    bestFor: 'Existing Axis Bank customers and credit card holders',
    applyUrl: 'https://www.axisbank.com',
  },
  {
    rank: 5,
    name: 'Kotak Mahindra Personal Loan',
    slug: 'kotak-mahindra-bank',
    interestRate: '10.99% p.a. onwards',
    processingFee: 'Up to 2%',
    maxAmount: '₹25 Lakh',
    tenure: '12-60 months',
    disbursalTime: '72 hours',
    rating: 4.1,
    minCreditScore: 750,
    minSalary: '₹25,000',
    prepaymentCharges: 'Nil on select products',
    features: [
      'Zero prepayment charges on select products',
      'Digital-first application process',
      'Competitive rates for salaried professionals',
      'Balance transfer facility',
      'Flexible repayment options',
    ],
    pros: [
      'Attractive interest rates',
      'Good digital experience',
      'Flexible repayment options',
      'No foreclosure charges on some products',
    ],
    cons: [
      'Limited branch presence in rural areas',
      'Higher rates for self-employed',
      'Slower customer service response times',
    ],
    bestFor: 'Digital-savvy customers who may want to prepay early',
    applyUrl: 'https://www.kotak.com',
  },
  {
    rank: 6,
    name: 'IndusInd Bank Personal Loan',
    slug: 'indusind-bank',
    interestRate: '10.75% p.a. onwards',
    processingFee: 'Up to 2.5%',
    maxAmount: '₹50 Lakh',
    tenure: '12-60 months',
    disbursalTime: '48 hours',
    rating: 4.0,
    minCreditScore: 750,
    minSalary: '₹30,000',
    prepaymentCharges: '2% - 4%',
    features: [
      'Instant approval for existing customers',
      'Minimal documentation',
      'Competitive credit card rewards',
      'Digital-first approach',
      'High loan amount up to ₹50 lakhs',
    ],
    pros: [
      'Quick disbursal',
      'Competitive interest rates',
      'Good digital experience',
      'Strong credit card offerings',
    ],
    cons: [
      'Limited branch network',
      'Higher rates for new customers',
      'Customer service can be variable',
    ],
    bestFor: 'High-income professionals seeking digital-first experience',
    applyUrl: 'https://www.indusind.com',
  },
  {
    rank: 7,
    name: 'Yes Bank Personal Loan',
    slug: 'yes-bank',
    interestRate: '10.99% p.a. onwards',
    processingFee: 'Up to 2.5%',
    maxAmount: '₹40 Lakh',
    tenure: '12-60 months',
    disbursalTime: '72 hours',
    rating: 3.7,
    minCreditScore: 750,
    minSalary: '₹25,000',
    prepaymentCharges: '2% - 4%',
    features: [
      'Quick online application',
      'Flexible repayment options',
      'Pre-approved offers',
      'Balance transfer facility',
    ],
    pros: [
      'Competitive interest rates',
      'Good digital platform',
      'Flexible loan amounts',
      'Growing branch network',
    ],
    cons: [
      'Recently restructured bank — some caution',
      'Limited product range compared to larger banks',
      'Customer service still improving',
    ],
    bestFor: 'Those looking for competitive rates from a growing bank',
    applyUrl: 'https://www.yesbank.in',
  },
  {
    rank: 8,
    name: 'PNB Personal Loan',
    slug: 'pnb',
    interestRate: '11.15% p.a. onwards',
    processingFee: 'Up to 1%',
    maxAmount: '₹10 Lakh',
    tenure: '12-60 months',
    disbursalTime: '5-7 days',
    rating: 4.0,
    minCreditScore: 700,
    minSalary: '₹15,000',
    prepaymentCharges: 'Nil for floating rate',
    features: [
      'Special schemes for pensioners',
      'Government employee benefits',
      'Wide rural branch network',
      'Competitive rates for existing customers',
    ],
    pros: [
      'Government bank trust',
      'Affordable interest rates',
      'Extensive branch network',
      'No hidden fees',
    ],
    cons: [
      'Slower digital processing',
      'Higher documentation burden',
      'Limited online features compared to private banks',
    ],
    bestFor: 'Government employees and those in tier-2/3 cities',
    applyUrl: 'https://www.pnbindia.in',
  },
  {
    rank: 9,
    name: 'Bank of Baroda Personal Loan',
    slug: 'bank-of-baroda',
    interestRate: '11.35% p.a. onwards',
    processingFee: 'Up to 1.5%',
    maxAmount: '₹20 Lakh',
    tenure: '12-60 months',
    disbursalTime: '5-7 days',
    rating: 3.9,
    minCreditScore: 700,
    minSalary: '₹20,000',
    prepaymentCharges: 'Nil for floating rate',
    features: [
      'Pre-approved offers for existing customers',
      'Multi-city loan facility',
      'Flexi-repayment options',
      'Special rates for Baroda customers',
    ],
    pros: [
      'Competitive interest rates',
      'Good branch coverage',
      'Government bank reliability',
      'Flexible loan amounts',
    ],
    cons: [
      'Slower loan processing',
      'Customer service can be inconsistent',
      'Digital platform needs improvement',
    ],
    bestFor: 'Existing Bank of Baroda customers',
    applyUrl: 'https://www.bankofbaroda.com',
  },
  {
    rank: 10,
    name: 'Canara Bank Personal Loan',
    slug: 'canara-bank',
    interestRate: '11.25% p.a. onwards',
    processingFee: 'Up to 1%',
    maxAmount: '₹15 Lakh',
    tenure: '12-60 months',
    disbursalTime: '5-7 days',
    rating: 3.8,
    minCreditScore: 700,
    minSalary: '₹15,000',
    prepaymentCharges: 'Nil for floating rate',
    features: [
      'Simple application process',
      'Competitive rates for government employees',
      'Wide ATM network',
      'Multiple loan products',
    ],
    pros: [
      'Low processing fees',
      'Government bank stability',
      'Accessible across India',
      'Transparent terms',
    ],
    cons: [
      'Digital experience lags private banks',
      'Processing time can be longer',
      'Limited pre-approval options',
    ],
    bestFor: 'Budget-conscious borrowers who prefer PSU banks',
    applyUrl: 'https://www.canarabank.com',
  },
];

const faqs = [
  {
    question: 'Which bank offers the lowest interest rate on personal loans?',
    answer:
      'HDFC Bank offers the lowest starting interest rate at 10.50% p.a. However, the actual rate depends on your credit score, income, and relationship with the bank. Axis Bank also offers competitive rates starting from 10.49%. For government employees, SBI and PNB offer preferential rates starting from 11.15%.',
  },
  {
    question: 'What is the minimum salary required for a personal loan?',
    answer:
      'Most banks require a minimum monthly salary of ₹25,000 to ₹30,000 for salaried individuals. SBI and PNB accept ₹15,000 for existing customers. Self-employed individuals need to show annual income of ₹2-5 lakhs. The higher your salary, the better loan terms you can negotiate.',
  },
  {
    question: 'How long does personal loan approval take?',
    answer:
      'HDFC and Axis Bank can approve and disburse within 24-48 hours for existing customers. ICICI Bank takes about 48 hours. SBI and other PSU banks may take 5-7 working days due to documentation requirements. Online applications are generally processed faster.',
  },
  {
    question: 'Can I prepay my personal loan without penalty?',
    answer:
      'Most private banks charge 2-5% prepayment penalty in the first year. After 1 year, the penalty reduces to 2-3%. PSU banks like SBI, PNB, and Bank of Baroda have zero prepayment charges on floating rate loans as per RBI guidelines. Kotak Mahindra offers zero prepayment on select products.',
  },
  {
    question: 'What documents are needed for a personal loan?',
    answer:
      'Common documents include: Aadhaar and PAN card, last 3 months salary slips, last 6 months bank statements, employment proof, and passport-size photographs. Existing customers may need fewer documents. Self-employed individuals need ITR for 2-3 years and business registration proof.',
  },
  {
    question: 'How much personal loan can I get on my salary?',
    answer:
      'Banks typically offer 24 to 36 times your monthly salary. For a ₹50,000 salary, you can get ₹12-18 lakhs. For ₹1,00,000 salary, up to ₹24-36 lakhs. The maximum amount also depends on your credit score, existing EMIs, and employer category.',
  },
  {
    question: 'Is personal loan interest tax deductible?',
    answer:
      'Personal loan interest is tax deductible only if the loan is used for specific purposes: home renovation (under Section 24), business purposes (as business expense), or education (under Section 80E). For general personal use like travel or shopping, there is no tax benefit on personal loan interest.',
  },
  {
    question: 'Should I choose a short or long tenure for my personal loan?',
    answer:
      'Choose the shortest tenure you can afford. A shorter tenure means lower total interest cost. For example, a ₹5 lakh loan at 11% for 3 years costs ₹91,200 in interest, while the same loan for 5 years costs ₹1,52,000. However, ensure the EMI does not exceed 40% of your monthly income.',
  },
];

export const metadata: Metadata = {
  title: `Best Personal Loans in India 2026 — Compare Interest Rates & Features`,
  description: `Compare the best personal loan interest rates from top 10 banks in India. HDFC, ICICI, SBI, Axis Bank rates starting from 10.25%. Detailed reviews, eligibility criteria, and application process.`,
  alternates: {
    canonical: `${SITE_URL}/personal-loan/best`,
  },
  openGraph: {
    title: 'Best Personal Loans in India 2026',
    description: 'Compare and find the best personal loan rates from top banks.',
    url: `${SITE_URL}/personal-loan/best`,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
  },
};

export default function BestPersonalLoansPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Personal Loan', href: '/personal-loan' },
    { label: 'Best Personal Loans', href: '/personal-loan/best' },
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />

        {/* Hero Section */}
        <section className="mb-12">
          <Badge className="mb-4">Personal Loan</Badge>
          <h1 className="text-text-primary text-4xl font-bold">
            Best Personal Loans in India 2026
          </h1>
          <p className="text-text-secondary mt-4 max-w-3xl text-lg">
            Compare personal loan interest rates, processing fees, and features from top 10 banks in
            India. Our comprehensive comparison helps you find the best loan for your financial
            needs with rates starting from 10.25% p.a.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#comparison-table">View Comparison</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/personal-loan/emi-calculator">EMI Calculator</Link>
            </Button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
              <p className="text-text-primary text-2xl font-bold">10.25%</p>
              <p className="text-text-secondary text-sm">Lowest Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Banknote className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
              <p className="text-text-primary text-2xl font-bold">₹50 Lakh</p>
              <p className="text-text-secondary text-sm">Max Loan Amount</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
              <p className="text-text-primary text-2xl font-bold">24 Hours</p>
              <p className="text-text-secondary text-sm">Fastest Disbursal</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
              <p className="text-text-primary text-2xl font-bold">10 Banks</p>
              <p className="text-text-secondary text-sm">Compared</p>
            </CardContent>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="mb-12" id="comparison-table">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Top 10 Personal Loans Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-bg-secondary border-b">
                  <th className="text-text-primary p-3 text-left font-semibold">Rank</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Bank</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Interest Rate</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Processing Fee</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Max Amount</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Tenure</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Disbursal</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Min CIBIL</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Rating</th>
                </tr>
              </thead>
              <tbody>
                {PERSONAL_LOANS.map((loan) => (
                  <tr key={loan.slug} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-bold text-emerald-600">#{loan.rank}</td>
                    <td className="text-text-primary p-3 font-medium">
                      <Link
                        href={`/personal-loan/bank/${loan.slug}`}
                        className="hover:text-emerald-600 hover:underline"
                      >
                        {loan.name.replace(' Personal Loan', '')}
                      </Link>
                    </td>
                    <td className="p-3 font-medium text-emerald-600">{loan.interestRate}</td>
                    <td className="p-3">{loan.processingFee}</td>
                    <td className="p-3 font-medium">{loan.maxAmount}</td>
                    <td className="p-3">{loan.tenure}</td>
                    <td className="p-3">{loan.disbursalTime}</td>
                    <td className="p-3">{loan.minCreditScore}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{loan.rating}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Detailed Reviews of Each Bank
          </h2>
          <div className="space-y-8">
            {PERSONAL_LOANS.map((loan) => (
              <Card key={loan.slug} className="overflow-hidden">
                <CardHeader className="bg-bg-secondary">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700">
                        {loan.rank}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{loan.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{loan.rating}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {loan.bestFor}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={loan.applyUrl} target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Key Details */}
                    <div className="space-y-3">
                      <h4 className="text-text-primary font-semibold">Key Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Interest Rate</span>
                          <span className="font-medium text-emerald-600">{loan.interestRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Processing Fee</span>
                          <span className="font-medium">{loan.processingFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Max Amount</span>
                          <span className="font-medium">{loan.maxAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Tenure</span>
                          <span className="font-medium">{loan.tenure}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Disbursal</span>
                          <span className="font-medium">{loan.disbursalTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Min Salary</span>
                          <span className="font-medium">{loan.minSalary}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Prepayment</span>
                          <span className="font-medium">{loan.prepaymentCharges}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pros */}
                    <div>
                      <h4 className="mb-3 font-semibold text-green-700">Pros</h4>
                      <ul className="space-y-2">
                        {loan.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="mb-3 font-semibold text-red-700">Cons</h4>
                      <ul className="space-y-2">
                        {loan.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm">
                            <span className="mt-0.5 h-4 w-4 shrink-0 text-center text-red-600">
                              -
                            </span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-6 border-t pt-6">
                    <h4 className="text-text-primary mb-3 font-semibold">Features</h4>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {loan.features.map((feature) => (
                        <div
                          key={feature}
                          className="text-text-secondary flex items-center gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Choose */}
        <section className="bg-bg-secondary mb-12 rounded-xl p-8">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            How to Choose the Best Personal Loan
          </h2>
          <div className="prose text-text-secondary max-w-none">
            <p>
              <strong>Step 1: Check Your Credit Score:</strong> Start by checking your CIBIL score.
              A score of 750 or above qualifies you for the best rates. If your score is below 700,
              work on improving it before applying. You can check your score for free through CIBIL,
              Experian, or fintech platforms.
            </p>
            <p>
              <strong>Step 2: Compare Interest Rates:</strong> Never settle for the first offer.
              Compare rates from at least 4-5 lenders. Use our comparison table above to identify
              banks that match your profile. Remember, the advertised rate is the starting rate —
              your actual rate depends on your credit score, income, and employer category.
            </p>
            <p>
              <strong>Step 3: Evaluate Total Cost:</strong> Look beyond the interest rate. Consider
              the processing fee, prepayment charges, and late payment penalties. A bank with a
              slightly higher interest rate but lower processing fee and zero prepayment charges may
              be more cost-effective.
            </p>
            <p>
              <strong>Step 4: Check Eligibility:</strong> Each bank has different eligibility
              criteria for income, employment type, and credit score. Apply only where you meet all
              criteria to avoid unnecessary credit inquiries that can lower your score.
            </p>
            <p>
              <strong>Step 5: Choose the Right Tenure:</strong> Opt for the shortest tenure you can
              afford. While longer tenure means lower EMIs, it significantly increases your total
              interest cost. For a ₹5 lakh loan at 11%, choosing 3 years over 5 years saves you
              approximately ₹60,000 in interest.
            </p>
            <p>
              <strong>Step 6: Negotiate:</strong> With your salary level and credit profile, there
              is always room to negotiate. Ask for a lower interest rate, reduced processing fee, or
              waiver of prepayment charges. Banks often have flexibility, especially for existing
              customers.
            </p>
          </div>
        </section>

        {/* Eligibility Quick Reference */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">Quick Eligibility Reference</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">For Salaried Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-text-secondary space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    Minimum age: 21 years | Maximum: 58 years
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    Minimum salary: ₹15,000 - ₹30,000 (varies by bank)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    Minimum 2 years total experience
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    CIBIL score: 650+ (750+ for best rates)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">For Self-Employed</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-text-secondary space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    Minimum age: 25 years | Maximum: 65 years
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    Business operational for 2-3+ years
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    Minimum annual income: ₹2-5 lakhs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    Regular ITR filing required
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <JsonLd schema={generateFAQSchema(faqs)} />
        <FAQAccordion faqs={faqs} />

        {/* Newsletter */}
        <div className="py-12">
          <NewsletterSignup />
        </div>
      </main>
    </>
  );
}
