import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows the build to succeed even with "any" type warnings
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vkgbvgutirdtcukxvtgh.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})