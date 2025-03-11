"use server";

import { createApolloClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

export async function loginUser(email: string, password: string) {
    try {
        const client = createApolloClient();
        const { data, errors } = await client.mutate({
            mutation: LOGIN_MUTATION,
            variables: { email, password },
        });

        if (errors || data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure") {
            return { error: "Invalid credentials" };
        }

        return { sessionToken: data.authenticateUserWithPassword.sessionToken, user: data.authenticateUserWithPassword.item };
    } catch (error) {
        console.error("❌ Internal Server Error:", error);
        return { error: "Internal server error" };
    }
}
