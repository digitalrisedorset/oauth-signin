// src/types/express/index.d.ts
import {KeystoneUser} from "../lib/keystone";

declare module 'express-serve-static-core' {
    interface Request {
        user?: KeystoneUser;
    }
}
