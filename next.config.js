/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    turbopack: {
        root: __dirname,
    },
    /*
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'profildoors.ru',
                // port: '',
                pathname: '/images/**',
                // search: '',
            },
        ],
    },
     */
}

module.exports = nextConfig
