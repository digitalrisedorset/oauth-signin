// /pages/api/refresh-session.ts
import {fetchCookie} from "@/lib/cookie";
import {NextResponse} from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const token = await fetchCookie('token')

        const response = await fetch(`${process.env.OAUTH_HOST}/auth/refresh-session`, {
            method: 'POST',
            headers: token ? { Authorization: `Bearer ${token}` } : {},
            credentials: 'include',
        });

        const json = await response.json();
        return NextResponse.json(json, { status: 200 });
    } catch (err) {
        console.error('Failed to fetch user from oauth-express:', err);
        return NextResponse.json({ user: null, error: 'Failed to retrieve session' }, { status: 500 });
    }
}
