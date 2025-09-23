/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts'],
  },
  
  compress: true,
  trailingSlash: false,
  
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Simplified chunk splitting to reduce loading failures
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 200000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      }
    }
    return config
  },
  
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    unoptimized: false,
    domains: [],
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
