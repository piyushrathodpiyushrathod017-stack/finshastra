import type { SEOProps, BreadcrumbItem, Article, Bank } from '@/types';
import { SITE_NAME, SITE_URL, AUTHOR_DEFAULT } from '@/lib/constants';

export const DEFAULT_METADATA: SEOProps = {
  title: `${SITE_NAME} - Personal Finance Guide for India`,
  description:
    'Your trusted guide to personal finance in India. Compare credit scores, personal loans, and credit cards from top banks.',
  image: `${SITE_URL}/og-default.png`,
  url: SITE_URL,
  type: 'website',
};

export function generateArticleSchema(article: Article): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: `${SITE_URL}/author/${article.author.id}`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: article.publishedAt?.toISOString(),
    dateModified: article.updatedAt.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/articles/${article.slug}`,
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function generateOrganizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: AUTHOR_DEFAULT.bio,
    sameAs: Object.values(AUTHOR_DEFAULT.social),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function generateWebSiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: AUTHOR_DEFAULT.bio,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateFinancialProductSchema(bank: Bank): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: bank.name,
    description: bank.description,
    provider: {
      '@type': 'Organization',
      name: bank.name,
      url: bank.website,
    },
    image: bank.logo,
    offers: {
      '@type': 'Offer',
      price: bank.interestRate,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: bank.rating,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
