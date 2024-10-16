/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.themealdb.com",
      "picsum.photos",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/posts",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
