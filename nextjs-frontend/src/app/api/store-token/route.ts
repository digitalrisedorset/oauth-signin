import {setCookie} from "@/lib/cookie";
import {NextResponse} from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
    const body = await req.json();
    const token = body.token;

    if (!token) {
        return NextResponse.json({ error: 'Missing token' }, { status: 400});
    }

    return setCookie('token', token)
}
