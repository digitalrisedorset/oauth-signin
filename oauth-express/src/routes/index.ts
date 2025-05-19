import {setupGoogleAuthRoutes} from "./googleAuthRouter"
import {Application} from "express";
import {setupGenericAuthRoutes} from "./genericAuthRouter";
import {setupLoginWithCredentialsRoutes} from "./loginWithCredentialsRouter";

export default (app: Application) => {
    setupGenericAuthRoutes(app)
    setupLoginWithCredentialsRoutes(app)
    setupGoogleAuthRoutes(app)
}