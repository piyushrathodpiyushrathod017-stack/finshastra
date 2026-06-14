export type AdminRole = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR' | 'AUTHOR' | 'REVIEWER';

export type ArticleStatus =
  | 'DRAFT'
  | 'REVIEW'
  | 'APPROVED'
  | 'PUBLISHED'
  | 'ARCHIVED'
  | 'SCHEDULED';

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  isActive: boolean;
  mfaEnabled: boolean;
  lastLoginAt: Date | null;
  lastLoginIp: string | null;
  failedAttempts: number;
  lockedUntil: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export type AdminUserWithoutPassword = Omit<AdminUser, 'passwordHash'>;

export interface AdminSession {
  id: string;
  userId: string;
  tokenHash: string;
  refreshToken: string;
  ip: string | null;
  userAgent: string | null;
  isActive: boolean;
  expiresAt: Date;
  createdAt: Date;
}

export interface ArticleRevision {
  id: string;
  articleId: string;
  authorId: string;
  title: string;
  content: string;
  excerpt: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  changeNote: string | null;
  createdAt: Date;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  color: string | null;
  createdAt: Date;
}

export interface ArticleTag {
  articleId: string;
  tagId: string;
  createdAt: Date;
}

export interface Media {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  alt: string | null;
  uploadedBy: string | null;
  createdAt: Date;
}

export interface Setting {
  id: string;
  key: string;
  value: unknown;
  label: string;
  updatedAt: Date;
}

export interface AuditLog {
  id: string;
  userId: string | null;
  action: string;
  entityType: string;
  entityId: string | null;
  details: Record<string, unknown> | null;
  ip: string | null;
  userAgent: string | null;
  createdAt: Date;
}

export interface SEOMeta {
  id: string;
  entityType: string;
  entityId: string;
  metaTitle: string | null;
  metaDescription: string | null;
  canonicalUrl: string | null;
  ogImage: string | null;
  noindex: boolean;
  nofollow: boolean;
}

export interface InternalLink {
  id: string;
  sourceUrl: string;
  targetUrl: string;
  anchorText: string;
  isBroken: boolean;
  lastChecked: Date | null;
  createdAt: Date;
}

// ============================================================================
// RBAC Types
// ============================================================================

export type Permission =
  | 'articles:read'
  | 'articles:create'
  | 'articles:update'
  | 'articles:delete'
  | 'articles:publish'
  | 'articles:review'
  | 'categories:read'
  | 'categories:create'
  | 'categories:update'
  | 'categories:delete'
  | 'tags:read'
  | 'tags:create'
  | 'tags:update'
  | 'tags:delete'
  | 'authors:read'
  | 'authors:create'
  | 'authors:update'
  | 'authors:delete'
  | 'media:read'
  | 'media:upload'
  | 'media:delete'
  | 'seo:read'
  | 'seo:update'
  | 'seo:redirects:manage'
  | 'settings:read'
  | 'settings:update'
  | 'users:read'
  | 'users:create'
  | 'users:update'
  | 'users:delete'
  | 'audit:read'
  | 'analytics:read';

export interface RBACConfig {
  roles: {
    [key in AdminRole]: Permission[];
  };
}

// ============================================================================
// Auth Types
// ============================================================================

export interface JWTPayload {
  userId: string;
  email: string;
  role: AdminRole;
  sessionId: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: AdminUserWithoutPassword;
  accessToken: string;
  refreshToken: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

// ============================================================================
// Dashboard Types
// ============================================================================

export interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  reviewArticles: number;
  totalViews: number;
  totalCategories: number;
  totalAuthors: number;
  totalSubscribers: number;
  recentActivity: AuditLog[];
}

// ============================================================================
// API Types
// ============================================================================

export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
