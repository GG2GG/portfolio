import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Only use basePath for GitHub Pages deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
