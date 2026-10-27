"use client"

import {Suspense, useEffect, useRef} from 'react';
import {useUserState} from "@/state/UserState";
import {useRouter} from "next/navigation";
import {useQueryParam} from "@/hooks/useQueryParam";
import AccessAuthorised from "@/components/common/AccessAuthorised";

function AuthCallbackContent() {
    const router = useRouter();
    const token = useQueryParam('token');
    const processedToken = useRef<string | null>(null);
    const { refresh } = useUserState();

    useEffect(() => {
        if (!token || processedToken.current === token) {
            return;
        }

        processedToken.current = token;

        async function storeToken() {
            try {
                const response = await fetch('/api/store-token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ token }),
                });

                if (!response.ok) {
                    throw new Error(`Unable to store token: ${response.status}`);
                }

                await refresh();
                router.replace('/dashboard');
            } catch (error) {
                processedToken.current = null;
                console.error("Authentication callback failed:", error);
            }
        }

        void storeToken();
    }, [token, refresh, router]);

    return <AccessAuthorised />;
}

export default function AuthCallback() {
    return (
        <Suspense fallback={<div>Processing authentication…</div>}>
            <AuthCallbackContent />
        </Suspense>
    );
}