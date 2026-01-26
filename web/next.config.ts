import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",  // Required for Static Export (GitHub Pages)
  images: {
    unoptimized: true, // Required as GitHub Pages doesn't support Next.js Image Optimization
  },
  // If your repo is NOT at the root (e.g. user.github.io/repo-name), you might need:
  // basePath: "/portfolio", 
};

export default nextConfig;
