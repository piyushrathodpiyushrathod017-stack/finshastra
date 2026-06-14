import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { authenticateUser } from '@/lib/auth';
import { logAuditEvent } from '@/lib/audit';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, password } = result.data;
    const ip =
      request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined;
    const userAgent = request.headers.get('user-agent') || undefined;

    const authResult = await authenticateUser(email, password, ip, userAgent);

    if ('error' in authResult) {
      await logAuditEvent({
        action: 'LOGIN_FAILED',
        entityType: 'auth',
        details: { email, reason: authResult.error },
        ip,
        userAgent,
      });

      return NextResponse.json({ success: false, error: authResult.error }, { status: 401 });
    }

    await logAuditEvent({
      userId: authResult.user.id,
      action: 'LOGIN',
      entityType: 'auth',
      details: { email: authResult.user.email },
      ip,
      userAgent,
    });

    const response = NextResponse.json({
      success: true,
      data: {
        user: authResult.user,
        accessToken: authResult.tokens.accessToken,
      },
    });

    response.cookies.set('access_token', authResult.tokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60,
      path: '/',
    });

    response.cookies.set('refresh_token', authResult.tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
