import { NextRequest, NextResponse } from 'next/server';

const mockArticles = [
  {
    id: '1',
    title: 'How to Start Investing in Mutual Funds',
    slug: 'investing-mutual-funds-beginners',
    excerpt: 'A beginner guide to mutual fund investing',
    category: 'Investing',
  },
  {
    id: '2',
    title: 'Understanding Fixed Deposits',
    slug: 'understanding-fixed-deposits',
    excerpt: 'Everything you need to know about FDs',
    category: 'Savings',
  },
  {
    id: '3',
    title: 'Tax Saving Tips for Salaried Employees',
    slug: 'tax-saving-tips-salaried',
    excerpt: 'Maximize your tax savings with these strategies',
    category: 'Tax',
  },
  {
    id: '4',
    title: 'Building an Emergency Fund',
    slug: 'building-emergency-fund',
    excerpt: 'Why and how to build your safety net',
    category: 'Planning',
  },
  {
    id: '5',
    title: 'Credit Score Guide',
    slug: 'credit-score-guide',
    excerpt: 'Improve and maintain your credit score',
    category: 'Credit',
  },
  {
    id: '6',
    title: 'Home Loan vs Rent Analysis',
    slug: 'home-loan-vs-rent',
    excerpt: 'Which option is better for you?',
    category: 'Loans',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.trim().length === 0) {
    return NextResponse.json({ results: [], query: '' });
  }

  const normalizedQuery = query.toLowerCase();
  const results = mockArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(normalizedQuery) ||
      article.excerpt.toLowerCase().includes(normalizedQuery) ||
      article.category.toLowerCase().includes(normalizedQuery)
  );

  return NextResponse.json({ results, query });
}
