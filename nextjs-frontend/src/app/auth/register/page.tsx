"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs"; // For password hashing (Use backend DB instead in production)

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Mock saving user (Replace with actual DB/API call)
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Saving user:", { name, email, hashedPassword });

        setSuccess("Account created! You can now sign in.");
        setTimeout(() => router.push("/"), 2000); // Redirect after 2s
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Create an Account</h1>

            <div className="bg-white p-6 shadow-md rounded-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Register</h2>

                {error && <p className="text-red-500 mb-2">{error}</p>}
                {success && <p className="text-green-500 mb-2">{success}</p>}

                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
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
                    <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">
                        Register
                    </button>
                </form>

                <p className="mt-4 text-sm">
                    Already have an account?{" "}
                    <a href="/" className="text-blue-600 font-semibold">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
}
