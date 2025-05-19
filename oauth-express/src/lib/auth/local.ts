// oauth-express/auth/local.ts
import { Strategy as LocalStrategy } from 'passport-local';
import {PassportStatic} from "passport";
import {fetchKeystoneUserByEmailAndPassword} from "../keystone";

export const initLocalStrategy = (passport: PassportStatic) => {
    passport.use(new LocalStrategy(
        { usernameField: 'email', passwordField: 'password' },
        async (email, password, done) => {
            try {
                const user = await fetchKeystoneUserByEmailAndPassword(email, password);
                if (!user) {
                    return done(null, false, { message: 'Invalid credentials' });
                }
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }
    ));
};
