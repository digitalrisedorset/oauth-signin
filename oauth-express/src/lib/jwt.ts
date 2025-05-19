import jwt from 'jsonwebtoken';
import { KeystoneUser } from './keystone';
import {NextFunction, Request, Response} from "express";

export const issueJwt = (user: KeystoneUser): string => {
    const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        provider: user.provider
    };

    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7d' });
}

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'] as string | undefined;

    if (authHeader === undefined || !authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Missing or invalid token' });
        return
    }

    try {
        const token = authHeader.split(' ')[1];
        if (token === undefined) {
            res.status(401).json({ error: 'Missing or invalid token' });
            return
        }
        req.user = jwt.verify(token, process.env.JWT_SECRET!) as KeystoneUser
        next();
    } catch {
        res.status(403).json({ error: 'Invalid token' });
    }
};