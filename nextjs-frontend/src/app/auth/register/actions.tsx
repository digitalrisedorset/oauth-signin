"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/lib/apolloClient";
import { z } from "zod";
import { passwordMatchSchema } from "@/validation/passwordMatchSchema";

const REGISTER_MUTATION = gql`
  mutation RegisterUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      email
    }
  }
`;

const CHECK_USER_QUERY = gql`
  query CheckUser($email: String!) {
    users(where: { email: { equals: $email } }) {
      id
    }
  }
`;

const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
}).and(passwordMatchSchema);

export async function registerUser(name: string, email: string, password: string, confirmPassword: string) {
    // ✅ Validate Input with Zod
    const validation = registerSchema.safeParse({ name, email, password, confirmPassword });

    if (!validation.success) {
        return { error: validation.error.errors[0].message };
    }

    try {
        const client = createApolloClient();

        const existingUser = await client.query({
            query: CHECK_USER_QUERY,
            variables: { email },
        });

        if (existingUser.data.users.length > 0) {
            return { error: "Email already in use" };
        }

        // 🔹 Create user in Keystone
        const { data } = await client.mutate({
            mutation: REGISTER_MUTATION,
            variables: {
                data: { name, email, password },
            },
        });

        if (!data.createUser) {
            return { error: "Failed to register" };
        }
    } catch (error) {
        console.error("❌ Registration Error:", error);
        return { error: "Internal server error" };
    }
}
