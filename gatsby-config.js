const url = 'https://mikecheek.github.io/portfolio'
module.exports = {
  siteMetadata: {
    siteUrl: url,
    title: 'Michele Pulvirenti Portfolio',
    description:
      "Hi, I'm a developer and I'm currently working on the web. I love building cool websites with amazing animations and always strive to improve my skills.",
    url: url,
    keywords: ['michele', 'pulvirenti', 'portfolio', 'mikecheek', 'developer', 'web'],
    author: 'Michele Pulvirenti',
  },
  pathPrefix: '/portfolio',
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: url,
        sitemap: url + '/sitemap/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Word Game | MP',
        short_name: 'Word Game',
        start_url: '/game',
        lang: 'en',
        background_color: '#000000',
        theme_color: '#000000',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/maskableIcons/maskable_icon_x48.png', // This path is relative to the root of the site.
        icons: [
          {
            src: 'src/images/maskableIcons/maskable_icon.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'src/images/maskableIcons/maskable_icon_x512.png',
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: 'src/images/maskableIcons/maskable_icon_x384.png',
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: 'src/images/maskableIcons/maskable_icon_x192.png',
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: 'src/images/maskableIcons/maskable_icon_x128.png',
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: 'src/images/maskableIcons/maskable_icon_x96.png',
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: 'src/images/maskableIcons/maskable_icon_x72.png',
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: 'src/images/maskableIcons/maskable_icon_x48.png',
            sizes: `48x48`,
            type: `image/png`,
          },
        ],
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets/',
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
        path: './assets/',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/', '/game/'],
        workboxConfig: {
          maximumFileSizeToCacheInBytes: 100000000,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:700`, `Rubik\:300,700`],
        display: 'swap',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-firebase',
    //   options: {
    //     credentials: {
    //       apiKey: process.env.API_KEY,
    //       authDomain: process.env.AUTH_DOMAIN,
    //       databaseURL: process.env.DATABASE_URL,
    //       projectId: process.env.PROJECT_ID,
    //       storageBucket: process.env.STORAGE_BUCKET,
    //       messagingSenderId: process.env.MESSAGING_SENDER_ID,
    //       appId: process.env.APP_ID,
    //     },
    //   },
    // },
  ],
}
