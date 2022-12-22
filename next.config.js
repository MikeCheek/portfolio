/** @type {import('next').NextConfig} */
/** @type {import('next-sitemap').IConfig} */

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development" ? true : false,
  swcMinify: false,
}

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
