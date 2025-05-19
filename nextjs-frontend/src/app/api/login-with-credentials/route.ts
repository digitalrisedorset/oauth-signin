// pages/api/login-with-credentials.ts
import {setCookie} from "@/lib/cookie";
import {NextResponse} from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
    const { email, password } = await req.json();

    const response = await fetch(`${process.env.OAUTH_HOST}/local/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok || !result.token) {
        return NextResponse.json({ error: result.error || 'Login failed' }, { status: 401 });
    }

    return setCookie('token', result.token)
}
