import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { RelatedArticles } from '@/components/sections/RelatedArticles';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/config/seo';
import { EMICalculator } from '@/components/calculators/EMICalculator';
import { getArticlesByCategory, getFAQsByCategory } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Personal Loan EMI Calculator — Calculate Monthly EMI Online Free',
  description:
    'Calculate your personal loan EMI instantly with our free online calculator. Adjust loan amount, interest rate and tenure to see your monthly payments.',
  alternates: {
    canonical: `${SITE_URL}/tools/emi-calculator`,
  },
  openGraph: {
    title: 'EMI Calculator — Free Online Tool',
    description: 'Calculate your loan EMI with our free calculator tool.',
    url: `${SITE_URL}/tools/emi-calculator`,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Tools', href: '/tools' },
  { label: 'EMI Calculator', href: '/tools/emi-calculator' },
];

export default async function EMICalculatorPage() {
  const articles = await getArticlesByCategory('personal-loan');
  const faqs = await getFAQsByCategory('personal-loan');

  const emiFaqs = [
    {
      question: 'What is an EMI?',
      answer:
        'EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender on a specified date each month. EMIs include both principal and interest components, paid over a fixed tenure until the loan is fully repaid.',
    },
    {
      question: 'How is EMI calculated?',
      answer:
        'EMI is calculated using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1), where P is the principal loan amount, r is the monthly interest rate, and n is the number of monthly installments. Our calculator does this math for you instantly.',
    },
    {
      question: 'Should I choose a longer tenure to reduce EMI?',
      answer:
        'While a longer tenure reduces your monthly EMI, it increases the total interest you pay over the life of the loan. For example, a ₹10 lakh loan at 10% for 5 years costs ₹2.75 lakhs in interest, while the same loan for 10 years costs ₹6 lakhs. Choose the shortest tenure you can comfortably afford.',
    },
    {
      question: 'Can I prepay my personal loan?',
      answer:
        'Most banks allow prepayment of personal loans, but may charge a prepayment penalty of 2% to 5% of the outstanding amount. Check your loan agreement for specific terms. Prepaying even one extra EMI per year can significantly reduce your total interest cost.',
    },
    {
      question: 'Does EMI change over time?',
      answer:
        'For fixed-rate loans, the EMI remains constant throughout the tenure. For floating-rate loans, the EMI may change when the base rate is revised by the RBI or the lender. Some lenders offer step-up EMIs that increase periodically.',
    },
  ];

  const relatedForComponent = articles.slice(0, 3).map((a) => ({
    title: a.title,
    slug: a.slug,
    excerpt: a.excerpt,
    category: a.category.name,
    coverImage: a.coverImage,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-text-primary mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              EMI Calculator
            </h1>
            <p className="text-text-secondary mt-4 max-w-2xl text-lg">
              Calculate your personal loan EMI instantly. Adjust loan amount, interest rate, and
              tenure to see your monthly payments and total interest cost.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <EMICalculator />
        </section>

        <section className="mx-auto max-w-4xl px-4 py-8">
          <FAQAccordion faqs={emiFaqs} />
        </section>

        {relatedForComponent.length > 0 && (
          <div className="mx-auto max-w-6xl px-4 py-8">
            <RelatedArticles articles={relatedForComponent} />
          </div>
        )}

        <div className="mx-auto max-w-4xl px-4 py-8">
          <NewsletterSignup />
        </div>
      </main>

      <JsonLd
        schema={generateFAQSchema(
          faqs.length > 0
            ? faqs
            : emiFaqs.map((f, i) => ({
                id: `emi-faq-${i}`,
                question: f.question,
                answer: f.answer,
                category: 'personal-loan',
                articleId: null,
                order: i + 1,
                createdAt: new Date(),
                updatedAt: new Date(),
              }))
        )}
      />
      <JsonLd schema={generateBreadcrumbSchema(breadcrumbItems)} />
    </div>
  );
}
