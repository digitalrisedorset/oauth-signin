"use client"

import { useEffect } from 'react';
import {useUserState} from "@/state/UserState";
import {useRouter} from "next/navigation";
import {getUrlParam} from "@/lib/query-param";

export default function AuthCallback() {
    const router = useRouter();
    const token = getUrlParam('token');
    const {refresh} = useUserState()

    useEffect(() => {
        if (token) {
            fetch('/api/store-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ token }),
            }).then(() => {
                refresh()
                router.push('/dashboard');
            });
        }
    }, [token]);

    return <p>Logging in...</p>;
}