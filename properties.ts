const url = 'https://mikecheek.github.io/portfolio';
export default {
  title: 'Michele Pulvirenti Portfolio',
  description:
    "Hi, I'm a developer and I'm currently working on the web. I love building cool apps with amazing animations and always strive to improve my skills.",
  url: url,
  keywords: ['michele', 'pulvirenti', 'portfolio', 'mikecheek', 'developer', 'web'],
  author: {
    name: 'Michele Pulvirenti',
    summary: 'My personal portfolio',
  },
  // next-sitemap
  siteUrl: url,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },

  // next-manifest
  outout: './static/',
  name: 'Michele Pulvirenti | Portfolio',
  short_name: 'Portfolio | MP',
  start_url: '/',
  lang: 'en',
  background_color: '#000000',
  theme_color: '#000000',
  // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
  // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
  display: 'standalone',
  icon: 'assets/images/maskableIcons/maskable_icon_x48.png', // This path is relative to the root of the site.
  icons: [
    {
      src: 'assets/images/maskableIcons/maskable_icon.png',
      sizes: '1024x1024',
      type: 'image/png',
      purpose: 'any maskable',
    },
    {
      src: 'assets/images/maskableIcons/maskable_icon_x512.png',
      sizes: `512x512`,
      type: `image/png`,
    },
    {
      src: 'assets/images/maskableIcons/maskable_icon_x384.png',
      sizes: `384x384`,
      type: `image/png`,
    },
    {
      src: 'assets/images/maskableIcons/maskable_icon_x192.png',
      sizes: `192x192`,
      type: `image/png`,
    },
    {
      src: 'assets/images/maskableIcons/maskable_icon_x128.png',
      sizes: `128x128`,
      type: `image/png`,
    },
    {
      src: 'assets/images/maskableIcons/maskable_icon_x96.png',
      sizes: `96x96`,
      type: `image/png`,
    },
    {
      src: 'assets/images/maskableIcons/maskable_icon_x72.png',
      sizes: `72x72`,
      type: `image/png`,
    },
    {
      src: 'assets/images/maskableIcons/maskable_icon_x48.png',
      sizes: `48x48`,
      type: `image/png`,
    },
  ],
  // An optional attribute which provides support for CORS check.
  // If you do not provide a crossOrigin option, it will skip CORS for manifest.
  // Any invalid keyword or empty string defaults to `anonymous`
  crossOrigin: `use-credentials`,
};
