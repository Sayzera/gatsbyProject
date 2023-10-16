import { useStaticQuery, graphql } from "gatsby";

export default function useNavbarData() {
  const { sanitySettings } = useStaticQuery(
    graphql`
      query navbarData {
        sanitySettings {
          id
          logo {
            asset {
              url
            }
          }
        }
      }
    `
  );

  return sanitySettings;
}
