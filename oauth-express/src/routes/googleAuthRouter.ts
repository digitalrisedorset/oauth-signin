import express, { Application, Request, Response, NextFunction } from 'express'
import { config } from "../config";
import { corsOptions } from '../lib/cors-setup'
import {GoogleAuthHandler} from "../controller/google-auth-handler";

export const setupGoogleAuthRoutes = (app: Application) => {
    const router = express.Router()
    const options = corsOptions();
    router.use(options)

    const googleHandlerController = new GoogleAuthHandler()

    router.use('/', (req: Request, res: Response, next: NextFunction) => {
        console.log(`Google Auth request: ${req.url}`)
        next()
    })

    router.get("/auth", googleHandlerController.authenticate)

    router.get("/auth/callback", googleHandlerController.loginCallback)

    router.options('*', options);

    app.use(config.route.googleApiPrefix, router)
}