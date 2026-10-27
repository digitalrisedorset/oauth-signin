'use client';

import { redirect } from 'next/navigation';
import { useUserState } from '@/state/UserState';
import { useEffect } from 'react';
import Header from "@/components/common/Header";
import Editor from "@/components/common/Editor";

export default function Dashboard() {
    const { user } = useUserState();

    useEffect(() => {
        if (user === null) {
            redirect('/auth/login');
        }
    }, [user]);

    if (user === null) {
        return null;
    }

    return (
        <>
            <Header user={user} />
            <Editor />
        </>
    );
}