# Short-lived JWT renewal — test-first implementation plan

Status: **planning only; no authentication behaviour changes in this document.**

Scope: `oauth-express` (Passport + JWT), `nextjs-frontend` (HttpOnly cookie + ReactEdge user state), and Keystone user lookup. Related ReactEdge widgets receive **presentation-only** access; server endpoints remain responsible for authorisation.

## Why

We want to limit the usefulness of a stolen access JWT without forcing the user to log in every three minutes. A **3-minute JWT** is a proposed target, **not yet configured**. The browser should be able to reload a page and remain signed in while a longer-lived, revocable, trusted server-side renewal session remains valid. Refresh should happen only when necessary (on expiry/near expiry), not blindly on every page load.

**Two distinct operations must not be confused:**

- **Identity/profile refresh**: re-read current user and `access` from Keystone to update the UI.
- **Credential renewal**: issue a *new* JWT using an independently validated, revocable renewal credential/session.

`cache: 'no-store'` prevents server-side fetch cache reuse; it does **not** renew JWTs or trigger a session check.

## What the current code actually does (baseline)

| Component | Current behaviour | Evidence in repository |
|---|---|---|
| Passport JWT issuer | Signs access JWT for `7d` | `oauth-express/src/lib/jwt.ts` |
| Passport guard | `verifyJwt` requires a valid Bearer token; expired token gets HTTP 403 | `oauth-express/src/lib/jwt.ts` and `src/routes/genericAuthRouter.ts` |
| Passport refresh-session | Reads latest Keystone user profile but does **not** return a new JWT | `oauth-express/src/controller/generic-auth-handler.ts` |
| Next.js token cookie | HttpOnly `token`, maximum age **1 day**; cookie expiry does not extend JWT validity | `nextjs-frontend/src/lib/cookie.ts` |
| Next.js session endpoint | Forwards the existing token to Passport; it cannot repair an expired token | `nextjs-frontend/src/app/api/refresh-session/route.ts` |
| Next.js user state | Fetches profile on mount and when tab regains focus; `access` reaches ReactEdge as UI context | `nextjs-frontend/src/state/UserState.tsx` |
| Logout | Next.js clears its token cookie; no durable server-side refresh-session revocation exists | `nextjs-frontend/src/app/api/logout/route.ts` |

**Observed in source, not a completed runtime reproduction.** With the existing hard-coded 7-day token the expiry failure will not naturally occur within a quick manual test. Short-lived **test-only** tokens or an injected clock are required.

### Reproduce the missing renewal today (local development only)

Prerequisites: running Keystone, `oauth-express` (usually `http://localhost:3002`) and Next.js (usually `http://localhost:3001`); local `oauth-express/.env` with `JWT_SECRET`; an **existing test Keystone User.id**. Do **not** print, commit or share tokens or secrets.

1. From `oauth-express/`, create a JWT valid for only two seconds using the **existing local JWT signing key**; this is a test fixture, not a code/configuration change:

   ```bash
   export TEST_USER_ID='YOUR_EXISTING_TEST_KEYSTONE_USER_ID'
   TEST_JWT="$(node -e 'require("dotenv").config(); const jwt=require("jsonwebtoken"); const id=process.env.TEST_USER_ID; const secret=process.env.JWT_SECRET; if (!id || !secret) process.exit(1); process.stdout.write(jwt.sign({id}, secret, {expiresIn:"2s"}));')"
   ```

2. Immediately call the Passport profile-refresh endpoint while the JWT is valid:

   ```bash
   curl -sS -i -X POST http://localhost:3002/auth/refresh-session \
     -H "Authorization: Bearer $TEST_JWT"
   ```

   Expected before the fix: HTTP 200 with `{"user":...}` (for an existing test user), **no renewed access token**. If the request races the two-second expiry, re-create the test token with `expiresIn:"10s"` and wait longer in step 3. Use a local/isolated test environment.

3. After that token expires, repeat the same request:

   ```bash
   sleep 3
   curl -sS -i -X POST http://localhost:3002/auth/refresh-session \
     -H "Authorization: Bearer $TEST_JWT"
   ```

   Expected before **and after** the fix: HTTP 403, because an expired bearer token by itself must never allow renewal.

4. To confirm the Next.js symptom, pass the same expired JWT **as a test cookie**:

   ```bash
   curl -sS -i -X POST http://localhost:3001/api/refresh-session \
     -H "Cookie: token=$TEST_JWT"
   ```

   Expected today: HTTP 403 and `{"user":null}` (not a new login). There is **no separate valid renewal credential** in this fixture, so **this negative test must still fail after the fix**. The intended successful renewal path must be tested with a *real logged-in browser session* carrying valid server-managed renewal state.

5. Clean up local shell variables: `unset TEST_JWT TEST_USER_ID`.

**Do not interpret a successful profile refresh in step 2 as JWT renewal.** The distinction is whether a new short-lived credential is issued and subsequently accepted.

## Tasks — in implementation order

- [ ] **T1 — Capture RED tests first.** Add automated tests for expired JWT rejection, no replacement token from current `refresh-session`, and browser session loss when the only credential expires. Keep current 7-day production behaviour unchanged while establishing the failing case.
- [ ] **T2 — Agree minimal renewal/session contract.** Target 3-minute access JWT and retain the existing 1-day *browser* sign-in horizon initially, subject to a real server-side session lifetime. Decide the trusted renewal credential and its revocation storage before coding. **An expired JWT alone must never be sufficient to mint another.** Do not treat the existing `express-session` cookie as automatically authenticated: current Passport callbacks do not explicitly establish a login session.
- [ ] **T3 — Implement one central server-side renewal path.** After login, establish a securely stored, revocable, server-managed renewal session (opaque HttpOnly/Secure/SameSite cookie where applicable); validate and rotate/revoke renewal material appropriately; issue replacement JWT only from that trusted session. Do not store refresh credentials in client JavaScript/ReactEdge runtime; handle concurrent refreshes deterministically.
- [ ] **T4 — Integrate renewal in Next.js, not widgets.** On page load/API use, reuse a still-valid JWT; if expired or near expiry, attempt a single controlled renewal using the trusted server-side session, update the HttpOnly JWT cookie, then retry once. Fail closed if renewal fails. Do not create a new JWT unconditionally on every page refresh. Keep session responses `private, no-store`.
- [ ] **T5 — Set JWT access lifetime to 3 minutes only *after T3/T4 work*.** Make expiry testable/configurable in nonproduction and verify the expiry of the Next.js cookie, JWT and renewal session are consistent. Changing `7d` to `3m` first would cause sign-outs with no recovery.
- [ ] **T6 — Implement logout/revocation.** Revoke the renewal session on logout (plus clear cookies). Confirm renewal fails following logout, invalid/expired renewal sessions, and revoked sessions.
- [ ] **T7 — Verify fresh access and ReactEdge runtime.** On session/profile refresh, retrieve `access` from Keystone and update Next.js user state and the presentation-only ReactEdge identity snapshot. A removed `seller` role must disappear from the UI on refresh; sensitive server operations must independently check current seller authorisation.
- [ ] **T8 — End-to-end regression + security tests.** Exercise both credentials and Google login; cookie flags and origins; expiry/renewal concurrency; denial of forged/expired refresh credentials; no authenticated response caching; 401/403 handling, and noninteractive refresh without redirect loops.

## Acceptance tests (GREEN after implementation)

| Test | Expected result after fix |
|---|---|
| Login with credentials and Google | Both establish a renewable, authenticated browser session; user identity matches Keystone |
| Page refresh **before** 3-minute access JWT expiry | Still signed in; valid JWT reused, **no unconditional rotation** |
| Page refresh **after** access JWT expiry, with valid renewal session | Transparent, one-time renewal; new JWT cookie; profile refresh succeeds; user remains signed in |
| Remain idle beyond access expiry then return to page | Profile request renews as needed; no manual login while renewal session is valid |
| Expired JWT **without** valid renewal session | Still rejected with 401/403; cannot authenticate from JWT alone |
| Missing, forged, revoked or expired renewal session | No token issuance, no retry loop, requires login |
| Concurrent requests around expiry | At most the designed safe renewal behaviour; no inconsistent cookie/session state |
| Keystone role changed `['seller']` → `[]` | Next authorised profile lookup reports `[]`, ReactEdge UI updates; old JWT claims do **not** authorise seller operations |
| Logout | Access cookie removed, renewal session revoked; page refresh stays signed out |
| SSR/static/public widget page | No user tokens/secrets in HTML/telemetry; no shared caching of personalised session responses |

Tests must check that the **successful renewal path** uses a real server-side renewal credential; a manually crafted expired JWT must remain invalid even after the change.

## Dependencies / security boundaries (do not conflate with JWT renewal)

- **Keystone `User` permissions currently use `allowAll`**. Restrict who may edit `access` before depending on it for seller authorisation.
- **ListingRecord API currently has no authenticated ownership check** on listing/product routes. Seller actions must be authorised server-side; runtime `access` is presentation-only.
- **Google callback currently redirects with a JWT in the query string**. This can leak through history/logging/referrers; track replacing it with a server-side handoff separately. Do not expand this narrow JWT-lifecycle task silently.
- `Cache-Control` and `cache: 'no-store'` protect against unwanted caching; they do not authenticate, re-authenticate, or validate permissions.
- Use a production-capable shared store if multiple processes/instances handle renewal. Do not rely on Express MemoryStore for durable sessions.

## Definition of done

- RED tests recorded against current code; GREEN tests executed after a minimal implementation.
- Both auth providers work; renewal and revocation are demonstrated.
- The JWT is 3 minutes *only once* renewal works.
- ReactEdge runtime receives fresh **display-only** `access`; no tokens or refresh credentials are passed to widgets.
- No change to unrelated widget APIs, listing data structures, or SSR cache contracts in this task.
