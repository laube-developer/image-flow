/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_PWD: process.env.DB_PWD,
  },
}

module.exports = nextConfig
