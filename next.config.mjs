/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  output: 'standalone',
}

export default nextConfig
