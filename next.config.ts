import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: './',
  // trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
