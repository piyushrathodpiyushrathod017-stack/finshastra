import bcrypt from 'bcryptjs';
import { db } from './db';
import type { JWTPayload, TokenPair, AdminRole } from '@/types/admin';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from './auth-edge';

// Re-export edge-compatible functions for convenience
export { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken };

const BCRYPT_ROUNDS = 12;

// ============================================================================
// Password Utilities
// ============================================================================

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// ============================================================================
// Token Pair Utility
// ============================================================================

export function generateTokenPair(payload: JWTPayload): TokenPair {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
}

// ============================================================================
// Session Management
// ============================================================================

export async function createSession(
  userId: string,
  tokens: TokenPair,
  ip?: string,
  userAgent?: string
): Promise<string> {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);

  const session = await db.adminSession.create({
    data: {
      userId,
      tokenHash: await hashPassword(tokens.accessToken),
      refreshToken: tokens.refreshToken,
      ip,
      userAgent,
      expiresAt,
    },
  });

  return session.id;
}

export async function validateSession(refreshToken: string): Promise<boolean> {
  const session = await db.adminSession.findUnique({
    where: { refreshToken },
  });

  if (!session || !session.isActive) return false;
  if (new Date() > session.expiresAt) {
    await db.adminSession.update({
      where: { id: session.id },
      data: { isActive: false },
    });
    return false;
  }

  return true;
}

export async function invalidateSession(refreshToken: string): Promise<void> {
  await db.adminSession.updateMany({
    where: { refreshToken },
    data: { isActive: false },
  });
}

export async function invalidateAllUserSessions(userId: string): Promise<void> {
  await db.adminSession.updateMany({
    where: { userId },
    data: { isActive: false },
  });
}

export async function cleanupExpiredSessions(): Promise<number> {
  const result = await db.adminSession.deleteMany({
    where: {
      expiresAt: { lt: new Date() },
    },
  });
  return result.count;
}

// ============================================================================
// Account Lockout
// ============================================================================

export async function handleFailedLogin(
  userId: string
): Promise<{ locked: boolean; attempts: number }> {
  const user = await db.adminUser.findUnique({ where: { id: userId } });
  if (!user) return { locked: false, attempts: 0 };

  const newAttempts = user.failedAttempts + 1;
  const shouldLock = newAttempts >= 10;

  await db.adminUser.update({
    where: { id: userId },
    data: {
      failedAttempts: newAttempts,
      lockedUntil: shouldLock ? new Date(Date.now() + 30 * 60 * 1000) : null,
    },
  });

  return { locked: shouldLock, attempts: newAttempts };
}

export async function isAccountLocked(userId: string): Promise<boolean> {
  const user = await db.adminUser.findUnique({ where: { id: userId } });
  if (!user || !user.lockedUntil) return false;

  if (new Date() > user.lockedUntil) {
    await db.adminUser.update({
      where: { id: userId },
      data: { lockedUntil: null, failedAttempts: 0 },
    });
    return false;
  }

  return true;
}

export async function resetFailedAttempts(userId: string): Promise<void> {
  await db.adminUser.update({
    where: { id: userId },
    data: { failedAttempts: 0, lockedUntil: null },
  });
}

// ============================================================================
// Authentication
// ============================================================================

export async function authenticateUser(
  email: string,
  password: string,
  ip?: string,
  userAgent?: string
): Promise<
  | { user: null; error: string }
  | {
      user: { id: string; email: string; name: string; role: AdminRole };
      tokens: TokenPair;
      sessionId: string;
    }
> {
  const user = await db.adminUser.findUnique({ where: { email } });

  if (!user) {
    return { user: null, error: 'Invalid email or password' };
  }

  if (!user.isActive) {
    return { user: null, error: 'Account is disabled' };
  }

  if (await isAccountLocked(user.id)) {
    return { user: null, error: 'Account is locked. Please try again later' };
  }

  const isValidPassword = await verifyPassword(password, user.passwordHash);
  if (!isValidPassword) {
    const { locked } = await handleFailedLogin(user.id);
    if (locked) {
      return { user: null, error: 'Account is locked due to too many failed attempts' };
    }
    return { user: null, error: 'Invalid email or password' };
  }

  await resetFailedAttempts(user.id);

  const payload: JWTPayload = {
    userId: user.id,
    email: user.email,
    role: user.role,
    sessionId: '',
  };

  const tokens = generateTokenPair(payload);
  const sessionId = await createSession(user.id, tokens, ip, userAgent);

  await db.adminUser.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date(), lastLoginIp: ip },
  });

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    tokens,
    sessionId,
  };
}

export async function getUserFromToken(token: string) {
  const payload = verifyAccessToken(token);
  if (!payload) return null;

  const user = await db.adminUser.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      isActive: true,
    },
  });

  if (!user || !user.isActive) return null;

  return user;
}
