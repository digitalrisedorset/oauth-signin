import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { gql } from "@apollo/client";
import { createApolloClient } from "@/lib/apolloClient";
import {z} from "zod";
import {passwordMatchSchema} from "@/validation/passwordMatchSchema";

// Define TypeScript interface for request body
interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const REGISTER_MUTATION = gql`
  mutation RegisterUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      email
    }
  }
`;

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const { name, email, password, confirmPassword }: RegisterRequest = await req.json();

        const newUserSchema = z.object({
            name: z.string().min(2, "Name must be at least 2 characters"),
            email: z.string().email("Invalid email address"),
        }).and(passwordMatchSchema)

        const newUserValidation = newUserSchema.safeParse({
            name,
            email,
            password,
            confirmPassword
        });

        if (!newUserValidation.success) {
            return NextResponse.json(
                { error: `Have you checked the passwords` },
                { status: 400 }
            );
        }
        console.log('RegisterRequest success', { newUserValidation, name, email, password, confirmPassword })
        const client = createApolloClient();

        // 🔹 Check if user already exists
        const existingUser = await client.query({
            query: gql`
              query CheckUser($email: String!) {
                user(where: { email: $email }) { id }
              }
            `,
            variables: { email },
        });

        if (existingUser.data.user) {
            return NextResponse.json({ error: "Email already in use" }, { status: 400 });
        }

        // 🔹 Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 🔹 Create user in Keystone
        const { data } = await client.mutate({
            mutation: REGISTER_MUTATION,
            variables: {
                data: { name, email, password: hashedPassword },
            },
        });

        if (!data.createUser) {
            return NextResponse.json({ error: "Failed to register" }, { status: 500 });
        }

        console.log("✅ User Created Successfully:", data.createUser);
        return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });
    } catch (error) {
        console.error("❌ Internal Server Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
