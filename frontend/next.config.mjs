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
    domains: [
      "contents.kyobobook.co.kr",
      "3.39.46.222",
      // "3.39.46.222/club_images",
      "image.aladin.co.kr",
    ],
  },

  async rewrites() {
    return [
      // user
      // user profile (GET)
      {
        source: "/profile",
        destination: `http://${APIURL}/api/user/profile/`,
      },
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

      // club
      // club list (GET)
      {
        source: "/clublist",
        destination: `http://${APIURL}/api/clublist/`,
      },
      // club detail (GET)
      {
        source: "/:club_id/clublist",
        destination: `http://${APIURL}/api/clublist/:club_id/`,
      },
    ];
  },
};

export default nextConfig;
