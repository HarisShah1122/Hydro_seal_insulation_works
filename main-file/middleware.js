import {NextResponse} from 'next/server';

export default function middleware(request) {
  const response = NextResponse.next();
  
  // Set default locale cookie if not present (for first-time visitors)
  const hasLocaleCookie = request.cookies.has('NEXT_LOCALE');
  if (!hasLocaleCookie) {
    response.cookies.set('NEXT_LOCALE', 'en', {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax'
    });
  }
  
  return response;
}
 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - google verification files
     * - files with extensions (static assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|googlea7bd76da0ee48a90|.*\\..*).*)',
  ],
};

