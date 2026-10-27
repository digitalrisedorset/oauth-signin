// /pages/api/refresh-session.ts
import {fetchCookie} from "@/lib/cookie";
import {NextResponse} from "next/server";

export async function POST(): Promise<NextResponse> {
    try {
        const token = await fetchCookie('token')

        const response = await fetch(`${process.env.OAUTH_HOST}/auth/refresh-session`, {
            method: 'POST',
            headers: token ? { Authorization: `Bearer ${token}` } : {},
            credentials: 'include',
            cache: 'no-store',
        });

        const json = await response.json();
        return NextResponse.json(response.ok ? json : { user: null }, {
            status: response.status,
            headers: { 'Cache-Control': 'private, no-store' },
        });
    } catch (err) {
        console.error('Failed to fetch user from oauth-express:', err);
        return NextResponse.json({ user: null, error: 'Failed to retrieve session' }, {
            status: 500,
            headers: { 'Cache-Control': 'private, no-store' },
        });
    }
}
