export async function GET() {
  // Google site verification content
  const content = 'google-site-verification: googlea7bd76da0ee48a90';
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

