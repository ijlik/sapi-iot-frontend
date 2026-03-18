import { backendFetch } from '@/lib/backend';

export async function POST(req) {
  const body = await req.json();
  const data = await backendFetch('/action', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return Response.json(data);
}
