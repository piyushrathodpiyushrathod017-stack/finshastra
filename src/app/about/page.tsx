import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Target, BookOpen, Eye, Mail } from '@/components/icons';
import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/lib/constants';

const TEAM = [
  {
    name: 'Priya Sharma',
    role: 'Lead Financial Editor',
    bio: 'Certified Financial Planner with 10+ years of experience in personal finance advisory.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Banking & Credit Expert',
    bio: 'Banking industry veteran specializing in credit cards and loan products.',
  },
  {
    name: 'Ananya Gupta',
    role: 'Personal Finance Writer',
    bio: 'Former investment banker turned personal finance educator and writer.',
  },
];

const VALUES = [
  {
    icon: Shield,
    title: 'Trust',
    description:
      'We build trust through accurate, transparent, and unbiased financial information.',
  },
  {
    icon: Target,
    title: 'Accuracy',
    description:
      'Every piece of content is fact-checked against official sources and expert-reviewed.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'We simplify complex financial concepts to help you make informed decisions.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We clearly disclose affiliate relationships and how we earn revenue.',
  },
];

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME} - India's trusted personal finance guide. Meet our expert team, editorial standards, and mission to help Indians make smarter money decisions.`,
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: 'About FinShastra',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <section className="mb-16 text-center">
          <h1 className="text-text-primary text-4xl font-bold">About {SITE_NAME}</h1>
          <p className="text-text-secondary mx-auto mt-6 max-w-3xl text-lg">
            {SITE_NAME} is India&apos;s trusted personal finance guide, helping millions of Indians
            make smarter decisions about credit scores, personal loans, and credit cards.
          </p>
        </section>

        <section className="mb-16">
          <Card className="bg-primary/5">
            <CardContent className="py-8">
              <h2 className="text-text-primary mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-text-secondary text-lg">
                To empower every Indian with the knowledge and tools they need to make confident
                financial decisions. We believe that financial literacy is a fundamental right, and
                we are committed to making complex financial information accessible, accurate, and
                actionable.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-text-primary mb-8 text-center text-2xl font-bold">Our Values</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <value.icon className="text-primary h-10 w-10" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-text-primary mb-8 text-center text-2xl font-bold">Our Team</h2>
          <p className="text-text-secondary mb-8 text-center">
            Our team comprises certified financial experts and experienced writers who are
            passionate about personal finance education.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TEAM.map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-primary text-sm">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Editorial Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-text-secondary space-y-2 text-sm">
                <li>Every article is reviewed by at least one certified financial expert</li>
                <li>
                  Interest rates, fees, and terms are verified directly from official bank sources
                </li>
                <li>Content is updated regularly to reflect the latest information</li>
                <li>We clearly disclose affiliate relationships on every relevant page</li>
                <li>Our editorial team operates independently from business partnerships</li>
                <li>Corrections are made promptly with transparent editor&apos;s notes</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-text-primary mb-4 text-2xl font-bold">Get in Touch</h2>
          <p className="text-text-secondary mb-6">
            Have questions or feedback? We would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                Follow on Twitter
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
