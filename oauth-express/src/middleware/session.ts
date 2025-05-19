import {Application} from "express";
import session from "express-session";

export const setupSession = (app: Application) => {
    app.use(session({
        secret: process.env.SESSION_SECRET!,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false, // true if using HTTPS in prod
            sameSite: 'lax', // or 'none' if cross-site
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        }
    }));
}