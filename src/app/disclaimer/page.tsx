import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Disclaimer | ${SITE_NAME}`,
  description: `Read the disclaimer for ${SITE_NAME}. Important information about financial advice, content accuracy, and affiliate relationships.`,
  openGraph: {
    title: `Disclaimer | ${SITE_NAME}`,
    description: 'Important disclaimers',
    url: `${SITE_URL}/disclaimer`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function DisclaimerPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose prose-gray max-w-none">
          <h1 className="text-text-primary text-4xl font-bold">Disclaimer</h1>
          <p className="text-text-secondary">Last updated: June 9, 2026</p>

          <p>
            The information provided on {SITE_NAME} ({SITE_URL}) is for general informational and
            educational purposes only. All content is published in good faith and for general
            information purposes. {SITE_NAME} makes no warranties about the completeness,
            reliability, or accuracy of this information.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Financial Disclaimer</h2>
          <p>
            <strong>
              {SITE_NAME} is not a bank, NBFC, financial advisor, or licensed investment
              professional.
            </strong>{' '}
            We do not provide personalized financial advice, tax advice, or investment
            recommendations. The content on this website is not a substitute for professional
            financial advice.
          </p>
          <p>
            Any financial decisions you make based on the information provided on this site are at
            your own risk. We strongly recommend consulting with a certified financial planner (CFP)
            or registered investment advisor before making any financial decisions.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Content Accuracy</h2>
          <p>
            While we strive to keep the information on our website up-to-date and accurate, we make
            no representations or warranties of any kind about the completeness, accuracy,
            reliability, or availability of the information, products, services, or related graphics
            contained on the website.
          </p>
          <p>
            Financial products, interest rates, fees, and terms are subject to change without
            notice. Always verify the latest information directly from the bank or financial
            institution before making any decisions.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Affiliate Disclosure</h2>
          <p>
            {SITE_NAME} may participate in affiliate marketing programs. This means we may earn
            commissions on products or services purchased through our links, at no additional cost
            to you. This helps us maintain and improve our free content.
          </p>
          <p>
            Our editorial opinions and recommendations are not influenced by affiliate partnerships.
            We only recommend products and services that we genuinely believe provide value to our
            readers. For more details, please read our{' '}
            <a href="/affiliate-disclosure" className="text-primary hover:underline">
              Affiliate Disclosure
            </a>
            .
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Investment Risk Disclaimer</h2>
          <p>
            All investments carry risk, including the potential loss of principal. Past performance
            of any investment or financial product is not indicative of future results. The
            information on this website should not be construed as investment advice.
          </p>
          <p>
            We do not guarantee any specific returns or outcomes from following any advice or
            information provided on this website. Market conditions, economic factors, and
            individual circumstances can significantly affect financial outcomes.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">External Links</h2>
          <p>
            Our website may contain links to external websites that are not operated by us. We have
            no control over the content and practices of these sites and cannot accept
            responsibility for their privacy policies or content.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Professional Advice</h2>
          <p>
            The information on this website is not a substitute for professional advice. You should
            consult with qualified professionals regarding your specific situation before making any
            financial, legal, or tax-related decisions.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Consent</h2>
          <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
        </article>
      </main>
    </>
  );
}
