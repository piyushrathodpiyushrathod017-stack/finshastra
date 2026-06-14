import { z } from 'zod';

export const articleSchema = z.object({
  title: z
    .string()
    .min(10, 'Title must be at least 10 characters')
    .max(60, 'Title must be at most 60 characters'),
  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase alphanumeric with hyphens'),
  excerpt: z
    .string()
    .min(50, 'Excerpt must be at least 50 characters')
    .max(200, 'Excerpt must be at most 200 characters'),
  content: z.string().min(500, 'Content must be at least 500 characters'),
  coverImage: z.string().url('Cover image must be a valid URL'),
  authorId: z.string().min(1, 'Author ID is required'),
  categoryId: z.string().min(1, 'Category ID is required'),
  tags: z.array(z.string().min(1)).min(1, 'At least one tag is required').max(10),
  metaTitle: z.string().max(60, 'Meta title must be at most 60 characters').optional(),
  metaDescription: z
    .string()
    .max(160, 'Meta description must be at most 160 characters')
    .optional(),
  canonicalUrl: z.string().url('Canonical URL must be valid').optional(),
  isPublished: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
});

export type ArticleInput = z.infer<typeof articleSchema>;

export const faqSchema = z.object({
  question: z.string().min(10, 'Question must be at least 10 characters').max(200),
  answer: z.string().min(50, 'Answer must be at least 50 characters').max(2000),
  category: z.string().min(1, 'Category is required'),
  articleId: z.string().nullable(),
  order: z.number().int().min(0),
});

export type FAQInput = z.infer<typeof faqSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .max(255, 'Email must be at most 255 characters'),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be at most 100 characters')
    .optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{9,14}$/, 'Please enter a valid phone number')
    .optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(20, 'Message must be at least 20 characters').max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const searchSchema = z.object({
  query: z
    .string()
    .min(1, 'Search query is required')
    .max(100, 'Search query must be at most 100 characters'),
});

export type SearchInput = z.infer<typeof searchSchema>;

export const bankSchema = z.object({
  name: z.string().min(1, 'Bank name is required').max(100),
  slug: z
    .string()
    .min(3)
    .max(50)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase alphanumeric with hyphens'),
  description: z.string().min(20, 'Description must be at least 20 characters').max(500),
  website: z.string().url('Website must be a valid URL'),
  interestRate: z.string().min(1, 'Interest rate is required'),
  processingFee: z.string().min(1, 'Processing fee is required'),
  minLoanAmount: z.number().int().min(0),
  maxLoanAmount: z.number().int().min(1),
  minCreditScore: z.number().int().min(300).max(900),
});

export type BankInput = z.infer<typeof bankSchema>;

export const comparisonSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters').max(200),
  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase alphanumeric with hyphens'),
  description: z.string().min(20, 'Description must be at least 20 characters').max(500),
  metaTitle: z.string().max(60).optional(),
  metaDescription: z.string().max(160).optional(),
  isPublished: z.boolean().default(false),
});

export type ComparisonInput = z.infer<typeof comparisonSchema>;
