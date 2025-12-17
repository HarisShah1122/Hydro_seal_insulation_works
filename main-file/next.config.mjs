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

export default nextConfig;
