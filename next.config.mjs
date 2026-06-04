/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
