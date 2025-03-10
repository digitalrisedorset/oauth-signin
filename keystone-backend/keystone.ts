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

export default withAuth(
  config({
      server: {
          extendExpressApp: (app) => {
              //app.use("/api/graphql", limiter); // Apply rate limiter to API*/

              // 🔹 Reset Rate Limits (For Testing)
              // app.get("/reset-rate-limit", (req, res) => {
              //     limiter.resetKey(req.ip); // ✅ Reset limit for current IP
              //     res.send("✅ Rate limit reset for your IP!");
              // });

              app.use((req, res, next) => {
                  const allowedIPs = [process.env.ALLOWED_IPS]; // ✅ Replace with your actual IPs
                  const clientIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

                  if (!allowedIPs.includes(clientIP)) {
                      return res.status(403).send("Access Denied: Unauthorized IP Address");
                  }

                  console.log(`🔍 API Request: ${req.method} ${req.path}`);
                  next();
              });
          },
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
          /*isAccessAllowed: ()=> true,*/
          // only admins can view the AdminUI
          isAccessAllowed: (context) => {
              return context.session?.data?.isAdmin ?? false
          },
      },
    session,
  })
)
