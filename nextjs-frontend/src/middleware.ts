import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/",
    },
});

export const config = {
    matcher: ["/protected"], // Protect /protected route
};
