import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tools/nexus",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/pilot",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
