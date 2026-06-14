import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessTokenEdge } from '@/lib/auth-edge';
import { checkRoutePermission } from '@/lib/rbac';

const adminRoutes = ['/admin'];
const adminApiRoutes = ['/api/admin'];
const publicAuthRoutes = ['/admin/login'];

function isAdminRoute(pathname: string): boolean {
  return adminRoutes.some((route) => pathname === route || pathname.startsWith(route + '/'));
}

function isAdminApiRoute(pathname: string): boolean {
  return adminApiRoutes.some((route) => pathname.startsWith(route));
}

function isPublicAuthRoute(pathname: string): boolean {
  return publicAuthRoutes.some((route) => pathname.startsWith(route));
}

function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get('Authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }

  const token = request.cookies.get('access_token')?.value;
  return token || null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isAdminRoute(pathname) && !isAdminApiRoute(pathname)) {
    return NextResponse.next();
  }

  if (isPublicAuthRoute(pathname)) {
    return NextResponse.next();
  }

  const token = getTokenFromRequest(request);

  if (!token) {
    if (isAdminApiRoute(pathname)) {
      return NextResponse.json(
        { success: false, error: 'Authentication required' },
        { status: 401 }
      );
    }
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  const payload = await verifyAccessTokenEdge(token);

  if (!payload) {
    if (isAdminApiRoute(pathname)) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete('access_token');
    response.cookies.delete('refresh_token');
    return response;
  }

  if (!checkRoutePermission(pathname, payload.role)) {
    if (isAdminApiRoute(pathname)) {
      return NextResponse.json(
        { success: false, error: 'Insufficient permissions' },
        { status: 403 }
      );
    }
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('x-user-id', payload.userId);
  response.headers.set('x-user-email', payload.email);
  response.headers.set('x-user-role', payload.role);

  return response;
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
