export function uniqueUsername(prefix = 'pw_user'): string {
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
}
