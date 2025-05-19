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


