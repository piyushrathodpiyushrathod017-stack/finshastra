'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { NAVIGATION, SITE_NAME } from '@/lib/constants';

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleSection = (href: string) => {
    setOpenSection(openSection === href ? null : href);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-full max-w-sm p-0">
        <SheetHeader className="border-border border-b p-4">
          <SheetTitle className="text-left">
            <Link href="/" onClick={() => onOpenChange(false)}>
              {SITE_NAME}
            </Link>
          </SheetTitle>
          <SheetClose asChild>
            <button
              type="button"
              className="text-text-secondary hover:bg-bg-secondary absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </SheetClose>
        </SheetHeader>
        <nav className="overflow-y-auto p-4" aria-label="Mobile navigation">
          {NAVIGATION.map((section) => (
            <div key={section.href} className="mb-2">
              <div className="flex items-center justify-between">
                <Link
                  href={section.href}
                  className={`py-3 text-sm font-semibold ${
                    isActive(section.href) ? 'text-primary' : 'text-text-primary'
                  }`}
                  onClick={() => onOpenChange(false)}
                >
                  {section.label}
                </Link>
                <button
                  type="button"
                  onClick={() => toggleSection(section.href)}
                  className="text-text-secondary hover:text-text-primary p-2"
                  aria-label={`Toggle ${section.label} submenu`}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openSection === section.href ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {openSection === section.href && (
                <ul className="border-border ml-3 space-y-1 border-l-2 pl-3">
                  {section.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActive(child.href)
                            ? 'bg-primary/5 text-primary font-medium'
                            : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
                        }`}
                        onClick={() => onOpenChange(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="border-border mt-4 border-t pt-4">
            <Link
              href="/search"
              className="text-text-secondary hover:bg-bg-secondary hover:text-text-primary flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
              onClick={() => onOpenChange(false)}
            >
              <Search className="h-4 w-4" />
              Search Articles
            </Link>
          </div>
          <div className="mt-4">
            <Button asChild className="w-full">
              <Link href="/tools/emi-calculator" onClick={() => onOpenChange(false)}>
                Free Tools
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
