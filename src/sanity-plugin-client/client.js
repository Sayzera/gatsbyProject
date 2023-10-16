import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "lauo4qtb",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03",
});
// Path: src/sanity-plugin-client/client.js

export async function getPosts() {
  const posts = await client.fetch('*[_type == "products"]');

  console.log(posts);
  return posts;
}
