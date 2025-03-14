import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    console.log("🛠️ Debugging Session:", session); // ✅ Debugging session data

    if (!session || !session.user) {
        redirect("/auth/login");
    }

    return <h1>Welcome {session.user.name}!</h1>;
}
