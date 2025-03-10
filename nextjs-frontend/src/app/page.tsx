"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/AuthButton";

export default function HomePage() {
    const { data: session } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false); // Hide OAuth when signing in
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSigningIn(true); // Hide OAuth buttons

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError(result.error);
            setIsSigningIn(false); // Show OAuth again if failed
        } else {
            router.push("/dashboard"); // Redirect only on successful login
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 shadow-md rounded-lg w-full max-w-2xl">
                {/* 🔑 Email/Password Login Form */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Sign In with Email</h2>
                    {error && <p className="text-red-500 mb-2">{error}</p>}
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
                </div>

                {/* 🌍 OAuth Sign-In Options (Hidden when signing in via credentials) */}
                {!isSigningIn && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Or Sign In with OAuth</h2>
                        <AuthButton />
                        {/* Add more providers if needed */}
                    </div>
                )}
            </div>
        </div>
    );
}
