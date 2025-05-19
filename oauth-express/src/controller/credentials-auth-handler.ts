import {OAuthControllerInterface} from "./OAuthControllerInterface";
import {ErrorWrapper} from "../error-handler";
import passport from "passport";
import { Request, Response, NextFunction } from "express";
import { issueJwt } from "../lib/jwt";

export class LoginWithCredentialsHandler implements OAuthControllerInterface {
    errorWrapper = new ErrorWrapper()

    authenticate = (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('local', (err: unknown, user: any, info: any) => {
            if (err || !user) {
                return res.status(401).json({ error: info?.message || 'Login failed' })
            }

            const token = issueJwt(user)

            res.json({ token, user })
        })(req, res, next)
    }
    loginCallback = (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('local', (err: unknown, user: any, info: any) => {
            if (err || !user) {
                return res.status(401).json({ error: info?.message || 'Login failed' })
            }

            const token = issueJwt(user)

            res.json({ token, user })
        })(req, res, next)
    }
}