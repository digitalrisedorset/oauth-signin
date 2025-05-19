import {KeystoneUser} from "../../lib/keystone";

declare global {
    namespace Express {
        interface User extends KeystoneUser {}
    }
}