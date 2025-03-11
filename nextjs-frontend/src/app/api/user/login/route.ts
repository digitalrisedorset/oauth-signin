import { NextResponse } from "next/server";
import { gql } from "@apollo/client";
import { createApolloClient } from "@/lib/apolloClient";

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

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const client = createApolloClient();
        const { data, errors } = await client.mutate({
            mutation: LOGIN_MUTATION,
            variables: { email, password },
        });

        if (errors || data?.authenticateUserWithPassword.__typename === 'UserAuthenticationWithPasswordFailure') {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const sessionToken = data.authenticateUserWithPassword.sessionToken;
        if (!sessionToken || !sessionToken.includes(".")) {
            return NextResponse.json({ error: "Invalid JWT token received" }, { status: 500 });
        }

        console.log("✅ Authentication successful! Storing token...");

        // ✅ Set Secure HTTP-Only Cookie
        const response = NextResponse.json({
            message: "Login successful!",
            user: data.authenticateUserWithPassword.item,
        });

        response.cookies.set("auth_token", sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });

        return response;

    } catch (error) {
        console.error("❌ Internal Server Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
