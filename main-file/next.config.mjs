import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Simplified config for Vercel
  output: 'standalone',
  
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
};

export default withNextIntl(nextConfig);
