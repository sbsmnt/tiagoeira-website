module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-preload-link-crossorigin',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tiago Eira Software Developer`,
        short_name: `TE SW`,
        start_url: `/`,
        background_color: `#2F3447`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicons/favicon-32x32.png',
        icons: [
          {
            src: 'favicons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tiagoeira.com',
        sitemap: 'https://www.tiagoeira.com/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '/' }],
      },
    },
  ],
};
