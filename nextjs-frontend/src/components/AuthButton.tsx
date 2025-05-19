"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {apolloClient} from "@/lib/apolloClient";
import {useRouter} from "next/navigation";
import {useUserState} from "@/state/UserState";
import {useState} from "react";

export default function AuthButton() {
    const [loading, setLoading] = useState(false);
    const {user, refresh} = useUserState()
    const router = useRouter();

    const handleSignout = async () => {
        setLoading(true);
        await fetch('/api/logout');
        await apolloClient.clearStore();
        await refresh();
        router.push('/');
        setLoading(false);
    };

    const handleLogin = (e) => {
        e.preventDefault()
        window.location.href = '/api/login';
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
                            onClick={handleSignout}
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
