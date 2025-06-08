import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yozbrydxdlcxghkphhtq.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "app.wewantwaste.co.uk",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
