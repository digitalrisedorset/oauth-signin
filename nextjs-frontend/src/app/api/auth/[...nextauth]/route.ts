import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";

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
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Please enter email and password");
                }

                const users = [
                    {
                        id: "1",
                        name: "John Doe",
                        email: "john@example.com",
                        password: bcrypt.hashSync("password123", 10),
                    },
                ];

                // Find user
                const user = users.find((u) => u.email === credentials.email);
                if (!user) {
                    throw new Error("No user found");
                }

                // Validate password
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("Invalid password");
                }

                return {id: user.id, name: user.name, email: user.email};
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub!;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
