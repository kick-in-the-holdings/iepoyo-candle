import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['imagedelivery.net'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/iepoyo-candle/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/iepoyo-candle' : '',
};

export default nextConfig;
