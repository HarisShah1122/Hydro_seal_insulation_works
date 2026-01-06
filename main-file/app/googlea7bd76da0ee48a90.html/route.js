export async function GET() {
  // Exact content from Google verification file
  const content = 'google-site-verification: googlea7bd76da0ee48a90.html';
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

