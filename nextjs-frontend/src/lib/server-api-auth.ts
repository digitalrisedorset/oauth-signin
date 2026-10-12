import { NextResponse } from "next/server";
import { fetchCookie } from "@/lib/cookie";

export type ApiUser = {
    id: string;
    access: string[];
};

type SessionResult =
    | { user: ApiUser | null; unavailable: false }
    | { user: null; unavailable: true };

export type RoleAuthorization =
    | { ok: true; user: ApiUser }
    | { ok: false; response: NextResponse };

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Resolve identity from the HTTP-only OAuth token cookie on the server. */
async function getSessionUser(): Promise<SessionResult> {
    const token = await fetchCookie("token");
    if (!token) return { user: null, unavailable: false };

    const oauthHost = process.env.OAUTH_HOST?.replace(/\/+$/, "");
    if (!oauthHost) return { user: null, unavailable: true };

    try {
        const response = await fetch(oauthHost + "/auth/refresh-session", {
            method: "POST",
            headers: { Authorization: "Bearer " + token },
            cache: "no-store",
            signal: AbortSignal.timeout(5000),
        });

        if (response.status === 401 || response.status === 403) {
            return { user: null, unavailable: false };
        }
        if (!response.ok) return { user: null, unavailable: true };

        const payload: unknown = await response.json();
        if (!isRecord(payload) || payload.user === null || payload.user === undefined) {
            return { user: null, unavailable: false };
        }
        if (
            !isRecord(payload.user) ||
            typeof payload.user.id !== "string" ||
            !payload.user.id.trim() ||
            !Array.isArray(payload.user.access)
        ) {
            return { user: null, unavailable: true };
        }

        const access = payload.user.access.filter((role): role is string => typeof role === "string");
        return { user: { id: payload.user.id, access }, unavailable: false };
    } catch {
        return { user: null, unavailable: true };
    }
}

export async function requireRole(role: string): Promise<RoleAuthorization> {
    const session = await getSessionUser();

    if (session.unavailable) {
        return {
            ok: false,
            response: NextResponse.json(
                { error: "Authentication service is unavailable." },
                { status: 503, headers: { "Cache-Control": "private, no-store" } },
            ),
        };
    }
    if (!session.user) {
        return {
            ok: false,
            response: NextResponse.json(
                { error: "Authentication required." },
                { status: 401, headers: { "Cache-Control": "private, no-store" } },
            ),
        };
    }
    if (!session.user.access.includes(role)) {
        return {
            ok: false,
            response: NextResponse.json(
                { error: "You do not have access to this API." },
                { status: 403, headers: { "Cache-Control": "private, no-store" } },
            ),
        };
    }

    return { ok: true, user: session.user };
}

/** Mutations use the app's cookie session, so reject cross-origin browser writes. */
export function hasSameOrigin(request: Request): boolean {
    const origin = request.headers.get("origin");
    if (!origin) return false;

    try {
        return new URL(origin).origin === new URL(request.url).origin;
    } catch {
        return false;
    }
}
