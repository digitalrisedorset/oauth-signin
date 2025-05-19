import {Application} from "express";
import passport from "passport";
import {initLocalStrategy} from "../lib/auth/local";
import {initGoogleStrategy} from "../lib/auth/google";
import {initPassport} from "../lib/auth/passport";

export const setupPassport = (app: Application) => {
    app.use(passport.initialize())
    app.use(passport.session())

    initLocalStrategy(passport);
    initGoogleStrategy(passport);
    initPassport(passport);
}