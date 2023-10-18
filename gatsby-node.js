const path = require(`path`);
const gatsbyImageData = require("gatsby-plugin-image");

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/product.js`);
  const result = await graphql(`
    query {
      allSanityProducts {
        edges {
          node {
            id
            _id
            title
            overview {
              _key
              _type
              children {
                text
              }
            }
            seo_description
            seo_keywords
            seo_title
            images {
              asset {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            sevkiyat {
              ... on SanityBlock {
                _key
                _type
                children {
                  text
                }
              }
            }
            ozellikler {
              description
              title
            }
            slug {
              current
            }
            category {
              category_name
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);
  result.data.allSanityProducts.edges.forEach((edge) => {
    createPage({
      path: `urunler/${edge.node.category.slug.current}/${edge.node.slug.current}/${edge.node._id}`,
      component: productTemplate,
      context: {
        data: edge.node,
      },
    });
  });
};
