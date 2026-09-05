import { Button } from "@/components/ui/button";
import {useSignOut} from "@/hooks/useSignout";

interface HeaderProps {
    user: {
        name: string;
    };
}

export default function Header({ user }: HeaderProps) {
    const { signOut, loading } = useSignOut();

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