/** @type {import('next').NextConfig} */
const nextConfig = {
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
