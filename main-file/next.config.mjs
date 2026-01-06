import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel-compatible config (removed standalone output)
  
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Ensure compatibility
  trailingSlash: false,
  reactStrictMode: false,
  
  // Rewrite Google verification file to route handler
  async rewrites() {
    return [
      {
        source: '/googlea7bd76da0ee48a90.html',
        destination: '/googlea7bd76da0ee48a90',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
