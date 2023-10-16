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
    siteUrl: `https://frolicking-arithmetic-9868af.netlify.app/`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-transformer-remark",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: `${__dirname}/src/posts/`,
    //   },
    // },
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
  ],
};
