/** @type {import('next').NextConfig} */

const APIURL = "3.39.46.222";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRefresh: false,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["contents.kyobobook.co.kr", "3.39.46.222", "image.aladin.co.kr"],
  },

  async rewrites() {
    return [
      // library
      // book search (GET)
      {
        source: "/mylibrary/books/search/:search",
        destination: `http://${APIURL}/api/mylibrary/books/search/?q=:search`,
      },
      // book add (POST)
      {
        source: "/mylibrary/books/add",
        destination: `http://${APIURL}/api/mylibrary/books/save/`,
      },
    ];
  },
};

export default nextConfig;
