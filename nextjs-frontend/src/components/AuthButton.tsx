"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function AuthButton() {
    const { data: session } = useSession();

    return (
        <Card className="w-full">
            {session ? (
                <>
                    <CardHeader>
                        <CardTitle>{session.user?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button
                            onClick={() => signOut()}
                            className="w-full bg-red-500 hover:bg-red-600"
                        >
                            Sign Out
                        </Button>
                    </CardContent>
                </>
            ) : (
                <>
                    <CardHeader>
                        <CardTitle>Or Sign In with OAuth</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button
                            onClick={() => signIn("google")}
                            className="w-full bg-red-500 hover:bg-red-600"
                        >
                            Sign In with Google
                        </Button>
                    </CardContent>
                </>
            )}
        </Card>
    );
}
