// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core'

// to keep this file tidy, we define our schema in a different file
import { lists } from './schema'

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth'
import {limiter} from "./rate-limiter";
import {extendGraphqlSchema} from "./schema/User";

const dotenv = require('dotenv');
dotenv.config();

export default withAuth(
  config({
      server: {
          cors: { origin: [process.env.FRONTEND_HOST, process.env.OAUTH_HOST], credentials: true },
          port: process.env.BACKEND_PORT,
          maxFileSize: 200 * 1024 * 1024,
          // extendExpressApp: (app) => {
          //     //app.use("/api/graphql", limiter); // Apply rate limiter to API*/
          //
          //     // 🔹 Reset Rate Limits (For Testing)
          //     // app.get("/reset-rate-limit", (req, res) => {
          //     //     limiter.resetKey(req.ip); // ✅ Reset limit for current IP
          //     //     res.send("✅ Rate limit reset for your IP!");
          //     // });
          //
          //     app.use((req, res, next) => {
          //         const allowedIPs = [process.env.ALLOWED_IPS]; // ✅ Replace with your actual IPs
          //         const clientIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
          //
          //         if (!allowedIPs.includes(clientIP)) {
          //             return res.status(403).send("Access Denied: Unauthorized IP Address");
          //         }
          //
          //         console.log(`🔍 API Request: ${req.method} ${req.path}`);
          //         next();
          //     });
          // },
      },
      graphql: {
          playground: process.env.NODE_ENV !== "production", // ❌ Disable Playground in production
          introspection: process.env.NODE_ENV !== "production", // ❌ Prevent schema exposure
          extendGraphqlSchema,
      },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    lists,
      ui: {
          /*isAccessAllowed: () => true // for local dev*/
          isAccessAllowed: ({ req }) => {
              return req.headers.authorization === `Bearer ${process.env.KEYSTONE_SERVICE_TOKEN}`;
          }
      },
    session,
  })
)
