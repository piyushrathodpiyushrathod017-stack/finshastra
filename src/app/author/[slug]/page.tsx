import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { getAuthorBySlug, getArticlesByAuthor } from '@/lib/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, ExternalLink, Mail } from '@/components/icons';

interface PageParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);
  if (!author) return {};

  return {
    title: `${author.name} — Author at ${SITE_NAME}`,
    description: author.bio,
    alternates: {
      canonical: `${SITE_URL}/author/${author.id}`,
    },
    openGraph: {
      title: `${author.name} — ${SITE_NAME}`,
      description: author.bio,
      url: `${SITE_URL}/author/${author.id}`,
      siteName: SITE_NAME,
      type: 'profile',
      images: [
        {
          url: author.avatar,
          width: 400,
          height: 400,
          alt: author.name,
        },
      ],
    },
  };
}

export default async function AuthorPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = await getArticlesByAuthor(author.id);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: author.name, href: `/author/${author.id}` },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="mt-8 flex flex-col items-start gap-8 md:flex-row">
            <div className="shrink-0">
              <img
                src={author.avatar}
                alt={author.name}
                className="ring-primary/10 h-32 w-32 rounded-full object-cover ring-4"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-text-primary text-3xl font-bold">{author.name}</h1>
              <p className="text-text-secondary mt-4 max-w-2xl">{author.bio}</p>
              <div className="text-text-muted mt-4 flex items-center gap-3 text-sm">
                <Badge variant="secondary">{articles.length} articles</Badge>
                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
                {author.social.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary flex items-center gap-1"
                  >
                    <Globe className="h-4 w-4" />
                    Twitter
                  </a>
                )}
                <a
                  href={`mailto:${author.email}`}
                  className="text-text-secondary hover:text-primary flex items-center gap-1"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-text-primary mb-6 text-2xl font-bold">Articles by {author.name}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link key={article.id} href={`/${article.category.slug}/${article.slug}`}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <div className="relative aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="secondary" className="w-fit text-xs">
                        {article.category.name}
                      </Badge>
                      <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary line-clamp-2 text-sm">{article.excerpt}</p>
                      <div className="text-text-muted mt-3 flex items-center gap-3 text-xs">
                        <span>{article.readingTime} min read</span>
                        {article.publishedAt && (
                          <time dateTime={article.publishedAt.toISOString()}>
                            {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </time>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
