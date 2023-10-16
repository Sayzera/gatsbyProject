import { useStaticQuery, graphql } from "gatsby";

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
                  url
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
