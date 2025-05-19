import {NextFunction, Request, Response} from "express";

export interface OAuthControllerInterface {
    authenticate: (req: Request, res: Response, next: NextFunction) => void;

    loginCallback: (req: Request, res: Response, next: NextFunction) => void;
}
