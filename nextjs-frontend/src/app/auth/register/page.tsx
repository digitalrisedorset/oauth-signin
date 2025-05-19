"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {passwordMatchSchema} from "@/validation/passwordMatchSchema";
import {Loading} from "@/app/global/Loading";
import {registerUser} from "@/app/auth/register/actions";

const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
}).and(passwordMatchSchema)

export default function RegisterPage() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [isRegistering, setIsRegistering] = useState(false);

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    async function handleRegister(values) {
        setError(null);
        setIsRegistering(true)

        const res = await registerUser(values.name, values.email, values.password, values.confirmPassword);

        if (res?.error) {
            console.log("❌ Registration failed:", res.error);
            setError(res.error);
            setIsRegistering(false)
        } else {
            setTimeout(() => router.push("/"), 1000);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Create an Account</h1>

            <Card className={`w-full max-w-md ${isRegistering? "opacity-70" : ""}`}>
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    {isRegistering && <Loading />}
                    {error && <p className="text-red-500">{error}</p>}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-4">
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

                            <Button type="submit" disabled={isRegistering} className="w-full">
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
