import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const baseConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    turbopack: {
        root: __dirname,
    },
}

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        // Add remark/rehype plugins here if needed later.
    },
})

const nextConfig = withMDX({
    ...baseConfig,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

export default nextConfig