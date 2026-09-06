"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useUserState} from "@/state/UserState";
import {useSignOut} from "@/hooks/useSignout";
import type { MouseEvent } from "react";

export default function AuthButton() {
    const {user} = useUserState()
    const { signOut, loading } = useSignOut();

    const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.location.href = "/api/login";
    };

    return (
        <Card className="w-full">
            {user ? (
                <>
                    <CardHeader>
                        <CardTitle>{user?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button
                            disabled={loading}
                            onClick={signOut}
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
                            onClick={handleLogin}
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
