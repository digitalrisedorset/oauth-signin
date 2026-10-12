# oauth-signin
This project serves as a template to connect a Next.js frontend to KeystoneJS, following best practices for decoupled login and authentication.

## Context

I use KeystoneJS as the backend system across several React-based projects.
When I needed to introduce OAuth, I realized that while Keystone can handle everything internally, it would require embedding passport and OAuth logic directly into the Keystone backend.

Instead, I chose to decouple authentication from Keystone—giving me more flexibility, better security boundaries, and clearer separation of concerns.

## NextJS UI experience
At this time, it uses shadcn ui library, oauth/passport and the login ui presents an alternative to sign in / register.

## KeystoneJS login experience
Keystone can be configured to be secured. In this repository, the Keystone system is setup with 3 security measures:
- an API limiter to prevent abusive graphql usage
- a password validation to ensure the password field only accept secure password values
- an IP restriction setting to restrict keystone access

## Private widget APIs

The browser-facing CMSBlock and ListingRecord URLs are same-origin Next.js routes:

- /api/cmsblock/... forwards to CMSBlock.
- /api/listingrecord/... forwards to ListingRecord.

The proxy resolves the HTTP-only OAuth token with OAUTH_HOST on the server for each protected request. CMSBlock editing requires the cmseditor role. ListingRecord requests require seller; listing and product results and mutations are scoped to the authenticated seller. Public CMSBlock published content can be read without a session.

Run the services locally on their default ports (CMSBlock 4191, ListingRecord 4180) and set the server-only upstreams in nextjs-frontend/.env.local:

```dotenv
CMSBLOCK_API_INTERNAL_URL=http://127.0.0.1:4191
LISTINGRECORD_API_INTERNAL_URL=http://127.0.0.1:4180
```

Production should set the same variables to private service addresses reachable from the Next.js server. Do not expose the service ports publicly or put these upstreams in NEXT_PUBLIC_* variables. CMSBlock and ListingRecord do not provide application authentication themselves.

The CreateListing widget bundle must be built with VITE_LISTINGRECORD_URL=/api so it uses the ListingRecord proxy. Vite embeds this value in the bundle. Rebuild and publish that widget artifact with the setting before using the ListingRecord route from the demo.
