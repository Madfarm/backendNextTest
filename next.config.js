/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'placekitten.com',
            port: '',
            pathname: '/g/**/**',
          },
        ],
    },
};
   
module.exports = nextConfig;