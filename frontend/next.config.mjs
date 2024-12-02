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
        source: "/signin",
        destination: `http://${APIURL}/api/user/login/`,
      },
      //sign up (post)
      {
        source: "/signup",
        destination: `http://${APIURL}/api/user/signup/`,
      },
      //routine
      //routine list (get)
      {
        source: "/routinelist",
        destination: `http://${APIURL}/api/routinelist/`,
      },
      //routine finish (post)
      {
        source: "/routinefinish",
        destination: `http://${APIURL}/api/routinelist/complete/`,
      },
      //routine add (post)
      {
        source: "/makeroutine",
        destination: `http://${APIURL}/api/routinelist/create/`
      },
      //routine delete (delete)
      {
        source: "/routine/delete/:id",
        destination: `http://${APIURL}/api/routinelist/create/:id/`
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
      // book delete (DELETE)
      {
        source: "/mylibrary/books/delete/:id",
        destination: `http://${APIURL}/api/mylibrary/books/create/:id/`,
      },
      // book list (GET)
      {
        source: "/mylibrary/booklist",
        destination: `http://${APIURL}/api/mylibrary/books/user/`,
      },
      // book record (GET)
      {
        source: "/mylibrary/books/record/:id",
        destination: `http://${APIURL}/api/mylibrary/books/:id/routines/`,
      },
      // club
      // club list (GET)
      {
        source: "/clublist",
        destination: `http://${APIURL}/api/clublist/`,
      },
      // club popular list (GET)
      {
        source: "/clublist/popular",
        destination: `http://${APIURL}/api/clublist/popular/`,
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
      // record
      // routine recordlist (GET)
      {
        source: "/record/all",
        destination: `http://${APIURL}/api/mystats/record/all/`,
      },
      // month recordlist (GET)
      {
        source: "/record/month/:year/:month",
        destination: `http://${APIURL}/api/mystats/record/month/?year=:year&month=:month`,
      },
      // record delete (DELETE), Edit (PUT)
      {
        source: "/record/delete/:id",
        destination: `http://${APIURL}/api/mylibrary/books/routines/:id/`,
      },
      //main
      {
        source: "/mainpage",
        destination: `http://${APIURL}/api/mainpage/`,
      },
    ];
  },
};

export default nextConfig;
