import 'express-session';
import {KeystoneUser} from "../lib/keystone";

declare module 'express-session' {
    interface SessionData {
        passport: {
            user?: KeystoneUser
        }
    }
}
