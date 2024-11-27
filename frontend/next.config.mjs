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
    //routinelist (get)
      {
        source: "/routinelist",
        destination: `http://${APIURL}/api/routinelist/`,
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
