import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import {gql} from "@apollo/client";
import {createApolloClient} from "@/lib/apolloClient";

const LOGIN_MUTATION = gql`
  mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                const client = createApolloClient();
                const { email, password } = credentials;

                const { data } = await client.mutate({
                    mutation: LOGIN_MUTATION,
                    variables: { email, password },
                });

                if (!data || data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure") {
                    throw new Error("Invalid credentials");
                }

                // ✅ Return user session data
                return {
                    id: data.authenticateUserWithPassword.item.id,
                    name: data.authenticateUserWithPassword.item.name,
                    email: data.authenticateUserWithPassword.item.email,
                    sessionToken: data.authenticateUserWithPassword.sessionToken,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.sessionToken = user.sessionToken; // ✅ Store Keystone session token
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.sub!;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt", // ✅ Use JWT for session management
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };