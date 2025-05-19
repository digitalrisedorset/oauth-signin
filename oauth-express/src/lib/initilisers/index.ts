import {Application} from "express";
import middleware from "../../middleware";
import routes from "../../routes";

export const initialiseApp = async (app: Application) => {
    middleware(app)
    routes(app)
}