export function apiUrl(): string {
  const url = process.env.API_URL;
  if (!url) throw new Error('API_URL is not set. Copy .env.example to .env.local and fill it in.');
  return url.replace(/\/+$/, '');
}
