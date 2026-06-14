import Link from 'next/link';

interface QuickLink {
  label: string;
  href: string;
}

interface QuickLinksBoxProps {
  title: string;
  links: QuickLink[];
}

export function QuickLinksBox({ title, links }: QuickLinksBoxProps) {
  return (
    <div className="border-border rounded-xl border bg-white p-5">
      <h3 className="text-text-primary mb-4 text-base font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-text-secondary hover:text-primary flex items-center gap-2 text-sm transition-colors"
            >
              <span className="bg-primary h-1 w-1 shrink-0 rounded-full" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
