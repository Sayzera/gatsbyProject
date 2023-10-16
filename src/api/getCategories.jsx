import { client } from "../sanity-plugin-client/client";
export default async function getCategories() {
  const categories = await client.fetch(`
    *[_type == "categories"] {
        ...
  }`);

  return categories;
}
