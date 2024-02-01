/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60
  },

  productionBrowserSourceMaps: true
}

export default nextConfig
