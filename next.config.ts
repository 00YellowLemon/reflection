import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/((?!login).*)',
        has: [
          {
            type: 'cookie',
            key: 'auth',
            value: 'false',
          },
        ],
        destination: '/login',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
