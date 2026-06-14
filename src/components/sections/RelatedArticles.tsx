import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RelatedArticle {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="py-8">
      <h2 className="text-text-primary mb-6 text-2xl font-bold">Related Articles</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
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
                  {article.category}
                </Badge>
                <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary line-clamp-2 text-sm">{article.excerpt}</p>
                <span className="text-primary hover:text-primary-dark mt-3 inline-block text-sm font-medium">
                  Read more
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
