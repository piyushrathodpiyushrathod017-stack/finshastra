import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Read the terms of service for ${SITE_NAME}. By using our website, you agree to these terms and conditions.`,
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: 'Our terms of service',
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose prose-gray max-w-none">
          <h1 className="text-text-primary text-4xl font-bold">Terms of Service</h1>
          <p className="text-text-secondary">Last updated: June 9, 2026</p>

          <p>
            Welcome to {SITE_NAME}. These Terms of Service (&quot;Terms&quot;) govern your use of
            our website located at {SITE_URL} (the &quot;Site&quot;). By accessing or using the
            Site, you agree to be bound by these Terms.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our Site, you acknowledge that you have read, understood, and
            agree to be bound by these Terms and all applicable laws and regulations. If you do not
            agree with any part of these Terms, you may not use our Site.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">2. Use of the Website</h2>
          <p>
            You agree to use the Site only for lawful purposes and in a manner that does not
            infringe the rights of others. You may not:
          </p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>Use the Site for any fraudulent or illegal purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Interfere with or disrupt the Site or servers</li>
            <li>Use automated systems to scrape or extract content</li>
            <li>Reproduce, distribute, or commercially exploit any content without permission</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">3. Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, images, articles, and
            software, is the property of {SITE_NAME} or its content suppliers and is protected by
            Indian and international copyright laws. You may not reproduce, distribute, modify, or
            create derivative works from any content without our express written consent.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">4. Disclaimer of Warranties</h2>
          <p>
            The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis.{' '}
            {SITE_NAME} makes no warranties, expressed or implied, regarding the Site&apos;s
            reliability, accuracy, or availability. We do not warrant that:
          </p>
          <ul className="text-text-secondary list-disc pl-6">
            <li>The Site will be uninterrupted or error-free</li>
            <li>Defects will be corrected</li>
            <li>The Site is free of viruses or harmful components</li>
            <li>Results from using the Site will be accurate or reliable</li>
          </ul>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {SITE_NAME} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use
            of the Site. Our total liability shall not exceed the amount you paid us, if any, for
            accessing the Site.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">6. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless {SITE_NAME}, its officers, directors,
            employees, and agents from any claims, losses, or damages arising from your use of the
            Site or violation of these Terms.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes arising from these Terms
            shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra,
            India.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting on the Site. Your continued use of the Site constitutes
            acceptance of the modified Terms.
          </p>

          <h2 className="text-text-primary mt-8 text-2xl font-bold">9. Contact</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul className="text-text-secondary list-none">
            <li>Email: legal@finshastra.in</li>
            <li>Website: {SITE_URL}</li>
          </ul>
        </article>
      </main>
    </>
  );
}
