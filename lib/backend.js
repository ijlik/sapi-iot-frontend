const BASE = process.env.FASTAPI_BASE_URL || 'http://127.0.0.1:8800';
const SIG = process.env.REQUEST_SIGNATURE_SECRET || '';

export async function backendFetch(path, options = {}) {
  if (!SIG) throw new Error('REQUEST_SIGNATURE_SECRET belum diset di .env.local');

  const headers = {
    'Content-Type': 'application/json',
    'x-request-signature': SIG,
    ...(options.headers || {}),
  };

  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers,
    cache: 'no-store',
  });

  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text }; }

  if (!res.ok) {
    const msg = data?.detail || `Backend error ${res.status}`;
    throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
  }

  return data;
}
