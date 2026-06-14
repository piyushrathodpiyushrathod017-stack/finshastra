'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, Search, ChevronDown, X } from 'lucide-react';
import { NAVIGATION, SITE_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

interface NavDropdownProps {
  item: (typeof NAVIGATION)[number];
  isActive: boolean;
}

function NavDropdown({ item, isActive }: NavDropdownProps) {
  return (
    <div className="group relative">
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-primary' : 'text-text-primary hover:text-primary'
        }`}
      >
        {item.label}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="border-border min-w-[260px] rounded-xl border bg-white p-2 shadow-xl">
          <p className="text-text-muted px-3 py-2 text-xs">{item.description}</p>
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="text-text-primary hover:bg-primary/5 hover:text-primary block rounded-lg px-3 py-2 text-sm transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="border-border sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-primary text-xl font-bold">{SITE_NAME}</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {NAVIGATION.map((item) => (
              <NavDropdown key={item.href} item={item} isActive={isActive(item.href)} />
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/search">
            <button
              type="button"
              className="text-text-secondary hover:bg-bg-secondary hover:text-text-primary inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
              aria-label="Search articles"
            >
              <Search className="h-5 w-5" />
            </button>
          </Link>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/tools/emi-calculator">Free Tools</Link>
          </Button>
          <button
            type="button"
            className="text-text-secondary hover:bg-bg-secondary hover:text-text-primary inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <MobileMenu pathname={pathname} onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleSection = (href: string) => {
    setOpenSection(openSection === href ? null : href);
  };

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-0 left-0 h-full w-[300px] max-w-[85vw] overflow-y-auto bg-white shadow-2xl">
        <div className="border-border flex items-center justify-between border-b p-4">
          <Link href="/" className="text-primary text-lg font-bold" onClick={onClose}>
            {SITE_NAME}
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="text-text-secondary hover:bg-bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-lg"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4" aria-label="Mobile navigation">
          {NAVIGATION.map((section) => (
            <div key={section.href} className="mb-2">
              <div className="flex items-center justify-between">
                <Link
                  href={section.href}
                  className={`py-3 text-sm font-semibold ${
                    isActive(section.href) ? 'text-primary' : 'text-text-primary'
                  }`}
                  onClick={onClose}
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
                        onClick={onClose}
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
              onClick={onClose}
            >
              <Search className="h-4 w-4" />
              Search Articles
            </Link>
          </div>
          <div className="mt-4">
            <Button asChild className="w-full">
              <Link href="/tools/emi-calculator" onClick={onClose}>
                Free Tools
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
