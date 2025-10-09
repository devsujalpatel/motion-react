import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows all hosts
      },
    ],
    unoptimized: true, // disables optimization pipeline
  },
};

export default nextConfig;
