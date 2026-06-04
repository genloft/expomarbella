/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'decomarbella.es',
      },
      {
        protocol: 'https',
        hostname: 'www.calameo.com',
      },
      {
        protocol: 'https',
        hostname: 'p.calameoassets.com',
      }
    ],
  },
};

export default nextConfig;
