import {config} from "../config";

const cors = require("cors")

// https://brianflove.com/posts/2017-03-22-express-cors-typescript/
export const corsOptions = () => {
    const options = {
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'X-Access-Token',
            'Authorization'
        ],
        credentials: true,
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        origin: [config.frontendUrl],
        preflightContinue: false,
    };

    return cors(options)
}