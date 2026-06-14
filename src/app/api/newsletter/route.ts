import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema, type NewsletterInput } from '@/lib/validations/article';

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return { allowed: true };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfter = Math.ceil((record.timestamp + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count += 1;
  return { allowed: true };
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      {
        error: 'Too many subscription requests. Please try again later.',
        retryAfter,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfter),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body. Please send valid JSON.' },
      { status: 400 }
    );
  }

  const result = newsletterSchema.safeParse(body);

  if (!result.success) {
    const errorMessage =
      result.error.issues[0]?.message || 'Invalid input. Please check your details.';
    return NextResponse.json(
      { error: errorMessage, details: result.error.issues },
      { status: 400 }
    );
  }

  const data: NewsletterInput = result.data;

  try {
    // In production, this would save to database
    console.log('Newsletter subscription:', {
      email: data.email,
      name: data.name,
      subscribedAt: new Date().toISOString(),
      ip,
    });

    return NextResponse.json(
      {
        message: 'Successfully subscribed to our newsletter',
        email: data.email,
        name: data.name || null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const ip = getClientIp(request);

  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.', retryAfter },
      {
        status: 429,
        headers: { 'Retry-After': String(retryAfter) },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const emailResult = newsletterSchema.pick({ email: true }).safeParse(body);

  if (!emailResult.success) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  console.log('Newsletter unsubscribe:', {
    email: emailResult.data.email,
    unsubscribedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    { message: 'Successfully unsubscribed from our newsletter' },
    { status: 200 }
  );
}
