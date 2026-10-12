"use client"

import {createContext, ReactNode, useCallback, useContext, useEffect} from "react";
import {useImmer} from "use-immer";
import type {UserAccess} from "@/app/types/keystone";

export type SessionUser = {
    id: string;
    email: string;
    name: string;
    access: UserAccess[];
};

export interface UserStateData {
    user: SessionUser | null | undefined;
}

interface UserState {
    user: SessionUser | null | undefined;
    refresh: () => Promise<void>;
}

const intialState: UserStateData = {
    user: undefined
}

const LocalStateContext = createContext<UserState | undefined>(undefined);
const LocalStateProvider = LocalStateContext.Provider;

interface UserStateProviderProps {
    children: ReactNode;
}

const UserStateProvider: React.FC<UserStateProviderProps> = ({ children }) => {
    const [state, setState] = useImmer<UserStateData>(intialState);

    const fetchUser = useCallback(async () => {
        const res = await fetch('/api/refresh-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
        const json = await res.json();

        const user = json.user as SessionUser | null | undefined;

        setState(draft => {
            draft.user = user
                ? { ...user, access: Array.isArray(user.access)
                    ? user.access.filter((access): access is UserAccess => access === 'seller' || access === 'cmseditor')
                    : [] }
                : null;
        });
    }, [setState]);

    useEffect(() => {
        void fetchUser();
    }, [fetchUser]);

    // Refresh the session after returning to the page to pick up Keystone
    // access changes. Server-side authorisation must still check fresh access.
    useEffect(() => {
        const refreshOnFocus = () => { void fetchUser(); };
        window.addEventListener('focus', refreshOnFocus);
        return () => window.removeEventListener('focus', refreshOnFocus);
    }, [fetchUser]);

    return <LocalStateProvider
        value={{
            refresh: fetchUser,
            user: state.user
        }}
    >{children}</LocalStateProvider>
}

function useUserState(): UserState {
    const context = useContext(LocalStateContext)
    if (!context) {
        throw new Error("useUserState must be used within a LocalStateProvider");
    }
    return context;
}

export { UserStateProvider, useUserState }