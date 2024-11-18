/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRefresh: false,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["contents.kyobobook.co.kr"], // dummy
  },
};

export default nextConfig;
