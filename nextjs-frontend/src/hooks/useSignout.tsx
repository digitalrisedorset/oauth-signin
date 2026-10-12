import {useState} from "react";

export function useSignOut() {
    const [loading, setLoading] = useState(false);

    const signOut = async () => {
        setLoading(true);

        try {
            const response = await fetch("/api/logout");
            if (!response.ok) {
                throw new Error("Sign out failed");
            }

            // A full navigation discards mounted widgets and their in-memory
            // editor state before the homepage is loaded as a guest.
            window.location.replace("/");
        } finally {
            setLoading(false);
        }
    };

    return { signOut, loading };
}
