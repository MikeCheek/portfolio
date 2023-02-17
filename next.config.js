/** @type {import('next').NextConfig} */
/** @type {import('next-sitemap').IConfig} */
const withPlugins = require("next-compose-plugins")
const withVideos = require("next-videos")

const url = "https://michelepulvirenti.vercel.app"

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development" ? true : false,
  swcMinify: false,
  siteUrl: process.env.SITE_URL || url,
  generateRobotsTxt: true,
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
