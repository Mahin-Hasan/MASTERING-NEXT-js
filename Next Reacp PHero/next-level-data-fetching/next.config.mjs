/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.themealdb.com"],
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
