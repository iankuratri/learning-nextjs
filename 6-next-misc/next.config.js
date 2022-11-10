/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/",
  //       permanent: false,
  //       // permanent: true -> Status 308: permanent redirect
  //       // permanent: false -> Status 307: temporary redirect
  //     },
  //     {
  //       source: "/old-blog/:id",
  //       destination: "/new-blog/:id",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
