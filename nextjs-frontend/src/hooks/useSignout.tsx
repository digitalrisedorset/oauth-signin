import {useState} from "react";
import {useUserState} from "@/state/UserState";
import {useRouter} from "next/navigation";
import {apolloClient} from "@/lib/apolloClient";

export function useSignOut() {
    const [loading, setLoading] = useState(false);
    const { refresh } = useUserState();
    const router = useRouter();

    const signOut = async () => {
        setLoading(true);

        try {
            await fetch("/api/logout");
            await apolloClient.clearStore();
            await refresh();
            router.push("/");
        } finally {
            setLoading(false);
        }
    };

    return { signOut, loading };
}