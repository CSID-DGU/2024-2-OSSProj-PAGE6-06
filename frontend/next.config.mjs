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
      //sign
      //sign in (post)
        {
          source: "/sign/in",
          destination: `http://${APIURL}/api/user/login/`,
        },
      //sign up (post)
        {
          source: "/sign/up",
          destination: `http://${APIURL}/api/user/signup/`,
        },
      //routine
      //routinelist (get)
        {
          source: "/routinelist",
          destination: `http://${APIURL}/api/routinelist/`,
        },
      //main
      {
        source: "/main",
        destination: `http://${APIURL}/api/mainpage/`,
      },
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
      // book list (GET)
      {
        source: "/mylibrary/booklist",
        destination: `http://${APIURL}/api/mylibrary/books/user/`,
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
      // club search (GET)
      {
        source: "/search/clublist/:search",
        destination: `http://${APIURL}/api/clublist/search/?q=:search`,
      },
      // club join (POST)
      {
        source: "/join/clublist/:club_id",
        destination: `http://${APIURL}/api/clublist/join/:club_id/`,
      },
      // club create (POST)
      {
        source: "/create/clublist",
        destination: `http://${APIURL}/api/clublist/create/`,
      },
    ];
  },
};

export default nextConfig;
