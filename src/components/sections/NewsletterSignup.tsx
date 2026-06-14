import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface NewsletterSignupProps {
  variant?: 'default' | 'inline' | 'hero';
}

export function NewsletterSignup({ variant = 'default' }: NewsletterSignupProps) {
  if (variant === 'hero') {
    return (
      <section className="bg-primary/5 rounded-2xl py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-text-primary text-3xl font-bold">Stay Updated on Personal Finance</h2>
          <p className="text-text-secondary mt-3">
            Get the latest tips on credit scores, loans, and credit cards delivered to your inbox.
          </p>
          <form
            action="/api/newsletter"
            method="POST"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="text-text-muted mt-3 text-sm">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="border-border rounded-xl border bg-white p-4">
        <h3 className="text-text-primary text-sm font-semibold">Get updates via email</h3>
        <form action="/api/newsletter" method="POST" className="mt-3 flex gap-2">
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="flex-1"
          />
          <Button type="submit" size="sm">
            Subscribe
          </Button>
        </form>
        <p className="text-text-muted mt-2 text-xs">No spam. Unsubscribe anytime.</p>
      </div>
    );
  }

  return (
    <section className="border-border bg-bg-secondary rounded-xl border py-10">
      <div className="mx-auto max-w-md px-4 text-center">
        <h2 className="text-text-primary text-xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-text-secondary mt-2 text-sm">
          Weekly insights on credit, loans, and smart money moves.
        </p>
        <form action="/api/newsletter" method="POST" className="mt-6 flex gap-2">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
        <p className="text-text-muted mt-3 text-xs">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
