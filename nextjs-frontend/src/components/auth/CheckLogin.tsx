'use client';

import { redirect } from 'next/navigation';
import { useUserState } from '@/state/UserState';
import {type ReactNode, useEffect} from 'react';

type GateLoginProps = {
    children: ReactNode;
};

export default function CheckLogin({ children }: GateLoginProps) {
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
            {children}
        </>
    );
}