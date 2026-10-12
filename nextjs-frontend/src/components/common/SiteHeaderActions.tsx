"use client";

import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/useSignout";
import { useUserState } from "@/state/UserState";

export default function SiteHeaderActions() {
    const { user } = useUserState();
    const { signOut, loading } = useSignOut();

    if (user === undefined) {
        return (
            <div className="flex shrink-0 items-center justify-end text-sm text-muted-foreground" aria-live="polite">
                Checking session…
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex shrink-0 items-center justify-end">
                <Button asChild variant="link" size="sm">
                    <a href="/auth/login">Sign in</a>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex shrink-0 items-center justify-end gap-2">
            <span className="max-w-40 truncate text-sm text-muted-foreground" title={user.name}>
                {user.name}
            </span>
            <Button
                variant="link"
                size="sm"
                disabled={loading}
                onClick={signOut}
            >
                {loading ? "Signing out…" : "Sign out"}
            </Button>
        </div>
    );
}
