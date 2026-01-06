import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'googlea7bd76da0ee48a90.html');
  const fileContent = readFileSync(filePath, 'utf8');
  
  return new Response(fileContent, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

