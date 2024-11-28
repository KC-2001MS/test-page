import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES ? '/test-page' : '',
  // trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
