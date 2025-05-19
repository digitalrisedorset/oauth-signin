import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: process.env.KEYSTONE_API_URL || "http://localhost:3000/api/graphql", // Keystone GraphQL API URL
            credentials: "include",
        }),
        cache: new InMemoryCache(),
    });
}

export const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: process.env.KEYSTONE_API_URL || "http://localhost:3000/api/graphql", // Keystone GraphQL API URL
        credentials: "include",
    }),
    cache: new InMemoryCache(),
});
