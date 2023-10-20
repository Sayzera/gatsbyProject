import { useStaticQuery, graphql } from "gatsby";
import gatsbyImageData from "gatsby-plugin-image";
export default function useGetAllProducts() {
  const { allSanityProducts } = useStaticQuery(
    graphql`
      query ProductsQuery {
        allSanityProducts {
          edges {
            node {
              id
              _id
              title
              images {
                asset {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
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
    `
  );

  return allSanityProducts;
}