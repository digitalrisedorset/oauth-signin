'use client';

import { redirect } from 'next/navigation';
import { useUserState } from '@/state/UserState';
import { useEffect } from 'react';
import Header from "@/components/common/Header";
import Main from "@/components/common/Main";
import Usp from "@/components/reactedge/Usp";

export default function DashboardPage() {
    const { user } = useUserState();

   useEffect(() => {
        if (!user) {
            redirect('/auth/login');
        }
    }, [user]);

    if (!user) return null;

    return <>
            <Usp />
            <Header user={user} />
            <Main />
        </>
}
