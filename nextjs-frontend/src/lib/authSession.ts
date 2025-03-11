import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

// Define session structure
export interface UserSession {
    id: string;
    email: string;
    isAdmin: boolean;
}

// Define session options
const sessionOptions = {
    cookieName: "keystone-auth-session",
    password: process.env.SESSION_SECRET as string, // Secret key (store in .env)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production", // Secure in production
        httpOnly: true, // Prevents JavaScript access (XSS protection)
        sameSite: "strict", // Prevents CSRF attacks
    },
};

// Function to get session
export async function getSession(user: UserSession) {
    const session = await getIronSession<UserSession>(cookies(), sessionOptions);
    session.id = user.id;
    session.email = user.email;
    session.isAdmin = user.isAdmin;
    await session.save();
    return session;
}

// Function to destroy session (Logout)
export async function destroySession() {
    const session = await getIronSession<UserSession>(cookies(), sessionOptions);
    session.destroy();
}
