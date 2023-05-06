/** @type {import('next').NextConfig} */
const nextConfig = {
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