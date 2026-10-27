/**
 * Restore the originating page after credentials or Google OAuth login.
 * Login return paths are presentation/navigation hints, never authorisation.
 */
const KEY = 'reactedge.login.returnTo';
const FALLBACK = '/dashboard';

/** Block external destinations, redirects into authentication, and malformed paths. */
export function safeReturnTo(value: string | null | undefined): string | null {
    if (!value || !value.startsWith('/') || value.startsWith('//')
        || value.includes('\\') || /[\u0000-\u001f\u007f]/.test(value)) {
        return null;
    }
    try {
        const base = 'https://reactedge.invalid';
        const url = new URL(value, base);
        if (url.origin !== base) return null;
        if (/^\/(?:api(?:\/|$)|auth(?:\/|$)|auth-callback(?:\/|$))/.test(url.pathname)) {
            return null;
        }
        return url.pathname + url.search + url.hash;
    } catch {
        return null;
    }
}

/** Explicit returnTo is preferred; same-origin Referer is best-effort fallback. */
export function loginReturnTo(): string {
    if (window.location.pathname !== '/auth/login') {
        return safeReturnTo(
            window.location.pathname + window.location.search + window.location.hash
        ) ?? FALLBACK;
    }

    const param = safeReturnTo(new URLSearchParams(window.location.search).get('returnTo'));
    if (param) return param;
    try {
        const referer = new URL(document.referrer);
        if (referer.origin === window.location.origin) {
            const previous = safeReturnTo(referer.pathname + referer.search + referer.hash);
            if (previous) return previous;
        }
    } catch {
        // Direct navigation can have no usable Referer.
    }
    return FALLBACK;
}

export function loginUrlForCurrentPage(): string {
    return '/auth/login?returnTo=' + encodeURIComponent(loginReturnTo());
}

/** sessionStorage survives a same-tab OAuth round trip without using the URL. */
export function rememberLoginReturnTo(destination: string): void {
    try {
        window.sessionStorage.setItem(KEY, safeReturnTo(destination) ?? FALLBACK);
    } catch {
        // Private mode/storage restrictions: fall back to dashboard.
    }
}

export function consumeLoginReturnTo(): string {
    let saved: string | null = null;
    try {
        saved = window.sessionStorage.getItem(KEY);
        window.sessionStorage.removeItem(KEY);
    } catch {
        // Private mode/storage restrictions: fall back to dashboard.
    }
    return safeReturnTo(saved) ?? FALLBACK;
}
