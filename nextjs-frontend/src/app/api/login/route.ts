import {NextResponse} from "next/server";

export async function GET(req: Request): Promise<NextResponse> {
    // Construct the full redirect URL to the OAuth Express server
    const OAUTH_URL = `${process.env.OAUTH_HOST}/google/auth`;

    return NextResponse.redirect(OAUTH_URL, 302);
}
