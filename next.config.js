/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // TODO: remove placeholder images domain
    domains: ["res.cloudinary.com", "loremflickr.com", "www.notion.so"],
  },
};

module.exports = nextConfig;
