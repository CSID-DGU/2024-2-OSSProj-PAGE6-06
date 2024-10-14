/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRefresh: false,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
