import { backendFetch } from '@/lib/backend';

export async function POST() {
  const data = await backendFetch('/scan', { method: 'POST' });
  return Response.json(data);
}
