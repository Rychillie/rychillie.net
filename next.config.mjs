import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    ppr: 'incremental',
    reactCompiler: true,
    after: true
  }
};

export default withNextIntl(nextConfig);
