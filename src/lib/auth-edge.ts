import type { JWTPayload } from '@/types/admin';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production';
const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret-change-in-production';

function base64UrlEncode(data: string): string {
  return btoa(data).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlDecode(data: string): string {
  const base64 = data.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
  return atob(padded);
}

async function hmacSign(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  return base64UrlEncode(String.fromCharCode(...new Uint8Array(signature)));
}

async function createJWT(
  payload: JWTPayload,
  secret: string,
  expiresInMs: number
): Promise<string> {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const exp = Math.floor((Date.now() + expiresInMs) / 1000);
  const body = base64UrlEncode(JSON.stringify({ ...payload, iat: now, exp }));
  const signature = await hmacSign(`${header}.${body}`, secret);
  return `${header}.${body}.${signature}`;
}

async function verifyJWT(token: string, secret: string): Promise<JWTPayload | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [header, body, signature] = parts;
    const expectedSig = await hmacSign(`${header}.${body}`, secret);

    if (signature !== expectedSig) return null;

    const payload = JSON.parse(base64UrlDecode(body));

    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
      sessionId: payload.sessionId,
    };
  } catch {
    return null;
  }
}

export function generateAccessToken(payload: JWTPayload): string {
  // Server-side only (uses Node.js)
  const jwt = require('jsonwebtoken');
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
}

export function generateRefreshToken(payload: JWTPayload): string {
  const jwt = require('jsonwebtoken');
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });
}

export async function generateAccessTokenEdge(payload: JWTPayload): Promise<string> {
  return createJWT(payload, JWT_SECRET, 15 * 60 * 1000);
}

export async function generateRefreshTokenEdge(payload: JWTPayload): Promise<string> {
  return createJWT(payload, JWT_REFRESH_SECRET, 7 * 24 * 60 * 60 * 1000);
}

export function verifyAccessToken(token: string): JWTPayload | null {
  try {
    const jwt = require('jsonwebtoken');
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export function verifyRefreshToken(token: string): JWTPayload | null {
  try {
    const jwt = require('jsonwebtoken');
    return jwt.verify(token, JWT_REFRESH_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export async function verifyAccessTokenEdge(token: string): Promise<JWTPayload | null> {
  return verifyJWT(token, JWT_SECRET);
}

export async function verifyRefreshTokenEdge(token: string): Promise<JWTPayload | null> {
  return verifyJWT(token, JWT_REFRESH_SECRET);
}
