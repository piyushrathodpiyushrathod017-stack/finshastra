import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, ExternalLink } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface AuthorPageProps {
  author: {
    name: string;
    avatar: string;
    bio: string;
    credentials?: string;
    social?: Record<string, string>;
  };
  articles: Array<{
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
  }>;
}

export function generateMetadata({ author }: AuthorPageProps): Metadata {
  return {
    title: `${author.name} | FinShastra`,
    description: author.bio,
    openGraph: {
      title: `${author.name} | FinShastra`,
      description: author.bio,
      images: [{ url: author.avatar }],
    },
  };
}

export function AuthorPage({ author, articles }: AuthorPageProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12">
      <section className="space-y-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-24 w-24 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <h1 className="text-text-primary text-3xl font-bold">{author.name}</h1>
              {author.credentials && <Badge variant="secondary">{author.credentials}</Badge>}
            </div>
            <p className="text-text-secondary mt-3 max-w-2xl text-base leading-relaxed">
              {author.bio}
            </p>
            {author.social && Object.keys(author.social).length > 0 && (
              <div className="mt-4 flex justify-center gap-4 sm:justify-start">
                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors"
                    aria-label={`${author.name} on LinkedIn`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
                {author.social.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors"
                    aria-label={`${author.name} on Twitter`}
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-text-primary mb-6 text-2xl font-bold">Articles by {author.name}</h2>
        {articles.length === 0 ? (
          <p className="text-text-muted">No articles published yet.</p>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <Card key={article.slug} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <Link href={`/blog/${article.slug}`}>
                    <CardTitle className="hover:text-primary text-lg transition-colors">
                      {article.title}
                    </CardTitle>
                  </Link>
                  <p className="text-text-muted text-sm">{formatDate(article.publishedAt)}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary text-sm">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
