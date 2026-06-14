import { NewsletterSignup } from '@/components/sections/NewsletterSignup';

interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="hidden w-80 shrink-0 lg:block">
      <div className="sticky top-24 space-y-6">
        <NewsletterSignup variant="inline" />
        {children}
      </div>
    </aside>
  );
}
