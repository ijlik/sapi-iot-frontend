import { backendFetch } from '@/lib/backend';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('search') || '';
  const group = searchParams.get('group') || '';
  const params = new URLSearchParams({ search: q });
  if (group) params.set('group', group);
  const data = await backendFetch(`/device?${params.toString()}`);
  return Response.json(data);
}
