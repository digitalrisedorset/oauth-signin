'use client';

import { redirect } from 'next/navigation';
import { useUserState } from '@/state/UserState';
import { useEffect } from 'react';

export default function DashboardPage() {
    const { user } = useUserState();

    useEffect(() => {
        if (!user) {
            redirect('/auth/login');
        }
    }, [user]);

    if (!user) return null; // avoid flicker

    return <h1>Welcome {user.name}!</h1>;
}
