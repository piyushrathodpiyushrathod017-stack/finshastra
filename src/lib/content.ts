import type { Article, Category, FAQ, Author, Bank, Comparison, ProgrammaticPage } from '@/types';
import {
  MOCK_ARTICLES,
  MOCK_CATEGORIES,
  MOCK_FAQS,
  MOCK_AUTHORS,
  MOCK_BANKS,
  MOCK_COMPARISONS,
  MOCK_PROGRAMMATIC_PAGES,
} from '@/lib/mock-data';

function filterByCategory(articles: Article[], category: string): Article[] {
  return articles.filter((a) => a.category.slug === category && a.isPublished);
}

function filterBySlug(articles: Article[], slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.isPublished);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = filterBySlug(MOCK_ARTICLES, slug);
  return article ?? null;
}

export async function getAllArticles(): Promise<Article[]> {
  return MOCK_ARTICLES.filter((a) => a.isPublished);
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  return filterByCategory(MOCK_ARTICLES, category);
}

export async function getRelatedArticles(article: Article, count = 3): Promise<Article[]> {
  const sameCategory = MOCK_ARTICLES.filter(
    (a) => a.categoryId === article.categoryId && a.id !== article.id && a.isPublished
  );
  return sameCategory.sort((a, b) => b.views - a.views).slice(0, count);
}

export async function getAllCategories(): Promise<Category[]> {
  return MOCK_CATEGORIES;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return MOCK_CATEGORIES.find((c) => c.slug === slug) ?? null;
}

export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
  return MOCK_FAQS.filter((f) => f.category === category).sort((a, b) => a.order - b.order);
}

export async function getFAQsByArticle(articleId: string): Promise<FAQ[]> {
  return MOCK_FAQS.filter((f) => f.articleId === articleId).sort((a, b) => a.order - b.order);
}

export async function getAllFAQs(): Promise<FAQ[]> {
  return MOCK_FAQS;
}

export async function getAuthorById(id: string): Promise<Author | null> {
  return MOCK_AUTHORS.find((a) => a.id === id) ?? null;
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  return MOCK_AUTHORS.find((a) => a.id === slug) ?? null;
}

export async function getArticlesByAuthor(authorId: string): Promise<Article[]> {
  return MOCK_ARTICLES.filter((a) => a.authorId === authorId && a.isPublished);
}

export async function getAllBanks(): Promise<Bank[]> {
  return MOCK_BANKS;
}

export async function getBankBySlug(slug: string): Promise<Bank | null> {
  return MOCK_BANKS.find((b) => b.slug === slug) ?? null;
}

export async function getAllComparisons(): Promise<Comparison[]> {
  return MOCK_COMPARISONS.filter((c) => c.isPublished);
}

export async function getComparisonBySlug(slug: string): Promise<Comparison | null> {
  return MOCK_COMPARISONS.find((c) => c.slug === slug && c.isPublished) ?? null;
}

export async function getFeaturedArticles(count = 3): Promise<Article[]> {
  return MOCK_ARTICLES.filter((a) => a.isFeatured && a.isPublished).slice(0, count);
}

export async function getProgrammaticPage(slug: string): Promise<ProgrammaticPage | null> {
  return MOCK_PROGRAMMATIC_PAGES.find((p) => p.slug === slug && p.isPublished) ?? null;
}

export async function searchArticles(query: string): Promise<Article[]> {
  const lower = query.toLowerCase();
  return MOCK_ARTICLES.filter(
    (a) =>
      a.isPublished &&
      (a.title.toLowerCase().includes(lower) ||
        a.excerpt.toLowerCase().includes(lower) ||
        a.tags.some((t) => t.toLowerCase().includes(lower)))
  );
}
