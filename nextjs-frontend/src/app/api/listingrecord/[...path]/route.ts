import { NextResponse } from "next/server";
import { hasSameOrigin, requireRole, type ApiUser } from "@/lib/server-api-auth";

type RouteContext = { params: Promise<{ path: string[] }> };
type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function error(message: string, status: number): NextResponse {
    return NextResponse.json(
        { error: message },
        { status, headers: { "Cache-Control": "private, no-store" } },
    );
}

function proxyResponse(response: Response): Response {
    const headers = new Headers({ "Cache-Control": "private, no-store" });
    const contentType = response.headers.get("content-type");
    if (contentType) headers.set("content-type", contentType);
    return new Response(response.body, { status: response.status, headers });
}

async function serviceRequest(path: string, method = "GET", body?: unknown): Promise<Response> {
    const serviceUrl = new URL(
        process.env.LISTINGRECORD_API_INTERNAL_URL || "http://127.0.0.1:4180",
    );
    const servicePrefix = serviceUrl.pathname.replace(/\/+$/, "");
    serviceUrl.pathname = servicePrefix + "/listingrecord/" + path;
    return fetch(serviceUrl, {
        method,
        headers: body === undefined ? undefined : { "content-type": "application/json" },
        body: body === undefined ? undefined : JSON.stringify(body),
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
    });
}

async function serviceRecords(path: string): Promise<
    { records: JsonRecord[] } | { response: Response }
> {
    const response = await serviceRequest(path);
    if (!response.ok) return { response };
    let value: unknown;
    try {
        value = await response.json();
    } catch {
        return { response: error("Listing service returned an invalid response.", 502) };
    }
    if (!Array.isArray(value) || !value.every(isRecord)) {
        return { response: error("Listing service returned an invalid response.", 502) };
    }
    return { records: value };
}

function ownListing(listings: JsonRecord[], id: string, user: ApiUser): JsonRecord | undefined {
    return listings.find(listing => listing.id === id && listing.sellerId === user.id);
}

function validUuid(value: string): boolean {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}

async function forward(request: Request, context: RouteContext, method: string): Promise<Response> {
    if (method !== "GET" && !hasSameOrigin(request)) {
        return error("Cross-origin request rejected.", 403);
    }

    const auth = await requireRole("seller");
    if (auth.response) return auth.response;
    const user = auth.user;
    const { path: segments } = await context.params;
    const path = segments.join("/");

    try {
        if (method === "GET" && path === "listings") {
            const result = await serviceRecords("listings");
            if ("response" in result) return proxyResponse(result.response);
            return NextResponse.json(
                result.records.filter(listing => listing.sellerId === user.id),
                { headers: { "Cache-Control": "private, no-store" } },
            );
        }

        if (method === "POST" && path === "listings") {
            let input: unknown;
            try { input = await request.json(); }
            catch { return error("Invalid JSON request body.", 400); }
            if (!isRecord(input)) return error("Invalid listing request.", 400);
            return proxyResponse(await serviceRequest("listings", "POST", {
                ...input,
                sellerId: user.id,
            }));
        }

        const listingMatch = /^listings\/([^/]+)$/.exec(path);
        if (listingMatch && validUuid(listingMatch[1]) && (method === "PUT" || method === "DELETE")) {
            const listingResult = await serviceRecords("listings");
            if ("response" in listingResult) return proxyResponse(listingResult.response);
            if (!ownListing(listingResult.records, listingMatch[1], user)) {
                return error("Listing not found.", 404);
            }

            if (method === "DELETE") {
                return proxyResponse(await serviceRequest(path, "DELETE"));
            }

            let input: unknown;
            try { input = await request.json(); }
            catch { return error("Invalid JSON request body.", 400); }
            if (!isRecord(input)) return error("Invalid listing request.", 400);
            return proxyResponse(await serviceRequest(path, "PUT", {
                ...input,
                sellerId: user.id,
            }));
        }

        if (method === "GET" && path === "products") {
            const listingResult = await serviceRecords("listings");
            if ("response" in listingResult) return proxyResponse(listingResult.response);
            const listingIds = new Set(
                listingResult.records
                    .filter(listing => listing.sellerId === user.id)
                    .map(listing => listing.id)
                    .filter((id): id is string => typeof id === "string"),
            );
            if (listingIds.size === 0) {
                return NextResponse.json([], { headers: { "Cache-Control": "private, no-store" } });
            }
            const productResult = await serviceRecords("products");
            if ("response" in productResult) return proxyResponse(productResult.response);
            return NextResponse.json(
                productResult.records.filter(product =>
                    typeof product.listingId === "string" && listingIds.has(product.listingId)),
                { headers: { "Cache-Control": "private, no-store" } },
            );
        }

        if (method === "POST" && path === "products") {
            let input: unknown;
            try { input = await request.json(); }
            catch { return error("Invalid JSON request body.", 400); }
            if (!isRecord(input) || typeof input.listingId !== "string") {
                return error("Invalid product request.", 400);
            }
            const listingResult = await serviceRecords("listings");
            if ("response" in listingResult) return proxyResponse(listingResult.response);
            if (!ownListing(listingResult.records, input.listingId, user)) {
                return error("Listing not found.", 404);
            }
            return proxyResponse(await serviceRequest("products", "POST", input));
        }

        const productMatch = /^products\/([^/]+)$/.exec(path);
        if (productMatch && validUuid(productMatch[1]) && (method === "PUT" || method === "DELETE")) {
            const [listingResult, productResult] = await Promise.all([
                serviceRecords("listings"),
                serviceRecords("products"),
            ]);
            if ("response" in listingResult) return proxyResponse(listingResult.response);
            if ("response" in productResult) return proxyResponse(productResult.response);
            const ownedListingIds = new Set(
                listingResult.records
                    .filter(listing => listing.sellerId === user.id)
                    .map(listing => listing.id),
            );
            const product = productResult.records.find(record => record.id === productMatch[1]);
            if (!product || typeof product.listingId !== "string" || !ownedListingIds.has(product.listingId)) {
                return error("Product not found.", 404);
            }
            if (method === "DELETE") {
                return proxyResponse(await serviceRequest(path, "DELETE"));
            }

            let input: unknown;
            try { input = await request.json(); }
            catch { return error("Invalid JSON request body.", 400); }
            if (!isRecord(input) || typeof input.listingId !== "string" || !ownedListingIds.has(input.listingId)) {
                return error("Listing not found.", 404);
            }
            return proxyResponse(await serviceRequest(path, "PUT", input));
        }

        if (method === "POST" && path === "product-images/signature") {
            return proxyResponse(await serviceRequest(path, "POST"));
        }

        return error("ListingRecord route not found.", 404);
    } catch (cause) {
        console.error("ListingRecord proxy request failed:", cause);
        return error("Cannot reach the ListingRecord service.", 502);
    }
}

export function GET(request: Request, context: RouteContext): Promise<Response> {
    return forward(request, context, "GET");
}

export function POST(request: Request, context: RouteContext): Promise<Response> {
    return forward(request, context, "POST");
}

export function PUT(request: Request, context: RouteContext): Promise<Response> {
    return forward(request, context, "PUT");
}

export function DELETE(request: Request, context: RouteContext): Promise<Response> {
    return forward(request, context, "DELETE");
}
