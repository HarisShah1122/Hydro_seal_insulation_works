export const dynamic = 'force-dynamic';

export async function GET() {
  // Google site verification content
  const content = 'google-site-verification: googlea7bd76da0ee48a90';
  
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

