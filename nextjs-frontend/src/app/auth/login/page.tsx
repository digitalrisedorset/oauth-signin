"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthButton from "@/components/AuthButton";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
    const router = useRouter();
    const [isSigningIn, setIsSigningIn] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { email: "", password: "" },
    });

    async function handleSubmit(values: { email: string; password: string }) {
        setIsSigningIn(true);

        const result = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if (result?.error) {
            form.setError("password", { message: result.error });
            setIsSigningIn(false);
        } else {
            router.push("/dashboard");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Sign In</h1>

            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
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

                    <div className="my-4 flex items-center">
                        <div className="border-t w-full"></div>
                        <span className="mx-4 text-gray-500">OR</span>
                        <div className="border-t w-full"></div>
                    </div>

                    {/* 🌍 OAuth Sign-In */}
                    {!isSigningIn && <AuthButton />}
                </CardContent>
            </Card>
        </div>
    );
}
