import { NextResponse } from "next/server";
import { destroySession } from "@/lib/authSession";

export async function POST() {
    await destroySession();
    return NextResponse.json({ message: "Logged out successfully" });
}
