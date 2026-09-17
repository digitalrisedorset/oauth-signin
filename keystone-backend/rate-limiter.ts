import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: (req) => {
        if (req.headers.authorization) {
            console.log("🛡️ Higher rate limit for authenticated user");
            return 1000; // ✅ Allow 1000 requests for authenticated users
        }
        return 10; // ✅ Normal limit for unauthenticated users
    },
    message: "❌ Too many requests, please try again later.",
    keyGenerator: (req) => req.ip ?? 'unknown',
});
