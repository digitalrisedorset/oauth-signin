import { Button } from "@/components/ui/button";
import {useSignOut} from "@/hooks/useSignout";
import {UserStateData} from "@/state/UserState";

export default function Header({ user }: UserStateData) {
    const { signOut, loading } = useSignOut();

    if (!user) return null;

    return (
        <header className="flex h-16 items-center justify-between border-b px-6">
            <div className="font-semibold">
                ReactEdge
            </div>

            <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                    {user.name}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    disabled={loading}
                    onClick={signOut}
                >
                    {loading ? "Signing out..." : "Sign Out"}
                </Button>
            </div>
        </header>
    );
}