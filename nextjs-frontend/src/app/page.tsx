"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/AuthButton";

export default function HomePage() {
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
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>

            <div className="bg-white p-6 shadow-md rounded-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Sign In</h2>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                {/* 🔑 Email/Password Sign In Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
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

                <p className="mt-4 text-sm">
                    Don't have an account?{" "}
                    <a href="/auth/register" className="text-blue-600 font-semibold">
                        Register
                    </a>
                </p>

                {/* 🔽 Divider */}
                <div className="my-6 flex items-center">
                    <div className="border-t w-full"></div>
                    <span className="mx-4 text-gray-500">OR</span>
                    <div className="border-t w-full"></div>
                </div>

                <AuthButton />
            </div>
        </div>
    );
}
