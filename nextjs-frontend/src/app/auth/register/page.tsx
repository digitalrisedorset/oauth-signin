"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import bcrypt from "bcryptjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// 🔹 Updated Zod Schema: Requires confirmPassword to match password
const formSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"], // Attach error to the confirmPassword field
    });

export default function RegisterPage() {
    const router = useRouter();
    const [success, setSuccess] = useState<string | null>(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
    });

    async function handleRegister(values: { name: string; email: string; password: string }) {
        setSuccess(null);

        // Mock saving user (Replace with real API call)
        const hashedPassword = await bcrypt.hash(values.password, 10);
        console.log("Saving user:", { name: values.name, email: values.email, hashedPassword });

        setSuccess("Account created! Redirecting...");
        setTimeout(() => router.push("/"), 2000);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Create an Account</h1>

            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    {success && <p className="text-green-500 mb-2">{success}</p>}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-4">
                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password Field */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Confirm Password Field */}
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Confirm your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full">
                                Register
                            </Button>
                        </form>
                    </Form>

                    <p className="mt-4 text-sm text-center">
                        Already have an account?{" "}
                        <a href="/auth/login" className="text-blue-600 font-semibold">
                            Sign In
                        </a>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
