import { db } from './db';
import { Prisma } from '@/generated/prisma';

export type AuditAction =
  | 'LOGIN'
  | 'LOGOUT'
  | 'LOGIN_FAILED'
  | 'PASSWORD_CHANGE'
  | 'PASSWORD_RESET'
  | 'ACCOUNT_LOCKED'
  | 'ACCOUNT_UNLOCKED'
  | 'USER_CREATE'
  | 'USER_UPDATE'
  | 'USER_DELETE'
  | 'ARTICLE_CREATE'
  | 'ARTICLE_UPDATE'
  | 'ARTICLE_DELETE'
  | 'ARTICLE_PUBLISH'
  | 'ARTICLE_UNPUBLISH'
  | 'ARTICLE_REVIEW'
  | 'ARTICLE_APPROVE'
  | 'ARTICLE_REJECT'
  | 'CATEGORY_CREATE'
  | 'CATEGORY_UPDATE'
  | 'CATEGORY_DELETE'
  | 'TAG_CREATE'
  | 'TAG_UPDATE'
  | 'TAG_DELETE'
  | 'AUTHOR_CREATE'
  | 'AUTHOR_UPDATE'
  | 'AUTHOR_DELETE'
  | 'MEDIA_UPLOAD'
  | 'MEDIA_DELETE'
  | 'REDIRECT_CREATE'
  | 'REDIRECT_UPDATE'
  | 'REDIRECT_DELETE'
  | 'SETTING_UPDATE'
  | 'SEO_UPDATE'
  | 'ROLE_CHANGE';

export interface AuditLogEntry {
  userId?: string;
  action: AuditAction;
  entityType: string;
  entityId?: string;
  details?: Record<string, unknown>;
  ip?: string;
  userAgent?: string;
}

export async function logAuditEvent(entry: AuditLogEntry): Promise<void> {
  try {
    await db.auditLog.create({
      data: {
        userId: entry.userId,
        action: entry.action,
        entityType: entry.entityType,
        entityId: entry.entityId,
        details: entry.details as Prisma.InputJsonValue,
        ip: entry.ip,
        userAgent: entry.userAgent,
      },
    });
  } catch (error) {
    console.error('Failed to log audit event:', error);
  }
}

export async function getAuditLogs(params: {
  userId?: string;
  action?: AuditAction;
  entityType?: string;
  entityId?: string;
  startDate?: Date;
  endDate?: Date;
  page?: number;
  pageSize?: number;
}) {
  const {
    userId,
    action,
    entityType,
    entityId,
    startDate,
    endDate,
    page = 1,
    pageSize = 20,
  } = params;

  const where: Record<string, unknown> = {};
  if (userId) where.userId = userId;
  if (action) where.action = action;
  if (entityType) where.entityType = entityType;
  if (entityId) where.entityId = entityId;
  if (startDate || endDate) {
    where.createdAt = {
      ...(startDate && { gte: startDate }),
      ...(endDate && { lte: endDate }),
    };
  }

  const [items, total] = await Promise.all([
    db.auditLog.findMany({
      where,
      include: { user: { select: { id: true, name: true, email: true } } },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    db.auditLog.count({ where }),
  ]);

  return {
    items,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}

export async function getRecentActivity(limit: number = 10) {
  return db.auditLog.findMany({
    include: { user: { select: { id: true, name: true, email: true } } },
    orderBy: { createdAt: 'desc' },
    take: limit,
  });
}
