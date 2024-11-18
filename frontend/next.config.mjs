/** @type {import('next').NextConfig} */
const APIURL = "http://3.39.46.222";

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
      
      {
        source: "/routinelist",
        destination: `http://${APIURL}/api/routinelist/`,
      },
    
    ];
  },
};

export default nextConfig;
