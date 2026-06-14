'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { filterNavItemsByRole, adminNavItems, type AdminRole } from '@/lib/rbac';
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Tag,
  Users,
  Image,
  Search,
  BarChart3,
  Settings,
  UserCog,
  ScrollText,
  Menu,
  X,
  LogOut,
  ChevronDown,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  FileText,
  FolderTree,
  Tag,
  Users,
  Image,
  Search,
  BarChart3,
  Settings,
  UserCog,
  ScrollText,
};

interface AdminSidebarProps {
  role: AdminRole;
  isOpen: boolean;
  onClose: () => void;
}

export function AdminSidebar({ role, isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const navItems = filterNavItemsByRole(adminNavItems, role);

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} />}

      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-64 border-r border-gray-200 bg-white transition-transform duration-200 ease-in-out lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="text-sm font-bold">FS</span>
            </div>
            <span className="text-lg font-semibold">FinShastra</span>
          </Link>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-gray-500 hover:text-gray-700 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || LayoutDashboard;
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                )}
                onClick={onClose}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

interface AdminHeaderProps {
  user: {
    name: string;
    email: string;
    role: AdminRole;
  };
  onMenuClick: () => void;
}

export function AdminHeader({ user, onMenuClick }: AdminHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 sm:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-md p-2 text-gray-500 hover:text-gray-700 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex-1" />

      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full">
            <span className="text-sm font-medium">{user.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="hidden text-left sm:block">
            <div className="text-sm font-medium">{user.name}</div>
            <div className="text-xs text-gray-500">{user.role}</div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>

        {isMenuOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)} />
            <div className="absolute top-full right-0 z-50 mt-2 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
              <div className="border-b border-gray-100 px-4 py-2">
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
