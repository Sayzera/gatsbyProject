import { graphql, useStaticQuery } from "gatsby";
import { client } from "../sanity-plugin-client/client";

export const useGetProducts = async () => {
  async function getProducts() {
    return await client.fetch(`
        *[ _type == "products" ]
     `);
  }
  const data = await getProducts();

  return data;
};
