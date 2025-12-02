import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable API routes to handle raw body for webhooks
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default nextConfig;
