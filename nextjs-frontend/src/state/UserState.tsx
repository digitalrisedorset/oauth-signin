"use client"

import {createContext, ReactNode, useContext, useEffect} from "react";
import {useImmer} from "use-immer";

export type SessionUser = {
    id: string;
    email: string;
    name: string;
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

    const fetchUser = async () => {
        const res = await fetch('/api/refresh-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
        const json = await res.json();
        setState(draft => { draft.user = json.user || null });
    };

    useEffect(() => {
        fetchUser();
    }, []);


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