import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: process.env.KEYSTONE_API_URL || "http://localhost:3000/api/graphql", // Keystone GraphQL API URL
            headers: {
                "Content-Type": "application/json",
            },
        }),
        cache: new InMemoryCache(),
    });
}
