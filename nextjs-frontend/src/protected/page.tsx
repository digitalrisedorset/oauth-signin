import { redirect } from "next/navigation";
import {useUserState} from "@/state/UserState";

export default async function ProtectedPage() {
    const {user, refresh} = useUserState()

    if (!user) {
        redirect("/auth/login");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
            <p>This is a protected page.</p>
        </div>
    );
}
