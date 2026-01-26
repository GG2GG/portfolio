import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",  // Required for Static Export (GitHub Pages)
  images: {
    unoptimized: true, // Required as GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: "/portfolio", // Required for project repository (https://username.github.io/portfolio)
};

export default nextConfig;
