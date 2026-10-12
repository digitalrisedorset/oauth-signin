import { NextResponse } from "next/server";
import { hasSameOrigin, requireRole } from "@/lib/server-api-auth";

type RouteContext = { params: Promise<{ path: string[] }> };

const allowedMethods: Record<string, readonly string[]> = {
    "blocks/demo": ["GET", "PUT"],
    "blocks/demo/published": ["GET"],
    "blocks/demo/generate": ["POST"],
    "blocks/demo/pending": ["PUT"],
    "blocks/demo/approve": ["POST"],
    "blocks/demo/reject": ["POST"],
};

async function proxy(request: Request, context: RouteContext, method: string): Promise<Response> {
    const { path } = await context.params;
    const routePath = path.join("/");
    if (!allowedMethods[routePath]?.includes(method)) {
        return NextResponse.json({ error: "CMSBlock route not found." }, { status: 404 });
    }

    const isPublicPublishedRead = method === "GET" && routePath === "blocks/demo/published";
    if (method !== "GET" && !hasSameOrigin(request)) {
        return NextResponse.json({ error: "Cross-origin request rejected." }, { status: 403 });
    }
    if (!isPublicPublishedRead) {
        const auth = await requireRole("cmseditor");
        if (auth.response) return auth.response;
    }

    try {
        const serviceUrl = new URL(
            process.env.CMSBLOCK_API_INTERNAL_URL || "http://127.0.0.1:4191",
        );
        const servicePrefix = serviceUrl.pathname.replace(/\/+$/, "");
        serviceUrl.pathname =
            servicePrefix + "/cmsblock/" + path.map(encodeURIComponent).join("/");
        serviceUrl.search = new URL(request.url).search;

        const headers = new Headers();
        const contentType = request.headers.get("content-type");
        const accept = request.headers.get("accept");
        if (contentType) headers.set("content-type", contentType);
        if (accept) headers.set("accept", accept);

        const upstream = await fetch(serviceUrl, {
            method,
            headers,
            body: method === "GET" ? undefined : await request.arrayBuffer(),
            cache: "no-store",
            signal: AbortSignal.timeout(15000),
        });

        const responseHeaders = new Headers({ "Cache-Control": "no-store" });
        const upstreamContentType = upstream.headers.get("content-type");
        if (upstreamContentType) responseHeaders.set("content-type", upstreamContentType);

        return new Response(upstream.body, {
            status: upstream.status,
            headers: responseHeaders,
        });
    } catch (error) {
        console.error("CMSBlock proxy request failed:", error);
        return NextResponse.json(
            { error: "Cannot reach the CMSBlock service." },
            { status: 502, headers: { "Cache-Control": "no-store" } },
        );
    }
}

export function GET(request: Request, context: RouteContext): Promise<Response> {
    return proxy(request, context, "GET");
}

export function PUT(request: Request, context: RouteContext): Promise<Response> {
    return proxy(request, context, "PUT");
}

export function POST(request: Request, context: RouteContext): Promise<Response> {
    return proxy(request, context, "POST");
}
