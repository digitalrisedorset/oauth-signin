// /pages/api/logout.ts
import {NextResponse} from "next/server";
import {clearCookie} from "@/lib/cookie";

export async function GET(req: Request): Promise<NextResponse> {
    return clearCookie('token')
}
