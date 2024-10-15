import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')], // Use process.cwd() to get the current working directory
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Add SVGR loader for SVG files
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
