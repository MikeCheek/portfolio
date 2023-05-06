/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins")
const withVideos = require("next-videos")

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development" ? true : false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

module.exports = withPlugins([withVideos], nextConfig)
