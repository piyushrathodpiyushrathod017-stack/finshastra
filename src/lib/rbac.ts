import type { AdminRole, Permission, RBACConfig } from '@/types/admin';
export type { AdminRole } from '@/types/admin';

const rbacConfig: RBACConfig = {
  roles: {
    SUPER_ADMIN: [
      'articles:read',
      'articles:create',
      'articles:update',
      'articles:delete',
      'articles:publish',
      'articles:review',
      'categories:read',
      'categories:create',
      'categories:update',
      'categories:delete',
      'tags:read',
      'tags:create',
      'tags:update',
      'tags:delete',
      'authors:read',
      'authors:create',
      'authors:update',
      'authors:delete',
      'media:read',
      'media:upload',
      'media:delete',
      'seo:read',
      'seo:update',
      'seo:redirects:manage',
      'settings:read',
      'settings:update',
      'users:read',
      'users:create',
      'users:update',
      'users:delete',
      'audit:read',
      'analytics:read',
    ],
    ADMIN: [
      'articles:read',
      'articles:create',
      'articles:update',
      'articles:delete',
      'articles:publish',
      'articles:review',
      'categories:read',
      'categories:create',
      'categories:update',
      'categories:delete',
      'tags:read',
      'tags:create',
      'tags:update',
      'tags:delete',
      'authors:read',
      'authors:create',
      'authors:update',
      'media:read',
      'media:upload',
      'media:delete',
      'seo:read',
      'seo:update',
      'seo:redirects:manage',
      'settings:read',
      'users:read',
      'audit:read',
      'analytics:read',
    ],
    EDITOR: [
      'articles:read',
      'articles:create',
      'articles:update',
      'articles:publish',
      'articles:review',
      'categories:read',
      'categories:create',
      'categories:update',
      'tags:read',
      'tags:create',
      'tags:update',
      'authors:read',
      'media:read',
      'media:upload',
      'seo:read',
      'seo:update',
      'analytics:read',
    ],
    AUTHOR: [
      'articles:read',
      'articles:create',
      'articles:update',
      'categories:read',
      'tags:read',
      'media:read',
      'media:upload',
    ],
    REVIEWER: [
      'articles:read',
      'articles:review',
      'categories:read',
      'tags:read',
      'media:read',
      'analytics:read',
    ],
  },
};

// ============================================================================
// Permission Checking
// ============================================================================

export function getRolePermissions(role: AdminRole): Permission[] {
  return rbacConfig.roles[role] || [];
}

export function hasPermission(role: AdminRole, permission: Permission): boolean {
  const permissions = getRolePermissions(role);
  return permissions.includes(permission);
}

export function hasAnyPermission(role: AdminRole, permissions: Permission[]): boolean {
  return permissions.some((p) => hasPermission(role, p));
}

export function hasAllPermissions(role: AdminRole, permissions: Permission[]): boolean {
  return permissions.every((p) => hasPermission(role, p));
}

// ============================================================================
// Role Hierarchy
// ============================================================================

const roleHierarchy: Record<AdminRole, number> = {
  SUPER_ADMIN: 5,
  ADMIN: 4,
  EDITOR: 3,
  AUTHOR: 2,
  REVIEWER: 1,
};

export function isRoleHigherOrEqual(role: AdminRole, requiredRole: AdminRole): boolean {
  return roleHierarchy[role] >= roleHierarchy[requiredRole];
}

export function canManageUser(managerRole: AdminRole, targetRole: AdminRole): boolean {
  if (managerRole === 'SUPER_ADMIN') return true;
  return roleHierarchy[managerRole] > roleHierarchy[targetRole];
}

// ============================================================================
// Middleware Helpers
// ============================================================================

export function getRequiredRole(path: string): AdminRole | null {
  const pathSegments = path.split('/').filter(Boolean);

  if (pathSegments.length < 2) return null;

  if (pathSegments[1] === 'settings' || pathSegments[1] === 'users') {
    return 'ADMIN';
  }

  if (pathSegments[1] === 'audit-logs') {
    return 'ADMIN';
  }

  return null;
}

export function checkRoutePermission(path: string, role: AdminRole): boolean {
  const requiredRole = getRequiredRole(path);
  if (!requiredRole) return true;

  return isRoleHigherOrEqual(role, requiredRole);
}

// ============================================================================
// Navigation Permissions
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  permission?: Permission;
  requiredRole?: AdminRole;
}

export const adminNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: 'LayoutDashboard' },
  { label: 'Articles', href: '/admin/articles', icon: 'FileText', permission: 'articles:read' },
  {
    label: 'Categories',
    href: '/admin/categories',
    icon: 'FolderTree',
    permission: 'categories:read',
  },
  { label: 'Tags', href: '/admin/tags', icon: 'Tag', permission: 'tags:read' },
  { label: 'Authors', href: '/admin/authors', icon: 'Users', permission: 'authors:read' },
  { label: 'Media', href: '/admin/media', icon: 'Image', permission: 'media:read' },
  { label: 'SEO', href: '/admin/seo', icon: 'Search', permission: 'seo:read' },
  { label: 'Analytics', href: '/admin/analytics', icon: 'BarChart3', permission: 'analytics:read' },
  { label: 'Settings', href: '/admin/settings', icon: 'Settings', requiredRole: 'ADMIN' },
  { label: 'Users', href: '/admin/users', icon: 'UserCog', requiredRole: 'ADMIN' },
  { label: 'Audit Logs', href: '/admin/audit-logs', icon: 'ScrollText', requiredRole: 'ADMIN' },
];

export function filterNavItemsByRole(items: NavItem[], role: AdminRole): NavItem[] {
  return items.filter((item) => {
    if (item.permission) {
      return hasPermission(role, item.permission);
    }
    if (item.requiredRole) {
      return isRoleHigherOrEqual(role, item.requiredRole);
    }
    return true;
  });
}
