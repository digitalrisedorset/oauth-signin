import dotenv from 'dotenv';
dotenv.config();

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required');
}

export type configInfo = {
    port: number;
    googleClientId: string;
    googleClientSecret: string;
    keystone: {
        graphqlUrl: string;
        serviceToken: string;
    },
    frontendUrl: string;
    route: {
        genericApiPrefix: string;
        googleApiPrefix: string;
        credentialsApiPrefix: string;
    },
    jwtSecret: string;
    sessionSecret: string;
}

export const config: configInfo = {
    port: (process.env.PORT === undefined)? 3002: Number(process.env.PORT),
    frontendUrl: (process.env.FRONTEND_URL === undefined)?'http://localhost:3001':process.env.FRONTEND_URL,
    googleClientId: (process.env.GOOGLE_CLIENT_ID === undefined)? 'client63839394': process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: (process.env.GOOGLE_CLIENT_SECRET === undefined)? 'client63839394_secret': process.env.GOOGLE_CLIENT_SECRET,
    jwtSecret: process.env.JWT_SECRET!,
    sessionSecret: (process.env.SESSION_SECRET === undefined)? 'session_secret': process.env.SESSION_SECRET,
    keystone: {
        graphqlUrl: (process.env.KEYSTONE_GRAPHQL_URL === undefined)?'http://localhost:3000/api/graphql':process.env.KEYSTONE_GRAPHQL_URL,
        serviceToken: (process.env.KEYSTONE_SERVICE_TOKEN === undefined)?'token':process.env.KEYSTONE_SERVICE_TOKEN,
    },
    /**
     * Routes access
     */
    route: {
        genericApiPrefix: '/auth',
        googleApiPrefix: '/google',
        credentialsApiPrefix: '/local'
    },
}



