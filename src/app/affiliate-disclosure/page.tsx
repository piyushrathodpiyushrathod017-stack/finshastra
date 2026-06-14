import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Affiliate Disclosure | ${SITE_NAME}`,
  description: `Learn how ${SITE_NAME} earns through affiliate partnerships. Our commitment to transparency and editorial independence.`,
  openGraph: {
    title: `Affiliate Disclosure | ${SITE_NAME}`,
    description: 'Our affiliate disclosure',
    url: `${SITE_URL}/affiliate-disclosure`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function AffiliateDisclosurePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  ];

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose prose-gray max-w-none">
          <h1 className="text-text-primary text-4xl font-bold">Affiliate Disclosure</h1>
          <p className="text-text-secondary">Last updated: June 9, 2026</p>

          <p>
            {SITE_NAME} is committed to transparency with our readers. This disclosure explains how
            we earn revenue through affiliate partnerships and how it affects the content you see on
            our website.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">What Are Affiliate Links?</h2>
          <p>
            Affiliate links are special URLs that contain a tracking code. When you click on an
            affiliate link and make a purchase or sign up for a service, we may earn a commission
            from the partner. This comes at no additional cost to you — the price you pay is the
            same whether you use our link or go directly to the provider.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">How We Earn Revenue</h2>
          <p>{SITE_NAME} earns revenue through:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>
              Affiliate commissions from financial product referrals (credit cards, personal loans,
              insurance)
            </li>
            <li>Display advertisements</li>
            <li> Sponsored content (clearly labeled)</li>
          </ul>
          <p>
            These revenue streams help us maintain the website, produce high-quality content, and
            keep our services free for all users.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Our Affiliate Partners</h2>
          <p>
            We may earn commissions from partnerships with financial institutions including but not
            limited to:
          </p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Banks and NBFCs (HDFC, ICICI, SBI, Axis, and others)</li>
            <li>Credit card providers</li>
            <li>Insurance companies</li>
            <li>Investment platforms</li>
            <li>Financial service providers</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Editorial Independence</h2>
          <p>
            <strong>Our editorial content is not influenced by affiliate relationships.</strong> We
            maintain strict editorial independence and only recommend products and services based on
            merit, research, and genuine value to our readers.
          </p>
          <p>Our team follows a rigorous review process that includes:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>In-depth research and comparison</li>
            <li>Analysis of fees, features, and customer reviews</li>
            <li>Expert opinions and industry insights</li>
            <li>Regular updates to keep information current</li>
          </ul>
          <p>
            Financial products are ranked and rated objectively. No partner can pay for a higher
            ranking or positive review.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">What This Means for You</h2>
          <p>
            When you click on an affiliate link and sign up for a financial product, you are
            supporting {SITE_NAME} at no extra cost. This helps us continue providing free,
            high-quality financial content to millions of users across India.
          </p>
          <p>
            We deeply appreciate your trust and support. If you ever have concerns about our
            affiliate relationships, please contact us at transparency@finshastra.in.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">FTC Compliance</h2>
          <p>
            This disclosure is provided in accordance with the Federal Trade Commission&apos;s
            guidelines on endorsements and testimonials, and the Advertising Standards Council of
            India (ASCI) guidelines. We clearly label affiliate content and sponsored posts to
            ensure full transparency.
          </p>
        </article>
      </main>
    </>
  );
}
