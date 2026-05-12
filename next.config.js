const createMDX = require('@next/mdx')

/** @type {import('next').NextConfig} */
const baseConfig = {
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

module.exports = nextConfig
