"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError(result.error);
        } else {
            router.push("/dashboard"); // Redirect on success
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Sign In</h1>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 w-72">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    required
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
                    Sign In
                </button>
            </form>

            <p className="my-4">Or</p>

            <button
                onClick={() => signIn("google")}
                className="w-full p-2 bg-red-500 text-white rounded-md"
            >
                Sign In with Google
            </button>

            <p className="mt-4">
                Don't have an account? <a href="/auth/register" className="text-blue-600">Register</a>
            </p>
        </div>
    );
}
