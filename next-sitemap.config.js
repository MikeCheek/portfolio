/** @type {import('next-sitemap').IConfig} */
const url = "https://michelepulvirenti.vercel.app"
module.exports = {
  siteUrl: process.env.SITE_URL || url,
  generateRobotsTxt: true,
}
