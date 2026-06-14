import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Personal Finance Guide for India`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Your trusted guide to personal finance in India. Compare credit scores, personal loans, and credit cards from top banks.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_NAME,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    'https://twitter.com/finshastra',
    'https://linkedin.com/company/finshastra',
    'https://facebook.com/finshastra',
    'https://youtube.com/@finshastra',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary flex min-h-screen flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd schema={organizationSchema} />
      </body>
    </html>
  );
}
