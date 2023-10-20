/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Kılıçlar Hırdavat`,
    description: `Kılıçlar Hırdavat - Toptan ve Perakende Malzeme Satışı`,
    twitterUsername: `@kiliclarhirdavat`,
    image: `/kiliclar-hirdavat-logo-min.jpg`,
    siteUrl: `https://kiliclarticaret.com/`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`, // Resimlerin bulunduğu dizini ayarlayın
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "https://lauo4qtb.api.sanity.io/v2023-08-01/graphql/production/default",
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "lauo4qtb",
        dataset: "production",
        useCdn: true,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
        watchMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/layouts/main-layout.js`),
      },
    },
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://kiliclarticaret.com",
        sitemap: "https://kiliclarticaret.com/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-FHWYM64MVG", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
