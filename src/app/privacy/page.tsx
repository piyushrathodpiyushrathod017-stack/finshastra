import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Read the privacy policy of ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: 'Our privacy policy',
    url: `${SITE_URL}/privacy`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose prose-gray max-w-none">
          <h1 className="text-text-primary text-4xl font-bold">Privacy Policy</h1>
          <p className="text-text-secondary">Last updated: June 9, 2026</p>

          <p>
            Welcome to {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are
            committed to protecting your personal information and your right to privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website {SITE_URL} (the &quot;Site&quot;).
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">1. Information We Collect</h2>

          <h3 className="text-text-primary mt-6 text-xl font-semibold">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Subscribe to our newsletter</li>
            <li>Fill out a contact form</li>
            <li>Participate in surveys or promotions</li>
            <li>Comment on articles</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, and any other
            information you choose to provide.
          </p>

          <h3 className="text-text-primary mt-6 text-xl font-semibold">
            Automatically Collected Information
          </h3>
          <p>
            When you visit the Site, we automatically collect certain information about your device,
            including:
          </p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Date and time of visit</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Operate and maintain the Site</li>
            <li>Improve user experience and site functionality</li>
            <li>Send periodic emails (if you subscribe to our newsletter)</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze site usage and trends</li>
            <li>Protect against fraudulent or unauthorized activity</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">
            3. Data Sharing and Disclosure
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share
            information with:
          </p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Service providers who assist in operating our website (hosting, analytics)</li>
            <li>Legal authorities when required by law</li>
            <li>Business transfers in case of merger or acquisition</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">
            4. Cookies and Tracking Technologies
          </h2>
          <p>We use cookies and similar tracking technologies to:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Remember your preferences and settings</li>
            <li>Analyze site traffic and user behavior</li>
            <li>Personalize content and advertisements</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect some
            site functionality.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the Internet is 100% secure. We cannot guarantee
            absolute security of your data.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p>To exercise any of these rights, please contact us at privacy@finshastra.in.</p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">7. Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We are not responsible for the
            privacy practices of these external sites. We encourage you to read the privacy policy
            of every website you visit.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">8. Children&apos;s Privacy</h2>
          <p>
            Our Site is not intended for children under 18 years of age. We do not knowingly collect
            personal information from children. If we learn that we have collected data from a
            child, we will delete it promptly.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <ul className="text-text-secondary list-none">
            <li>Email: privacy@finshastra.in</li>
            <li>Website: {SITE_URL}</li>
          </ul>
        </article>
      </main>
    </>
  );
}
