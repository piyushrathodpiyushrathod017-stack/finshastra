import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { ArticleMeta } from '@/components/seo/ArticleMeta';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { RelatedArticles } from '@/components/sections/RelatedArticles';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import {
  getArticleBySlug,
  getRelatedArticles,
  getFAQsByArticle,
  getAllArticles,
} from '@/lib/content';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/config/seo';
import type { FAQ } from '@/types';

interface PageParams {
  slug: string;
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles
    .filter((a) => a.category.slug === 'credit-cards')
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/credit-cards/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/credit-cards/${article.slug}`,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: article.publishedAt?.toISOString(),
      modifiedTime: article.updatedAt.toISOString(),
      authors: [article.author.name],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function CreditCardsArticlePage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || article.category.slug !== 'credit-cards') {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article);
  const faqs = await getFAQsByArticle(article.id);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Credit Cards', href: '/credit-cards' },
    { label: article.title, href: `/credit-cards/${article.slug}` },
  ];

  const relatedForComponent = relatedArticles.map((a) => ({
    title: a.title,
    slug: a.slug,
    excerpt: a.excerpt,
    category: a.category.name,
    coverImage: a.coverImage,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <header className="mt-6">
            <h1 className="text-text-primary text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="mt-6">
              <ArticleMeta
                author={{
                  name: article.author.name,
                  avatar: article.author.avatar,
                }}
                publishedAt={article.publishedAt?.toISOString() ?? article.createdAt.toISOString()}
                updatedAt={article.updatedAt.toISOString()}
                readingTime={article.readingTime}
              />
            </div>
          </header>

          {article.coverImage && (
            <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
              <img
                src={article.coverImage}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg prose-gray prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-text-secondary mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {faqs.length > 0 && (
            <FAQAccordion
              faqs={faqs.map((faq: FAQ) => ({
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          )}

          <div className="border-border bg-bg-secondary mt-8 rounded-xl border p-6">
            <h3 className="text-text-primary text-lg font-semibold">About the Author</h3>
            <div className="mt-4 flex items-start gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="text-text-primary font-medium">{article.author.name}</p>
                <p className="text-text-secondary mt-1 text-sm">{article.author.bio}</p>
                {article.author.social.linkedin && (
                  <a
                    href={article.author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 mt-2 inline-block text-sm"
                  >
                    LinkedIn Profile →
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {relatedForComponent.length > 0 && (
          <div className="mx-auto max-w-6xl px-4">
            <RelatedArticles articles={relatedForComponent} />
          </div>
        )}

        <div className="mx-auto max-w-4xl px-4 py-8">
          <NewsletterSignup variant="hero" />
        </div>
      </main>

      <JsonLd schema={generateArticleSchema(article)} />
      {faqs.length > 0 && <JsonLd schema={generateFAQSchema(faqs)} />}
      <JsonLd schema={generateBreadcrumbSchema(breadcrumbItems)} />
    </div>
  );
}
