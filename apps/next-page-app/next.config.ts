import path, { dirname } from 'path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  webpack: (config) => {
    // Disable css module rule
    config.module.rules.forEach((rule: any) => {
      const { oneOf } = rule
      if (oneOf) {
        oneOf.forEach((one: any) => {
          if (!`${one.issuer?.and}`.includes('_app')) return
          one.issuer.and = [path.resolve(dirname(''))]
        })
      }
    })

    return config
  },
}

export default nextConfig
