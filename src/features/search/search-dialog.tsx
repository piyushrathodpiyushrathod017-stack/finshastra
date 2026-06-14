'use client';

import { useEffect, useCallback, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useSearch } from '@/hooks/use-search';
import Link from 'next/link';

interface SearchResult extends Record<string, unknown> {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
}

const mockData: SearchResult[] = [
  {
    title: 'How to Start Investing in Mutual Funds',
    excerpt: 'A beginner guide to mutual fund investing',
    category: 'Investing',
    slug: 'investing-mutual-funds-beginners',
  },
  {
    title: 'Understanding Fixed Deposits',
    excerpt: 'Everything you need to know about FDs',
    category: 'Savings',
    slug: 'understanding-fixed-deposits',
  },
  {
    title: 'Tax Saving Tips for Salaried Employees',
    excerpt: 'Maximize your tax savings with these strategies',
    category: 'Tax',
    slug: 'tax-saving-tips-salaried',
  },
  {
    title: 'Building an Emergency Fund',
    excerpt: 'Why and how to build your safety net',
    category: 'Planning',
    slug: 'building-emergency-fund',
  },
  {
    title: 'Credit Score Guide',
    excerpt: 'Improve and maintain your credit score',
    category: 'Credit',
    slug: 'credit-score-guide',
  },
  {
    title: 'Home Loan vs Rent Analysis',
    excerpt: 'Which option is better for you?',
    category: 'Loans',
    slug: 'home-loan-vs-rent',
  },
];

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const { query, setQuery, results, isSearching, clearSearch } = useSearch(mockData, {
    keys: ['title', 'excerpt', 'category'],
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) clearSearch();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Search">
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="text-text-muted absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="Search articles, guides, calculators..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              aria-label="Search query"
              autoFocus
            />
          </div>
          <div className="text-text-muted text-xs">
            Press{' '}
            <kbd className="border-border bg-bg-tertiary rounded border px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>{' '}
            to toggle
          </div>
          {isSearching && (
            <div className="max-h-80 space-y-2 overflow-y-auto">
              {results.length === 0 ? (
                <p className="text-text-muted py-8 text-center text-sm">No results found</p>
              ) : (
                results.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    onClick={() => handleOpenChange(false)}
                    className="border-border hover:bg-bg-tertiary block rounded-lg border p-4 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-text-primary text-sm font-semibold">{item.title}</h4>
                        <p className="text-text-secondary mt-1 text-xs">{item.excerpt}</p>
                      </div>
                      <span className="bg-bg-tertiary text-text-secondary shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
