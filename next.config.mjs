/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    ppr: true,
    reactCompiler: true,
    after: true
  }
};

export default nextConfig;
