export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId: string | null;
  metaTitle: string;
  metaDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  authorId: string;
  author: Author;
  categoryId: string;
  category: Category;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
  isFeatured: boolean;
  readingTime: number;
  views: number;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
  isFeatured: boolean;
  publishedAt: string;
}

export interface Bank {
  id: string;
  name: string;
  slug: string;
  logo: string;
  website: string;
  description: string;
  rating: number;
  features: string[];
  pros: string[];
  cons: string[];
  interestRate: string;
  processingFee: string;
  minLoanAmount: number;
  maxLoanAmount: number;
  minCreditScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Calculator {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
  inputs: CalculatorInput[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CalculatorInput {
  id: string;
  label: string;
  type: 'number' | 'select' | 'range';
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number | string;
  options?: { label: string; value: string | number }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  articleId: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Newsletter {
  id: string;
  email: string;
  name: string;
  isSubscribed: boolean;
  subscribedAt: Date;
  unsubscribedAt: Date | null;
  createdAt: Date;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

export interface PageView {
  id: string;
  path: string;
  referrer: string | null;
  userAgent: string;
  ip: string;
  country: string | null;
  createdAt: Date;
}

export interface Redirect {
  id: string;
  from: string;
  to: string;
  statusCode: number;
  isActive: boolean;
  createdAt: Date;
}

export interface Comparison {
  id: string;
  title: string;
  slug: string;
  description: string;
  items: ComparisonItem[];
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ComparisonItem {
  id: string;
  comparisonId: string;
  bankId: string;
  bank: Bank;
  features: Record<string, string | number | boolean>;
  rating: number;
  order: number;
}

export interface ProgrammaticPage {
  id: string;
  title: string;
  slug: string;
  description: string;
  template: string;
  data: Record<string, unknown>;
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    social: {
      twitter?: string;
      linkedin?: string;
    };
  };
  social: {
    twitter: string;
    linkedin: string;
    facebook: string;
    youtube: string;
    instagram: string;
  };
  navigation: NavigationItem[];
}

export interface NavigationItem {
  label: string;
  href: string;
  description: string;
  children: {
    label: string;
    href: string;
  }[];
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ProgrammaticPageConfig {
  title: string;
  description: string;
  template: string;
  basePath: string;
}

export interface City {
  name: string;
  slug: string;
  state: string;
}

export interface BankListItem {
  name: string;
  slug: string;
  logo: string;
  rating: number;
}
