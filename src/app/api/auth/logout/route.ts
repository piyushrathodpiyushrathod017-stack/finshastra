import { NextRequest, NextResponse } from 'next/server';
import { invalidateSession } from '@/lib/auth';
import { logAuditEvent } from '@/lib/audit';
import { verifyAccessToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get('refresh_token')?.value;

    if (refreshToken) {
      await invalidateSession(refreshToken);
    }

    const token = request.cookies.get('access_token')?.value;
    if (token) {
      const payload = verifyAccessToken(token);
      if (payload) {
        await logAuditEvent({
          userId: payload.userId,
          action: 'LOGOUT',
          entityType: 'auth',
          ip: request.headers.get('x-forwarded-for') || undefined,
          userAgent: request.headers.get('user-agent') || undefined,
        });
      }
    }

    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    });

    response.cookies.delete('access_token');
    response.cookies.delete('refresh_token');

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
