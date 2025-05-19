import {OAuthControllerInterface} from "./OAuthControllerInterface";
import {ErrorWrapper} from "../error-handler";
import passport from "passport";
import { Request, Response, NextFunction } from "express";
import { issueJwt } from "../lib/jwt";

export class GoogleAuthHandler implements OAuthControllerInterface {
    errorWrapper = new ErrorWrapper()

    authenticate = (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next)
    }

    loginCallback = (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('google', (err: unknown, user: any) => {
            if (err || !user) {
                return res.redirect('/')
            }

            const token = issueJwt(user)

            const redirectUrl = `${process.env.FRONTEND_HOST}/auth-callback?token=${token}`;
            res.redirect(redirectUrl);
        })(req, res, next)
    }
}