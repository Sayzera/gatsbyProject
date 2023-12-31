import { useStaticQuery, graphql } from "gatsby";
import gatsbyImageData from "gatsby-plugin-image";
export default function useSliderData() {
  const { allSanityCategories } = useStaticQuery(
    graphql`
      query CategoriesQuery {
        allSanityCategories {
          edges {
            node {
              id
              category_name
              image {
                asset {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 70
                    height: 70
                  )
                }
              }
              slug {
                current
              }
            }
          }
        }
      }
    `
  );

  return allSanityCategories;
}
