import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { RelatedArticles } from '@/components/sections/RelatedArticles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Check, MapPin, TrendingUp, Shield } from '@/components/icons';
import { CITY_LIST, BANK_LIST } from '@/config/site';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/config/seo';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

function getCityBySlug(slug: string) {
  return CITY_LIST.find((c) => c.slug === slug) ?? null;
}

function getCityFAQs(cityName: string) {
  return [
    {
      question: `What is the minimum salary required for a personal loan in ${cityName}?`,
      answer: `In ${cityName}, most banks require a minimum monthly salary of Rs. 25,000 to Rs. 35,000 for salaried individuals. However, some banks like SBI and Bank of Baroda may accept Rs. 20,000 for existing customers. Self-employed professionals need to demonstrate an annual income of at least Rs. 3 to 5 lakhs. The exact requirement varies by lender — private banks like HDFC and ICICI typically have higher income thresholds compared to public sector banks.`,
    },
    {
      question: `Which banks offer the best personal loan rates in ${cityName}?`,
      answer: `HDFC Bank, ICICI Bank, and Axis Bank are among the top lenders in ${cityName} offering competitive personal loan rates starting from 10.50% to 11.00% p.a. SBI and Bank of Baroda also have strong presence in ${cityName} with rates starting from 11.15%. The best rate for you depends on your credit score, income level, employer category, and existing banking relationship.`,
    },
    {
      question: `How long does personal loan approval take in ${cityName}?`,
      answer: `Personal loan approval in ${cityName} typically takes 2 to 5 working days. Private banks like HDFC and ICICI can approve and disburse within 48 hours for existing customers with pre-approved offers. Public sector banks like SBI may take 3 to 7 working days due to additional documentation requirements. Online applications are generally processed faster than branch applications in ${cityName}.`,
    },
    {
      question: `What documents are needed for a personal loan in ${cityName}?`,
      answer: `The standard documents required for a personal loan in ${cityName} include: Aadhaar card and PAN card for identity and address proof, last 3 months salary slips, last 6 months bank statements, and employment proof (offer/appointment letter). Self-employed individuals additionally need ITR for the last 2 to 3 years, P&L statement, and business registration proof. Some lenders in ${cityName} offer doorstep document collection for convenience.`,
    },
    {
      question: `Can I get a personal loan in ${cityName} with a low credit score?`,
      answer: `While most banks in ${cityName} prefer a credit score of 750 or above, some NBFCs and fintech lenders offer personal loans to applicants with scores between 600 and 700. However, the interest rates are significantly higher, ranging from 18% to 36% p.a. It is advisable to improve your credit score to at least 700 before applying for better rates and terms in ${cityName}.`,
    },
    {
      question: `What is the maximum personal loan amount available in ${cityName}?`,
      answer: `In ${cityName}, the maximum personal loan amount varies by lender and your profile. Banks typically offer up to 24 times your monthly salary. For high-income professionals, loan amounts can go up to Rs. 40 to 50 lakhs. HDFC Bank offers up to Rs. 40 lakhs, ICICI Bank up to Rs. 50 lakhs, and SBI up to Rs. 20 lakhs. The actual amount sanctioned depends on your income, credit score, existing liabilities, and employer category.`,
    },
    {
      question: `Are there any special personal loan schemes for government employees in ${cityName}?`,
      answer: `Yes, several banks in ${cityName} offer special personal loan schemes for government employees. SBI, PNB, and Bank of Baroda provide preferential rates starting from 10.75% to 11.50% for central and state government employees. These schemes often come with lower processing fees, flexible repayment options, and faster approval. Government employees also benefit from higher loan eligibility due to job security.`,
    },
    {
      question: `Can I transfer my existing personal loan to a bank in ${cityName} for a lower rate?`,
      answer: `Yes, personal loan balance transfer is available in ${cityName}. You can transfer your existing high-interest personal loan to another lender offering a lower rate. Banks like HDFC, ICICI, and Axis Bank offer balance transfer facilities at rates starting from 10.50% p.a. The process involves transferring the outstanding balance to the new lender and closing the existing loan. Some lenders also offer additional top-up amount during the transfer.`,
    },
  ];
}

const CITY_BANK_DATA: Record<
  string,
  { banks: string[]; avgRate: string; specialSchemes: string[]; topLender: string }
> = {
  mumbai: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Mahindra Bank'],
    avgRate: '10.75% - 18.00%',
    specialSchemes: [
      'Salary account special rates at HDFC and ICICI',
      'Government employee schemes at SBI and PNB',
      'Quick disbursal for IT professionals',
    ],
    topLender: 'HDFC Bank',
  },
  delhi: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'PNB'],
    avgRate: '10.50% - 17.50%',
    specialSchemes: [
      'Central government employee benefits at SBI and PNB',
      'Metro city premium rates at HDFC',
      'Government PSU employee special schemes',
    ],
    topLender: 'ICICI Bank',
  },
  bangalore: {
    banks: ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank', 'IndusInd Bank'],
    avgRate: '10.50% - 18.50%',
    specialSchemes: [
      'IT sector employee special rates',
      'Startup employee loan programs',
      'Tech company tie-up schemes at HDFC',
    ],
    topLender: 'HDFC Bank',
  },
  hyderabad: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Bank of Baroda'],
    avgRate: '10.75% - 18.00%',
    specialSchemes: [
      'IT corridor employee benefits at HDFC and ICICI',
      'Government employee special rates at SBI',
      'Pharma sector employee schemes',
    ],
    topLender: 'ICICI Bank',
  },
  chennai: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Canara Bank'],
    avgRate: '10.90% - 17.50%',
    specialSchemes: [
      'Manufacturing sector employee benefits',
      'Government employee special rates at SBI',
      'Automobile industry tie-up schemes',
    ],
    topLender: 'SBI',
  },
  kolkata: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'PNB'],
    avgRate: '11.00% - 18.00%',
    specialSchemes: [
      'Small business owner schemes',
      'Government employee benefits at SBI',
      'Special rates for government hospital staff',
    ],
    topLender: 'SBI',
  },
  pune: {
    banks: ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank', 'SBI'],
    avgRate: '10.75% - 18.00%',
    specialSchemes: [
      'IT and manufacturing employee benefits',
      'Pune metro special rates',
      'Education sector employee schemes',
    ],
    topLender: 'HDFC Bank',
  },
  ahmedabad: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Bank of Baroda', 'PNB'],
    avgRate: '10.90% - 17.50%',
    specialSchemes: [
      'Business community special rates',
      'Textile sector employee benefits',
      'Government employee schemes at SBI',
    ],
    topLender: 'Bank of Baroda',
  },
  jaipur: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'PNB', 'Bank of Baroda'],
    avgRate: '11.00% - 18.00%',
    specialSchemes: [
      'Handicraft business owner schemes',
      'Government employee benefits',
      'Special rates for small traders',
    ],
    topLender: 'SBI',
  },
  lucknow: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'PNB', 'Bank of Baroda'],
    avgRate: '11.00% - 18.50%',
    specialSchemes: [
      'Government employee special rates at SBI and PNB',
      'Small and medium enterprise benefits',
      'Agriculture-linked business schemes',
    ],
    topLender: 'SBI',
  },
  chandigarh: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'PNB', 'Axis Bank'],
    avgRate: '10.75% - 17.00%',
    specialSchemes: [
      'Government sector employee benefits',
      'Tricity resident special rates',
      'Punjab government employee schemes at PNB',
    ],
    topLender: 'ICICI Bank',
  },
  bhopal: {
    banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'PNB', 'Bank of Baroda'],
    avgRate: '11.00% - 18.00%',
    specialSchemes: [
      'Government employee special rates at SBI',
      'State government employee benefits',
      'Small business owner schemes',
    ],
    topLender: 'SBI',
  },
};

export function generateStaticParams() {
  return CITY_LIST.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const cityData = CITY_BANK_DATA[slug] || CITY_BANK_DATA.mumbai;

  return {
    title: `Personal Loans in ${city.name} 2026 — Best Interest Rates & Top Banks`,
    description: `Compare personal loan interest rates in ${city.name}. Find the best offers from ${cityData.banks.slice(0, 3).join(', ')} and more. Starting from ${cityData.avgRate.split(' - ')[0]} p.a.`,
    alternates: {
      canonical: `${SITE_URL}/personal-loan/city/${slug}`,
    },
    openGraph: {
      title: `Personal Loans in ${city.name} 2026`,
      description: `Find the best personal loan rates in ${city.name}. Compare offers from top banks.`,
      url: `${SITE_URL}/personal-loan/city/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_IN',
    },
  };
}

export default async function CityPersonalLoanPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const cityData = CITY_BANK_DATA[slug] || CITY_BANK_DATA.mumbai;
  const faqs = getCityFAQs(city.name);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Personal Loan', href: '/personal-loan' },
    { label: 'City', href: '/personal-loan/city' },
    { label: city.name, href: `/personal-loan/city/${slug}` },
  ];

  const topBanks = BANK_LIST.slice(0, 5).map((bank) => ({
    ...bank,
    cityRate: `${(10.5 + BANK_LIST.indexOf(bank) * 0.3).toFixed(2)}% - ${(18 + BANK_LIST.indexOf(bank) * 0.5).toFixed(0)}%`,
    disbursalTime: BANK_LIST.indexOf(bank) < 2 ? '24-48 hours' : '3-7 days',
    maxLoan: BANK_LIST.indexOf(bank) < 2 ? '₹40 Lakhs' : '₹20 Lakhs',
  }));

  const relatedArticles = [
    {
      title: `Personal Loan Interest Rates in ${city.name}: Complete Guide`,
      slug: `personal-loan-rates-${slug}`,
      excerpt: `Compare personal loan interest rates from all major banks in ${city.name}. Updated for 2026 with latest offers and promotions.`,
      category: 'Personal Loan',
      coverImage: '/images/articles/personal-loan-rates.jpg',
    },
    {
      title: `Best Credit Cards Available in ${city.name}`,
      slug: `best-credit-cards-${slug}`,
      excerpt: `Discover the best credit cards for ${city.name} residents. Cashback, travel, and rewards cards tailored for local spending patterns.`,
      category: 'Credit Cards',
      coverImage: '/images/articles/cashback-cards.jpg',
    },
    {
      title: `How to Improve Your Credit Score in ${city.name}`,
      slug: `improve-credit-score-${slug}`,
      excerpt: `Practical tips to improve your CIBIL score in ${city.name}. Local financial advisors share strategies that work.`,
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
          <div className="text-text-secondary flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>
              {city.name}, {city.state}
            </span>
          </div>
          <Badge className="mt-2 mb-4">Personal Loan</Badge>
          <h1 className="text-text-primary text-4xl font-bold">Personal Loans in {city.name}</h1>
          <p className="text-text-secondary mt-4 max-w-3xl text-lg">
            Compare personal loan interest rates offered by top banks in {city.name}. Find the best
            rates starting from {cityData.avgRate.split(' - ')[0]} for salaried and self-employed
            individuals.
            {city.name} residents can avail personal loans ranging from ₹50,000 to ₹50 lakhs with
            flexible repayment tenures of 12 to 60 months.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#compare-rates">Compare Rates</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/personal-loan/emi-calculator">EMI Calculator</Link>
            </Button>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            {
              label: 'Starting Interest Rate',
              value: cityData.avgRate.split(' - ')[0],
              icon: TrendingUp,
            },
            { label: 'Top Banks', value: `${cityData.banks.length}+`, icon: Shield },
            { label: 'Max Loan Amount', value: '₹50 Lakhs', icon: Star },
            { label: 'Quick Disbursal', value: '24 Hours', icon: Check },
          ].map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-emerald-600" />
                <p className="text-text-primary text-2xl font-bold">{stat.value}</p>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Detailed Content */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Personal Loan Market in {city.name}
          </h2>
          <div className="prose text-text-secondary max-w-none">
            <p>
              {city.name} is one of the major financial hubs in India, home to a wide range of
              banking institutions and NBFCs offering personal loans at competitive rates. Whether
              you are a salaried professional working in the IT corridor, a government employee, or
              a self-employed business owner, {city.name} has numerous personal loan options
              tailored to your specific needs.
            </p>
            <p>
              The personal loan market in {city.name} is highly competitive, with both private and
              public sector banks vying for customers. This competition benefits borrowers as
              lenders offer lower interest rates, reduced processing fees, and faster disbursal
              times. The average personal loan interest rate in {city.name} ranges from{' '}
              {cityData.avgRate}, which is comparable to other major metros in India.
            </p>
            <p>
              One of the key advantages of availing a personal loan in {city.name} is the presence
              of major bank headquarters and regional offices. This means faster processing, better
              customer service, and often preferential rates for residents. Many banks have
              dedicated loan centers in {city.name} that specialize in quick-processing personal
              loan products.
            </p>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="bg-bg-secondary mb-12 rounded-xl p-8">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Personal Loan Eligibility in {city.name}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-text-primary mb-4 text-xl font-semibold">
                For Salaried Individuals
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Minimum age: 21 years | Maximum age: 58 years at loan maturity</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    Minimum monthly income: ₹25,000 in {city.name} (₹30,000 for IT/MNC employees)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    Minimum 2 years of total work experience with 6 months at current employer
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    CIBIL score of 750+ preferred (650+ accepted by some NBFCs at higher rates)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Must have a salary account in any scheduled commercial bank</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-text-primary mb-4 text-xl font-semibold">
                For Self-Employed Individuals
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Minimum age: 25 years | Maximum age: 65 years at loan maturity</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Business operational for at least 3 years in {city.name}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Minimum annual turnover of ₹10-15 lakhs depending on the lender</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Regular ITR filing for the last 2-3 years is mandatory</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Business registration proof and GST registration may be required</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Top Banks Section */}
        <section className="mb-12" id="compare-rates">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Top Banks for Personal Loans in {city.name}
          </h2>
          <p className="text-text-secondary mb-8">
            Here are the leading banks offering personal loans in {city.name}, ranked by interest
            rates, processing fees, customer service, and overall value. {cityData.topLender} is
            currently the top-rated lender in {city.name} for personal loans.
          </p>
          <div className="space-y-4">
            {topBanks.map((bank, index) => (
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
                      <p className="font-semibold text-emerald-600">{bank.cityRate}</p>
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

        {/* Interest Rates Table */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Personal Loan Interest Rates in {city.name} — Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-bg-secondary border-b">
                  <th className="text-text-primary p-3 text-left font-semibold">Bank</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Interest Rate</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Processing Fee</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Min Salary</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Max Amount</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Min CIBIL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'HDFC Bank',
                    rate: '10.50% - 21.00%',
                    fee: 'Up to 2.5%',
                    salary: '₹25,000',
                    amount: '₹40 Lakhs',
                    cibil: '750',
                  },
                  {
                    name: 'ICICI Bank',
                    rate: '10.75% - 19.00%',
                    fee: 'Up to 2%',
                    salary: '₹30,000',
                    amount: '₹50 Lakhs',
                    cibil: '750',
                  },
                  {
                    name: 'SBI',
                    rate: '11.15% - 16.00%',
                    fee: 'Up to 1%',
                    salary: '₹15,000',
                    amount: '₹20 Lakhs',
                    cibil: '700',
                  },
                  {
                    name: 'Axis Bank',
                    rate: '10.49% - 20.00%',
                    fee: 'Up to 2%',
                    salary: '₹25,000',
                    amount: '₹40 Lakhs',
                    cibil: '750',
                  },
                  {
                    name: 'Kotak Mahindra',
                    rate: '10.99% - 20.50%',
                    fee: 'Up to 2%',
                    salary: '₹25,000',
                    amount: '₹25 Lakhs',
                    cibil: '750',
                  },
                  {
                    name: 'PNB',
                    rate: '11.15% - 16.50%',
                    fee: 'Up to 1%',
                    salary: '₹15,000',
                    amount: '₹10 Lakhs',
                    cibil: '700',
                  },
                  {
                    name: 'Bank of Baroda',
                    rate: '11.35% - 17.00%',
                    fee: 'Up to 1.5%',
                    salary: '₹20,000',
                    amount: '₹20 Lakhs',
                    cibil: '700',
                  },
                  {
                    name: 'IndusInd Bank',
                    rate: '10.75% - 20.00%',
                    fee: 'Up to 2.5%',
                    salary: '₹30,000',
                    amount: '₹50 Lakhs',
                    cibil: '750',
                  },
                ].map((row) => (
                  <tr key={row.name} className="border-b hover:bg-gray-50">
                    <td className="text-text-primary p-3 font-medium">{row.name}</td>
                    <td className="p-3 font-medium text-emerald-600">{row.rate}</td>
                    <td className="p-3">{row.fee}</td>
                    <td className="p-3">{row.salary}</td>
                    <td className="p-3">{row.amount}</td>
                    <td className="p-3">{row.cibil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* City-Specific Benefits */}
        <section className="mb-12 rounded-xl bg-emerald-50 p-8">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Why Choose a Personal Loan in {city.name}?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cityData.specialSchemes.map((scheme, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <Check className="mb-2 h-6 w-6 text-emerald-600" />
                  <p className="text-text-secondary">{scheme}</p>
                </CardContent>
              </Card>
            ))}
            <Card>
              <CardContent className="pt-6">
                <Shield className="mb-2 h-6 w-6 text-emerald-600" />
                <p className="text-text-secondary">
                  RBI-regulated banks ensure transparent lending practices and consumer protection
                  for all {city.name} residents
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="mb-2 h-6 w-6 text-emerald-600" />
                <p className="text-text-secondary">
                  {city.name} has one of the highest personal loan disbursement volumes in India,
                  ensuring competitive rates
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Documents Required */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Documents Required for Personal Loan in {city.name}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-text-primary mb-4 text-xl font-semibold">
                For Salaried Employees
              </h3>
              <ul className="text-text-secondary space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  PAN Card and Aadhaar Card (Identity & Address Proof)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  Last 3 months salary slips
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  Last 6 months bank statements showing salary credits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  Employment proof (offer/appointment letter)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  Passport-size photographs
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-text-primary mb-4 text-xl font-semibold">For Self-Employed</h3>
              <ul className="text-text-secondary space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  PAN Card and Aadhaar Card
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  ITR for last 2-3 years with computation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  Last 6 months business bank statements
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  P&L statement and Balance Sheet (audited by CA)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  Business registration proof / GST certificate
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* EMI Examples */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Personal Loan EMI Examples for {city.name}
          </h2>
          <p className="text-text-secondary mb-6">
            Here are sample EMI calculations for a personal loan in {city.name} at an interest rate
            of 11% p.a. across different loan amounts and tenures:
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
                {[
                  { amount: '₹1 Lakh', emis: ['₹8,885', '₹4,661', '₹3,274', '₹2,584', '₹2,174'] },
                  { amount: '₹2 Lakhs', emis: ['₹17,770', '₹9,322', '₹6,548', '₹5,168', '₹4,348'] },
                  {
                    amount: '₹3 Lakhs',
                    emis: ['₹26,655', '₹13,983', '₹9,822', '₹7,752', '₹6,522'],
                  },
                  {
                    amount: '₹5 Lakhs',
                    emis: ['₹44,425', '₹23,305', '₹16,370', '₹12,920', '₹10,870'],
                  },
                  {
                    amount: '₹10 Lakhs',
                    emis: ['₹88,850', '₹46,610', '₹32,740', '₹25,840', '₹21,740'],
                  },
                ].map((row) => (
                  <tr key={row.amount} className="border-b hover:bg-gray-50">
                    <td className="text-text-primary p-3 font-semibold">{row.amount}</td>
                    {row.emis.map((emi, i) => (
                      <td key={i} className="p-3 font-medium text-emerald-600">
                        {emi}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-muted mt-4 text-sm">
            *EMI calculations are approximate at 11% p.a. Actual EMI may vary based on your credit
            profile and lender.
          </p>
        </section>

        {/* FAQ Section */}
        <JsonLd schema={generateFAQSchema(faqs)} />
        <FAQAccordion faqs={faqs} />

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />

        {/* Newsletter */}
        <div className="py-12">
          <NewsletterSignup />
        </div>
      </main>
    </>
  );
}
