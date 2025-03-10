"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
    const { data: session } = useSession();

    return (
        <div className="flex items-center gap-4">
            {session ? (
                <>
                    <p className="text-sm font-semibold">{session.user?.name}</p>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                </>
            ) : (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => signIn("google")}
                >
                    Sign In with Google
                </button>
            )}
        </div>
    );
}
