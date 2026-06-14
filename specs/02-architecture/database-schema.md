# Database Schema

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Core Tables

### Articles

```prisma
model Article {
  id              String        @id @default(cuid())
  title           String
  slug            String        @unique
  content         String
  excerpt         String?
  coverImage      String?
  status          ArticleStatus @default(DRAFT)
  isFeatured      Boolean       @default(false)
  wordCount       Int?
  readingTime     Int?
  
  // SEO
  metaTitle       String?
  metaDescription String?
  canonicalUrl    String?
  
  // Timestamps
  publishedAt     DateTime?
  scheduledAt     DateTime?
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  
  // Relations
  author          Author        @relation(fields: [authorId], references: [id])
  authorId        String
  reviewer        AdminUser?    @relation(fields: [reviewerId], references: [id])
  reviewerId      String?
  category        Category      @relation(fields: [categoryId], references: [id])
  categoryId      String
  tags            ArticleTag[]
  revisions       ArticleRevision[]
  seoMeta         SEOMeta?
  internalLinks   InternalLink[]
  
  @@index([slug])
  @@index([status])
  @@index([authorId])
  @@index([categoryId])
  @@index([publishedAt])
}
```

### Authors

```prisma
model Author {
  id              String   @id @default(cuid())
  name            String
  slug            String   @unique
  email           String?
  bio             String
  avatar          String?
  credentials     String?
  specializations String[]
  linkedInUrl     String?
  isReviewer      Boolean  @default(false)
  articlesCount   Int      @default(0)
  
  // Timestamps
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  // Relations
  articles        Article[]
  seoProfile      SEOMeta?
  
  @@index([slug])
}
```

### Categories

```prisma
model Category {
  id              String     @id @default(cuid())
  name            String
  slug            String     @unique
  description     String?
  parentId        String?
  
  // SEO
  metaTitle       String?
  metaDescription String?
  
  // Timestamps
  createdAt       DateTime   @default(now())
  updatedAt       DateTime   @updatedAt
  
  // Relations
  parent          Category?  @relation("CategoryTree", fields: [parentId], references: [id])
  children        Category[] @relation("CategoryTree")
  articles        Article[]
  seoMeta         SEOMeta?
  
  @@index([slug])
  @@index([parentId])
}
```

### Tags

```prisma
model Tag {
  id        String   @id @default(cuid())
  name      String   @unique
  slug      String   @unique
  
  // Timestamps
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  articles  ArticleTag[]
  
  @@index([slug])
}

model ArticleTag {
  articleId String
  tagId     String
  
  article Article @relation(fields: [articleId], references: [id])
  tag     Tag     @relation(fields: [tagId], references: [id])
  
  @@id([articleId, tagId])
  @@index([articleId])
  @@index([tagId])
}
```

### Banks

```prisma
model Bank {
  id              String   @id @default(cuid())
  name            String
  slug            String   @unique
  logo            String?
  website         String?
  description     String?
  
  // Products
  hasCreditCards  Boolean  @default(false)
  hasPersonalLoans Boolean @default(false)
  hasHomeLoans    Boolean  @default(false)
  
  // Timestamps
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  // Relations
  articles        Article[]
  seoMeta         SEOMeta?
  
  @@index([slug])
}
```

## Admin Tables

### Admin Users

```prisma
model AdminUser {
  id              String    @id @default(cuid())
  email           String    @unique
  passwordHash    String
  name            String
  role            AdminRole @default(AUTHOR)
  avatar          String?
  isActive        Boolean   @default(true)
  isMFAEnabled    Boolean   @default(false)
  mFASecret       String?
  lastLoginAt     DateTime?
  lastLoginIP     String?
  loginAttempts   Int       @default(0)
  lockedUntil     DateTime?
  
  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  
  // Relations
  auditLogs       AuditLog[]
  sessions        AdminSession[]
  revisions       ArticleRevision[]
  
  @@index([email])
  @@index([role])
}
```

### Article Revisions

```prisma
model ArticleRevision {
  id              String   @id @default(cuid())
  articleId       String
  userId          String
  title           String
  content         String
  excerpt         String?
  metaTitle       String?
  metaDescription String?
  changeNote      String?
  
  // Timestamps
  createdAt       DateTime @default(now())
  
  // Relations
  article         Article   @relation(fields: [articleId], references: [id])
  user            AdminUser @relation(fields: [userId], references: [id])
  
  @@index([articleId])
  @@index([userId])
  @@index([createdAt])
}
```

### Media Library

```prisma
model Media {
  id              String    @id @default(cuid())
  fileName        String
  originalName    String
  mimeType        String
  fileSize        Int
  width           Int?
  height          Int?
  altText         String?
  caption         String?
  url             String
  thumbnailUrl    String?
  uploadedById    String?
  isOptimized     Boolean   @default(false)
  webpUrl         String?
  
  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  
  @@index([mimeType])
  @@index([createdAt])
}
```

### Site Settings

```prisma
model Setting {
  id        String   @id @default(cuid())
  key       String   @unique
  value     String
  group     String
  type      String   @default("string")
  
  // Timestamps
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([key])
  @@index([group])
}
```

### Audit Logs

```prisma
model AuditLog {
  id          String      @id @default(cuid())
  userId      String?
  action      AuditAction
  entityType  String?
  entityId    String?
  oldValues   Json?
  newValues   Json?
  ipAddress   String?
  userAgent   String?
  metadata    Json?
  
  // Timestamps
  createdAt   DateTime    @default(now())
  
  // Relations
  user        AdminUser?  @relation(fields: [userId], references: [id])
  
  @@index([userId])
  @@index([action])
  @@index([entityType])
  @@index([createdAt])
}
```

### SEO Metadata

```prisma
model SEOMeta {
  id                  String   @id @default(cuid())
  entityType          String
  entityId            String
  metaTitle           String?
  metaDescription     String?
  canonicalUrl        String?
  ogTitle             String?
  ogDescription       String?
  ogImage             String?
  twitterTitle        String?
  twitterDescription  String?
  twitterImage        String?
  structuredData      Json?
  robotsDirective     String?
  
  // Timestamps
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
  
  @@unique([entityType, entityId])
  @@index([entityType])
}
```

### Internal Links

```prisma
model InternalLink {
  id           String   @id @default(cuid())
  sourceId     String
  sourceType   String
  targetSlug   String
  anchorText   String
  isBroken     Boolean  @default(false)
  lastChecked  DateTime?
  
  // Timestamps
  createdAt    DateTime @default(now())
  
  @@index([sourceId])
  @@index([targetSlug])
  @@index([isBroken])
}
```

## Enums

```prisma
enum AdminRole {
  SUPER_ADMIN
  ADMIN
  EDITOR
  AUTHOR
  REVIEWER
}

enum ArticleStatus {
  DRAFT
  REVIEW
  APPROVED
  PUBLISHED
  ARCHIVED
  SCHEDULED
}

enum AuditAction {
  CREATE
  UPDATE
  DELETE
  LOGIN
  LOGOUT
  LOGIN_FAILED
  PASSWORD_RESET
  STATUS_CHANGE
  PUBLISH
  ARCHIVE
  RESTORE
  SETTINGS_CHANGE
  ROLE_CHANGE
  PERMISSION_CHANGE
}
```