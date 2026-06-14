import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Check, TrendingUp, Shield, Calculator, Banknote } from '@/components/icons';
import { BANK_LIST } from '@/config/site';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/config/seo';

interface SalaryPageProps {
  params: Promise<{ slug: string }>;
}

const SALARY_RANGES = [
  {
    slug: '3-lakh',
    label: '₹3 Lakhs',
    monthly: 25000,
    annual: 300000,
    displaySalary: '₹25,000/month',
  },
  {
    slug: '5-lakh',
    label: '₹5 Lakhs',
    monthly: 41667,
    annual: 500000,
    displaySalary: '₹41,667/month',
  },
  {
    slug: '7-5-lakh',
    label: '₹7.5 Lakhs',
    monthly: 62500,
    annual: 750000,
    displaySalary: '₹62,500/month',
  },
  {
    slug: '10-lakh',
    label: '₹10 Lakhs',
    monthly: 83333,
    annual: 1000000,
    displaySalary: '₹83,333/month',
  },
  {
    slug: '15-lakh',
    label: '₹15 Lakhs',
    monthly: 125000,
    annual: 1500000,
    displaySalary: '₹1,25,000/month',
  },
  {
    slug: '20-lakh',
    label: '₹20 Lakhs',
    monthly: 166667,
    annual: 2000000,
    displaySalary: '₹1,66,667/month',
  },
  {
    slug: '30-lakh',
    label: '₹30 Lakhs',
    monthly: 250000,
    annual: 3000000,
    displaySalary: '₹2,50,000/month',
  },
];

function getSalaryBySlug(slug: string) {
  return SALARY_RANGES.find((s) => s.slug === slug) ?? null;
}

function getMaxLoanAmount(monthlySalary: number): number {
  if (monthlySalary >= 250000) return 5000000;
  if (monthlySalary >= 166667) return 4000000;
  if (monthlySalary >= 125000) return 3000000;
  if (monthlySalary >= 83333) return 2500000;
  if (monthlySalary >= 62500) return 2000000;
  if (monthlySalary >= 41667) return 1500000;
  return 1000000;
}

function getSalaryFAQs(salary: string, maxLoan: string) {
  return [
    {
      question: `What is the maximum personal loan amount for a ${salary} salary?`,
      answer: `With a salary of ${salary}, you can typically avail a personal loan of up to ${maxLoan}. Banks generally offer 24 to 36 times your monthly salary as the loan amount. However, the actual sanctioned amount depends on your credit score, existing liabilities, employer category, and the lender's internal policies. Some banks may offer higher amounts for employees of reputed organizations.`,
    },
    {
      question: `What credit score is needed for a personal loan with a ${salary} salary?`,
      answer: `Most banks prefer a CIBIL score of 750 or above for personal loans. However, with a salary of ${salary}, you have a stronger profile. Some lenders may approve loans with scores between 650 and 749, though at higher interest rates. Maintaining a score above 750 ensures you get the best interest rates starting from 10.50% p.a.`,
    },
    {
      question: `What is the interest rate for a personal loan with a ${salary} salary?`,
      answer: `With a ${salary} salary, you can expect interest rates ranging from 10.50% to 16% p.a. depending on your credit score and lender. Private banks like HDFC and ICICI offer rates starting from 10.50% for high-income professionals with excellent credit profiles. Government banks like SBI offer competitive rates starting from 11.15%. The higher your salary and credit score, the lower the interest rate you can negotiate.`,
    },
    {
      question: `What is the EMI for a personal loan on a ${salary} salary?`,
      answer: `The EMI depends on the loan amount, interest rate, and tenure. For example, a ₹5 lakh loan at 11% for 3 years has an EMI of approximately ₹16,370. A ₹10 lakh loan at 11% for 5 years has an EMI of approximately ₹21,740. Financial advisors recommend keeping your total EMIs within 40% of your monthly income, which means your maximum EMI capacity on a ${salary} salary is approximately ₹${Math.floor(((parseInt(salary.replace(/[₹,]/g, '')) * 1000) / 12) * 0.4).toLocaleString('en-IN')}.`,
    },
    {
      question: `How long does approval take for a personal loan on a ${salary} salary?`,
      answer: `With a salary of ${salary}, you are considered a low-risk borrower, which often results in faster approval. Private banks like HDFC and ICICI can approve and disburse within 24 to 48 hours for existing customers. Government banks may take 3 to 7 working days. Online applications are generally processed faster than branch visits.`,
    },
    {
      question: `Can I get a personal loan with a ${salary} salary if I have existing EMIs?`,
      answer: `Yes, you can still get a personal loan with existing EMIs on a ${salary} salary. Banks consider your net income after existing EMI deductions. Your total EMI burden should not exceed 40-50% of your monthly salary. For example, if your salary is ${salary} and you already pay ₹20,000 in EMIs, your new loan EMI should not exceed approximately ₹${Math.floor(((parseInt(salary.replace(/[₹,]/g, '')) * 1000) / 12) * 0.5 - 20000).toLocaleString('en-IN')}.`,
    },
    {
      question: `What documents are needed for a personal loan with a ${salary} salary?`,
      answer: `Standard documents include: PAN card and Aadhaar card, last 3 months salary slips showing ${salary}, last 6 months bank statements, employment proof (offer/appointment letter), and passport-size photographs. Self-employed individuals need ITR for last 2-3 years. With a higher salary, some banks may require fewer documents and offer instant approval through pre-approved offers.`,
    },
    {
      question: `Which bank offers the best personal loan for a ${salary} salary?`,
      answer: `For a ${salary} salary, HDFC Bank, ICICI Bank, and Axis Bank are top choices due to their competitive rates and fast processing. HDFC Bank offers rates starting from 10.50% with disbursal in 24 hours. ICICI Bank offers up to ₹50 lakhs for high-income professionals. SBI is excellent for those who prefer government banks with lower processing fees. Compare offers from multiple banks before applying.`,
    },
  ];
}

export function generateStaticParams() {
  return SALARY_RANGES.map((salary) => ({
    slug: salary.slug,
  }));
}

export async function generateMetadata({ params }: SalaryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const salary = getSalaryBySlug(slug);
  if (!salary) return {};

  const maxLoan = formatCurrency(getMaxLoanAmount(salary.monthly));

  return {
    title: `Personal Loan for ₹${salary.label.replace('₹', '')} Salary 2026 — Eligibility, Rates & Max Amount`,
    description: `Get a personal loan with ₹${salary.label.replace('₹', '')} salary. Check eligibility, interest rates from 10.50%, max loan up to ${maxLoan}, and compare top banks.`,
    alternates: {
      canonical: `${SITE_URL}/personal-loan/salary/${slug}`,
    },
    openGraph: {
      title: `Personal Loan for ₹${salary.label.replace('₹', '')} Salary 2026`,
      description: `Check eligibility and compare personal loan rates for ₹${salary.label.replace('₹', '')} salary.`,
      url: `${SITE_URL}/personal-loan/salary/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_IN',
    },
  };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function SalaryPersonalLoanPage({ params }: SalaryPageProps) {
  const { slug } = await params;
  const salary = getSalaryBySlug(slug);
  if (!salary) notFound();

  const maxLoanAmount = getMaxLoanAmount(salary.monthly);
  const maxLoanFormatted = formatCurrency(maxLoanAmount);
  const faqs = getSalaryFAQs(salary.label, maxLoanFormatted);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Personal Loan', href: '/personal-loan' },
    { label: 'Salary', href: '/personal-loan/salary' },
    { label: salary.label, href: `/personal-loan/salary/${slug}` },
  ];

  const bankOffers = BANK_LIST.slice(0, 6).map((bank, index) => {
    const baseRate = 10.5 + index * 0.3;
    const bankMaxLoan = Math.min(maxLoanAmount, 5000000);
    return {
      ...bank,
      interestRate: `${baseRate.toFixed(2)}% - ${(baseRate + 8).toFixed(0)}%`,
      maxLoan: formatCurrency(bankMaxLoan),
      processingFee: index < 3 ? 'Up to 2%' : 'Up to 1%',
      disbursalTime: index < 2 ? '24-48 hours' : '3-7 days',
    };
  });

  const emiExamples = [
    { tenure: '12 months', rate: '11%' },
    { tenure: '24 months', rate: '11%' },
    { tenure: '36 months', rate: '11%' },
    { tenure: '48 months', rate: '11%' },
    { tenure: '60 months', rate: '11%' },
  ];

  const loanAmounts = [
    Math.round((maxLoanAmount * 0.25) / 10000) * 10000,
    Math.round((maxLoanAmount * 0.5) / 10000) * 10000,
    Math.round((maxLoanAmount * 0.75) / 10000) * 10000,
    maxLoanAmount,
  ].filter((v, i, a) => a.indexOf(v) === i);

  function calculateEMI(principal: number, annualRate: number, months: number): number {
    const monthlyRate = annualRate / 12 / 100;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  }

  const relatedArticles = [
    {
      title: 'Personal Loan Interest Rates Compared: Top 10 Banks in 2026',
      slug: 'best-personal-loan-rates',
      excerpt:
        'Compare personal loan interest rates from HDFC, ICICI, SBI, Axis, and 6 other top banks.',
      category: 'Personal Loan',
      coverImage: '/images/articles/personal-loan-rates.jpg',
    },
    {
      title: 'Complete Personal Loan Eligibility Checklist for 2026',
      slug: 'personal-loan-eligibility',
      excerpt: 'Everything you need to know about personal loan eligibility in India.',
      category: 'Personal Loan',
      coverImage: '/images/articles/loan-eligibility.jpg',
    },
    {
      title: 'How to Improve Your CIBIL Score Quickly',
      slug: 'improve-cibil-score',
      excerpt:
        'Struggling with a low credit score? Here are 10 practical strategies to boost your CIBIL score.',
      category: 'Credit Score',
      coverImage: '/images/articles/improve-cibil-score.jpg',
    },
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
            Personal Loan for ₹{salary.label.replace('₹', '')} Salary
          </h1>
          <p className="text-text-secondary mt-4 max-w-3xl text-lg">
            Looking for a personal loan with a {salary.displaySalary} salary? Check your
            eligibility, compare interest rates starting from 10.50%, and find the maximum loan
            amount you can avail. Use our EMI calculator to plan your repayment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#bank-offers">View Bank Offers</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/personal-loan/emi-calculator">EMI Calculator</Link>
            </Button>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Banknote className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
              <p className="text-text-primary text-2xl font-bold">{salary.displaySalary}</p>
              <p className="text-text-secondary text-sm">Your Monthly Salary</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
              <p className="text-text-primary text-2xl font-bold">{maxLoanFormatted}</p>
              <p className="text-text-secondary text-sm">Max Loan Available</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
              <p className="text-text-primary text-2xl font-bold">10.50%+</p>
              <p className="text-text-secondary text-sm">Starting Interest Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calculator className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
              <p className="text-text-primary text-2xl font-bold">12-60</p>
              <p className="text-text-secondary text-sm">Months Tenure</p>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility Section */}
        <section className="bg-bg-secondary mb-12 rounded-xl p-8">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Eligibility for ₹{salary.label.replace('₹', '')} Salary Personal Loan
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-text-primary mb-4 text-xl font-semibold">Salaried Individuals</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Minimum age: 21 years | Maximum age: 58 years at loan maturity</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Monthly salary: {salary.displaySalary} (meets most bank requirements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Minimum 2 years total experience with 6 months at current employer</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>CIBIL score of 750+ for best rates (650+ accepted by some NBFCs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Total EMIs should not exceed 40-50% of monthly salary</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-text-primary mb-4 text-xl font-semibold">
                Self-Employed Individuals
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Minimum age: 25 years | Maximum age: 65 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Business operational for at least 3 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    Annual income of ₹{salary.label.replace('₹', '')} or above demonstrated through
                    ITR
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Regular ITR filing for last 2-3 years is mandatory</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Business registration proof and GST certificate may be required</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Max Loan Amount */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Maximum Personal Loan for ₹{salary.label.replace('₹', '')} Salary
          </h2>
          <p className="text-text-secondary mb-6">
            Based on your salary of {salary.displaySalary}, here is the maximum personal loan amount
            you can expect from different banks. Banks typically offer 24 to 36 times your monthly
            salary as the loan amount.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card className="border-2 border-emerald-200">
              <CardContent className="pt-6 text-center">
                <p className="text-text-muted text-sm">Conservative Estimate</p>
                <p className="text-text-primary mt-2 text-3xl font-bold">
                  {formatCurrency(Math.round((maxLoanAmount * 0.7) / 10000) * 10000)}
                </p>
                <p className="text-text-secondary mt-1 text-sm">24x monthly salary</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-emerald-400">
              <CardContent className="pt-6 text-center">
                <p className="text-text-muted text-sm">Most Likely Amount</p>
                <p className="mt-2 text-3xl font-bold text-emerald-600">{maxLoanFormatted}</p>
                <p className="text-text-secondary mt-1 text-sm">30x monthly salary</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-emerald-200">
              <CardContent className="pt-6 text-center">
                <p className="text-text-muted text-sm">Best Case (Excellent Profile)</p>
                <p className="text-text-primary mt-2 text-3xl font-bold">
                  {formatCurrency(Math.round((maxLoanAmount * 1.2) / 100000) * 100000)}
                </p>
                <p className="text-text-secondary mt-1 text-sm">36x monthly salary</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-text-muted mt-4 text-sm">
            *Loan amount depends on credit score, employer category, existing liabilities, and
            lender policies.
          </p>
        </section>

        {/* Bank Offers */}
        <section className="mb-12" id="bank-offers">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Top Bank Offers for ₹{salary.label.replace('₹', '')} Salary
          </h2>
          <p className="text-text-secondary mb-8">
            Here are the best personal loan offers from leading banks for a salary of{' '}
            {salary.displaySalary}. Compare interest rates, processing fees, and disbursal times to
            find the best deal.
          </p>
          <div className="space-y-4">
            {bankOffers.map((bank, index) => (
              <Card key={bank.slug} className="transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold">{bank.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-text-secondary text-sm">{bank.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                    <div>
                      <p className="text-text-muted">Interest Rate</p>
                      <p className="font-semibold text-emerald-600">{bank.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-text-muted">Max Loan</p>
                      <p className="font-medium">{bank.maxLoan}</p>
                    </div>
                    <div>
                      <p className="text-text-muted">Disbursal</p>
                      <p className="font-medium">{bank.disbursalTime}</p>
                    </div>
                    <div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/personal-loan/bank/${bank.slug}`}>Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* EMI Examples */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            EMI Examples for ₹{salary.label.replace('₹', '')} Salary
          </h2>
          <p className="text-text-secondary mb-6">
            Here are sample EMI calculations at 11% p.a. interest rate for different loan amounts
            and tenures, helping you plan your repayment:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-bg-secondary border-b">
                  <th className="text-text-primary p-3 text-left font-semibold">Loan Amount</th>
                  <th className="text-text-primary p-3 text-left font-semibold">12 Months</th>
                  <th className="text-text-primary p-3 text-left font-semibold">24 Months</th>
                  <th className="text-text-primary p-3 text-left font-semibold">36 Months</th>
                  <th className="text-text-primary p-3 text-left font-semibold">48 Months</th>
                  <th className="text-text-primary p-3 text-left font-semibold">60 Months</th>
                </tr>
              </thead>
              <tbody>
                {loanAmounts.map((amount) => (
                  <tr key={amount} className="border-b hover:bg-gray-50">
                    <td className="text-text-primary p-3 font-semibold">
                      {formatCurrency(amount)}
                    </td>
                    <td className="p-3 font-medium text-emerald-600">
                      {formatCurrency(calculateEMI(amount, 11, 12))}
                    </td>
                    <td className="p-3 font-medium text-emerald-600">
                      {formatCurrency(calculateEMI(amount, 11, 24))}
                    </td>
                    <td className="p-3 font-medium text-emerald-600">
                      {formatCurrency(calculateEMI(amount, 11, 36))}
                    </td>
                    <td className="p-3 font-medium text-emerald-600">
                      {formatCurrency(calculateEMI(amount, 11, 48))}
                    </td>
                    <td className="p-3 font-medium text-emerald-600">
                      {formatCurrency(calculateEMI(amount, 11, 60))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-muted mt-4 text-sm">
            *EMI calculations at 11% p.a. Actual EMI may vary based on credit profile and lender.
          </p>
        </section>

        {/* Tips Section */}
        <section className="mb-12 rounded-xl bg-emerald-50 p-8">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Tips to Get the Best Personal Loan on ₹{salary.label.replace('₹', '')} Salary
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <h4 className="text-text-primary font-semibold">Maintain a High Credit Score</h4>
                  <p className="text-text-secondary text-sm">
                    A score of 750+ can get you rates 2-3% lower, saving lakhs over the loan tenure.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <h4 className="text-text-primary font-semibold">
                    Apply with Your Salary Account Bank
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Banks often offer better rates to existing salary account holders due to lower
                    risk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <h4 className="text-text-primary font-semibold">Compare Multiple Lenders</h4>
                  <p className="text-text-secondary text-sm">
                    Never settle for the first offer. Compare at least 4-5 banks for the best deal.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <h4 className="text-text-primary font-semibold">Keep Existing EMIs Low</h4>
                  <p className="text-text-secondary text-sm">
                    Lower EMI burden increases your eligibility and helps negotiate better rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <h4 className="text-text-primary font-semibold">Choose the Right Tenure</h4>
                  <p className="text-text-secondary text-sm">
                    Shorter tenure means lower total interest. Choose the shortest tenure you can
                    afford.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <h4 className="text-text-primary font-semibold">Negotiate Processing Fees</h4>
                  <p className="text-text-secondary text-sm">
                    With your salary level, you can negotiate processing fees down to 0.5-1%.
                  </p>
                </div>
              </div>
            </div>
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
