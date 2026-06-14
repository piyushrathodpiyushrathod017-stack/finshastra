'use client';

import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from '@/components/icons';
import { MOCK_ARTICLES } from '@/lib/mock-data';
import type { Article } from '@/types';

const publishedArticles = MOCK_ARTICLES.filter((a) => a.isPublished);

const fuse = new Fuse(publishedArticles, {
  keys: ['title', 'excerpt', 'tags'],
  threshold: 0.3,
  includeScore: true,
});

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((result) => result.item);
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-bg-secondary py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-text-primary text-4xl font-bold">Search Articles</h1>
            <p className="text-text-secondary mt-3">
              Find guides on credit scores, personal loans, and credit cards
            </p>
            <div className="relative mt-8">
              <Search className="text-text-muted absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
              <Input
                type="search"
                placeholder="Search for articles, topics, or tips..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-14 pl-12 text-lg"
                autoFocus
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          {hasQuery && results.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-text-secondary text-lg">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-text-muted mt-2">
                Try searching with different keywords or browse our categories.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/credit-score">
                  <Badge variant="outline" className="cursor-pointer text-sm">
                    Credit Score
                  </Badge>
                </Link>
                <Link href="/personal-loan">
                  <Badge variant="outline" className="cursor-pointer text-sm">
                    Personal Loan
                  </Badge>
                </Link>
                <Link href="/credit-cards">
                  <Badge variant="outline" className="cursor-pointer text-sm">
                    Credit Cards
                  </Badge>
                </Link>
              </div>
            </div>
          )}

          {hasQuery && results.length > 0 && (
            <>
              <p className="text-text-secondary mb-6 text-sm">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map((article: Article) => (
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
                        <p className="text-text-secondary line-clamp-2 text-sm">
                          {article.excerpt}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-text-muted text-xs">
                            {article.readingTime} min read
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )}

          {!hasQuery && (
            <div className="py-16 text-center">
              <p className="text-text-secondary text-lg">Start typing to search our guides</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
