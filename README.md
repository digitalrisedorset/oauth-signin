# oauth-signin
This project is meant to be a template to connect a NextJS frontend to Keystone with best practices to login.
The context for this repository is that I use KeystoneJS as a backend system in my react systems. Therefore, I want Keystone to be as 
secure as possible.

Also, I setup NextJS with CORS rule to only allow KeystoneJS to be responding to the NextJS frontend. But CORS is not enough so I have also
added various combinations between keystones advanced settings and NextJS server actions interacting with NextAuth

## NextJS UI experience
At this time, it uses shadcn ui library, oauth and the login ui presents an alternative to sign in / register. 

## KeystoneJS login experience
Keystone can be configured to be secured. In this repository, the Keystone system is setup with 3 security measures:
- an API limiter to prevent abusive admin login attempts
- a password validation to ensure the password field only accept secure password values
- an IP restriction setting to restrict keystone access 


