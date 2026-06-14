import { NextRequest, NextResponse } from 'next/server';
import {
  verifyRefreshToken,
  generateTokenPair,
  validateSession,
  createSession,
  invalidateSession,
} from '@/lib/auth';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get('refresh_token')?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { success: false, error: 'Refresh token required' },
        { status: 401 }
      );
    }

    const payload = verifyRefreshToken(refreshToken);
    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired refresh token' },
        { status: 401 }
      );
    }

    const isValidSession = await validateSession(refreshToken);
    if (!isValidSession) {
      return NextResponse.json({ success: false, error: 'Invalid session' }, { status: 401 });
    }

    const user = await db.adminUser.findUnique({
      where: { id: payload.userId },
      select: { id: true, email: true, role: true, isActive: true },
    });

    if (!user || !user.isActive) {
      return NextResponse.json(
        { success: false, error: 'User not found or inactive' },
        { status: 401 }
      );
    }

    await invalidateSession(refreshToken);

    const newTokens = generateTokenPair({
      userId: user.id,
      email: user.email,
      role: user.role,
      sessionId: '',
    });

    const ip = request.headers.get('x-forwarded-for') || undefined;
    const userAgent = request.headers.get('user-agent') || undefined;

    await createSession(user.id, newTokens, ip, userAgent);

    const response = NextResponse.json({
      success: true,
      data: {
        accessToken: newTokens.accessToken,
      },
    });

    response.cookies.set('access_token', newTokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60,
      path: '/',
    });

    response.cookies.set('refresh_token', newTokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
