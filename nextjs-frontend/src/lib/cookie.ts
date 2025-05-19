import { cookies } from 'next/headers';
import {serialize} from "cookie";
import {NextResponse} from "next/server";

export const fetchCookie = async (cookieName: string) => {
    const cookieStore = await cookies();
    const cookie = await cookieStore.get(cookieName);

    return cookie?.value;
}

export const setCookie = (cookieName: string, value: string) => {
    const serialized = serialize(cookieName, value, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
    });

    return createCookieResponse(serialized);
}

export const clearCookie = (cookieName: string) => {
    const serialized = serialize(cookieName, '', {
        httpOnly: true,
        expires: new Date(0),
        path: '/',
    });

    return createCookieResponse(serialized);
}

const createCookieResponse = (serialized: string) => {
    return new NextResponse(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
            'Set-Cookie': serialized,
            'Content-Type': 'application/json',
        },
    });
}