// src/gatsby-plugin-apollo/client.js
import fetch from "isomorphic-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://lauo4qtb.api.sanity.io/v2023-08-01/graphql/production/default",
    fetch,
  }),
});

export default client;
