'use client';

import { useNewsletterStore } from './newsletter-store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertCircle } from 'lucide-react';

export function NewsletterForm() {
  const { email, isLoading, isSuccess, error, setEmail, subscribe, reset } = useNewsletterStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe();
  };

  if (isSuccess) {
    return (
      <Card className="bg-success/10 border-success/30">
        <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
          <CheckCircle className="text-success h-10 w-10" />
          <p className="text-text-primary text-lg font-semibold">Thank you for subscribing!</p>
          <p className="text-text-secondary text-sm">
            You will receive our latest financial insights directly in your inbox.
          </p>
          <Button variant="ghost" size="sm" onClick={reset}>
            Subscribe another email
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || !email} loading={isLoading}>
          Subscribe
        </Button>
      </div>
      {error && (
        <div className="text-error flex items-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      <p className="text-text-muted text-xs">
        No spam. Unsubscribe anytime. Read our privacy policy.
      </p>
    </form>
  );
}
