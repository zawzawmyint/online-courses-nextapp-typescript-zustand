/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "localhost",
    //     port: "3000",
    //     pathname: "/products/**",
    //   },
    // ],
  },
};

export default nextConfig;
