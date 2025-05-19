import express, { Application, Request, Response, NextFunction } from 'express'
import { config } from "../config";
import { corsOptions } from '../lib/cors-setup'
import {LoginWithCredentialsHandler} from "../controller/credentials-auth-handler";

export const setupLoginWithCredentialsRoutes = (app: Application) => {
    const router = express.Router()
    const options = corsOptions();
    router.use(options)

    const credentialsLoginHandlerController = new LoginWithCredentialsHandler()

    router.use('/', (req: Request, res: Response, next: NextFunction) => {
        console.log(`Login With Credentials request: ${req.url}`)
        next()
    })

    router.post("/auth", credentialsLoginHandlerController.authenticate)

    router.options('*', options);

    app.use(config.route.credentialsApiPrefix, router)
}