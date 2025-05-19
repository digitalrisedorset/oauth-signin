// auth/passport.ts
import {PassportStatic} from "passport";
import {KeystoneUser} from "../keystone";

export const initPassport = (passport: PassportStatic) => {
    passport.serializeUser((user, done) => {
        done(null, user); // store the full user object
    });

    passport.deserializeUser((user: KeystoneUser, done) => {
        done(null, user); // restore user into req.user
    });
};
