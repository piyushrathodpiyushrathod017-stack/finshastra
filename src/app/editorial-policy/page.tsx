import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Editorial Policy | ${SITE_NAME}`,
  description: `Read the editorial policy of ${SITE_NAME}. Learn about our content creation process, fact-checking methodology, and commitment to accuracy.`,
  openGraph: {
    title: `Editorial Policy | ${SITE_NAME}`,
    description: 'Our editorial policy',
    url: `${SITE_URL}/editorial-policy`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function EditorialPolicyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Editorial Policy', href: '/editorial-policy' },
  ];

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose prose-gray max-w-none">
          <h1 className="text-text-primary text-4xl font-bold">Editorial Policy</h1>
          <p className="text-text-secondary">Last updated: June 9, 2026</p>

          <p>
            At {SITE_NAME}, accuracy and trust are at the core of everything we publish. This
            editorial policy outlines the standards, processes, and principles that guide our
            content creation.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Our Mission</h2>
          <p>
            We exist to help Indians make informed financial decisions by providing accurate,
            unbiased, and easy-to-understand information about credit scores, personal loans, and
            credit cards.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Content Creation Process</h2>
          <ul className="text-text-secondary list-disc pl-6">
            <li>
              <strong>Research:</strong> Our team conducts thorough research using official bank
              websites, RBI publications, and industry reports.
            </li>
            <li>
              <strong>Writing:</strong> Content is written by qualified financial writers with
              domain expertise.
            </li>
            <li>
              <strong>Review:</strong> Every article undergoes a multi-step editorial review before
              publication.
            </li>
            <li>
              <strong>Expert Validation:</strong> Key financial claims are validated by certified
              financial experts.
            </li>
            <li>
              <strong>Publication:</strong> Approved content is published with clear author
              attribution and date.
            </li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Fact-Checking Methodology</h2>
          <p>Our fact-checking process includes:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Cross-referencing information with official bank and NBFC websites</li>
            <li>Verifying interest rates, fees, and terms directly from source documents</li>
            <li>Checking figures against RBI guidelines and circulars</li>
            <li>Consulting with industry experts for complex financial topics</li>
            <li>Using primary sources over secondary reporting wherever possible</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Expert Review Process</h2>
          <p>
            Our editorial team includes certified financial planners (CFPs), chartered accountants
            (CAs), and experienced banking professionals who review content for accuracy and
            compliance. Every article is reviewed by at least one domain expert before publication.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Update Schedule</h2>
          <p>We are committed to keeping our content current:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>
              <strong>Product pages:</strong> Updated monthly or whenever banks change terms
            </li>
            <li>
              <strong>Comparison articles:</strong> Updated quarterly with latest rates and offers
            </li>
            <li>
              <strong>Guides and educational content:</strong> Reviewed annually
            </li>
            <li>
              <strong>Time-sensitive content:</strong> Updated immediately when changes occur
            </li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Corrections Policy</h2>
          <p>
            If you find an error in our content, please email corrections@finshastra.in with the
            article URL and a description of the error. We will:
          </p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Acknowledge your report within 24 hours</li>
            <li>Investigate and verify the error within 48 hours</li>
            <li>Correct factual errors immediately and add an editor&apos;s note</li>
            <li>Update the &quot;Last updated&quot; date on corrected articles</li>
            <li>Thank you for helping us maintain accuracy</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Conflict of Interest Policy</h2>
          <p>Our editorial team follows strict guidelines to avoid conflicts of interest:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Writers must disclose any personal relationships with financial institutions</li>
            <li>No writer may accept gifts or compensation from companies they review</li>
            <li>Editorial decisions are made independently of business partnerships</li>
            <li>Affiliate relationships are disclosed on every relevant page</li>
            <li>Annual conflict of interest declarations are required from all staff</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Editorial Independence</h2>
          <p>
            Our editorial team operates independently from our business and advertising teams.
            Advertisers and affiliate partners have no influence over the content, rankings, or
            recommendations we publish. Product rankings are based solely on objective criteria
            including fees, features, user reviews, and expert assessment.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">Contact Our Editorial Team</h2>
          <p>For editorial inquiries, corrections, or feedback:</p>
          <ul className="text-text-secondary list-none">
            <li>Email: editorial@finshastra.in</li>
            <li>Corrections: corrections@finshastra.in</li>
          </ul>
        </article>
      </main>
    </>
  );
}
