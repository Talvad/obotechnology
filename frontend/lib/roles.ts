export const ROLES = ['admins', 'employees', 'students'] as const;
export type Role = (typeof ROLES)[number];

/** Pages for signed-out users. Signed-in users are bounced to their dashboard. */
export const AUTH_PAGES = ['/login', '/signup', '/confirm', '/forgot-password', '/reset-password', '/new-password'];

// Listed in precedence order: a user in several groups lands on the first match.
const DASHBOARDS: Record<Role, string> = {
  admins: '/admin/dashboard',
  employees: '/employee/dashboard',
  students: '/student/dashboard',
};

export function dashboardPathFor(groups: readonly string[]): string {
  for (const role of ROLES) {
    if (groups.includes(role)) return DASHBOARDS[role];
  }
  return '/no-role';
}

// Mirrors the API's scopes: admins can open every area.
const GATES: Array<[prefix: string, allowed: readonly Role[]]> = [
  ['/admin', ['admins']],
  ['/employee', ['employees', 'admins']],
  ['/student', ['students', 'admins']],
];

export function requiredRolesFor(pathname: string): readonly Role[] | undefined {
  return GATES.find(([prefix]) => pathname === prefix || pathname.startsWith(`${prefix}/`))?.[1];
}
