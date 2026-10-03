import type {NextConfig} from 'next';
require('dotenv').config({ path: './.env' });

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // This is required to allow the Next.js dev server to accept requests from the
  // App Hosting preview URL.
  allowedDevOrigins: [
    '6000-firebase-studio-1757076294958.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev',
  ],
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  }
};

export default nextConfig;
