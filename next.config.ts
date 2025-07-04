import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "th.bing.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "a.cdn-hotels.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.rodei.com.br",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**"
      },
      {
        protocol: 'https',
        hostname: "wallpaperaccess.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;

