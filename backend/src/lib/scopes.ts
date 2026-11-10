// Single source of truth for which API scopes each Cognito group receives.
// Routes in template.yaml reference these via AuthorizationScopes
// (a request needs at least one of a route's listed scopes).
export const GROUP_SCOPES: Record<string, string[]> = {
  admins: ['users.read', 'users.write', 'employee.read', 'student.read'],
  employees: ['employee.read'],
  students: ['student.read'],
};

export function scopesForGroups(groups: readonly string[]): string[] {
  const scopes = new Set<string>();
  for (const group of groups) {
    for (const scope of GROUP_SCOPES[group] ?? []) scopes.add(scope);
  }
  return [...scopes];
}
