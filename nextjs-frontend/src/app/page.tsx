"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthButton from "@/components/AuthButton";
import {useUserState} from "@/state/UserState";
import {apolloClient} from "@/lib/apolloClient";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function HomePage() {
    const {user, refresh} = useUserState()
    const router = useRouter();
    const [isSigningIn, setIsSigningIn] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { email: "", password: "" },
    });

    async function handleSubmit(values: { email: string; password: string }) {
        setIsSigningIn(true);

        const result = await fetch('/api/login-with-credentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
        });

        const res = await result.json()

        if (!res?.success) {
            form.setError("password", { message: res.error });
            setIsSigningIn(false);
        } else {
            refresh()
            router.push("/dashboard");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                {/* 🔑 Email/Password Login Form */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Sign In with Email</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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

                                <Button type="submit" className="w-full" disabled={isSigningIn}>
                                    {isSigningIn ? "Signing In..." : "Sign In"}
                                </Button>
                            </form>
                        </Form>

                        <p className="mt-4 text-sm">
                            Don't have an account?{" "}
                            <a href="/auth/register" className="text-blue-600 font-semibold">
                                Register
                            </a>
                        </p>
                    </CardContent>
                </Card>

                {/* 🌍 OAuth Sign-In Options (Hidden when signing in via credentials) */}
                {!isSigningIn && (
                    <AuthButton />
                )}
            </div>
        </div>
    );
}
