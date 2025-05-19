import {setupJsonBodyParse} from "./jsonParser";
import {Application} from "express";
import {setupSession} from "./session";
import {setupPassport} from "./passport";

export default (app: Application) => {
    setupJsonBodyParse(app)
    setupSession(app)
    setupPassport(app)
}