import type { UserAccess } from "@/app/types/keystone";

export interface ReactEdgeRuntimeUser {
    readonly id: string;
    readonly access: readonly UserAccess[];
}

export interface ReactEdgeRuntimeConfig {
    readonly integrations: {
        readonly magentoGraphql: { readonly api: string };
    };
    readonly context: {
        readonly storeCode: string;
        readonly sku: string;
        readonly category: string;
        /** Temporary one-user/one-seller mapping for CreateListing. */
        readonly sellerId?: string;
    };
    /**
     * Presentation-only identity snapshot. The client can tamper with it.
     * All seller data access and mutations require server-side authorisation.
     */
    readonly identity?: {
        readonly userId: string;
        readonly access: readonly UserAccess[];
    };
}

export interface CmsBlockRuntimeConfig {
    readonly integrations: {
        readonly cmsblockApi: { readonly api: string };
    };
    readonly context: {
        readonly storeCode: string;
        readonly sku: string;
        readonly category: string;
    };
}

export class RuntimeConfigBuilder {
    build(user: ReactEdgeRuntimeUser | null = null): ReactEdgeRuntimeConfig {
        return {
            integrations: {
                magentoGraphql: {
                    api: String(process.env.NEXT_PUBLIC_MAGENTO_URL) + "/graphql"
                }
            },
            context: {
                storeCode: "default",
                sku: "WJ12",
                category: "tops-men",
                // Temporary integration: treat an authenticated seller's
                // Keystone user ID as the seller ID expected by CreateListing.
                // Browser context is not an authorisation decision.
                ...(user?.id && user.access.includes('seller')
                    ? { sellerId: user.id }
                    : {})
            },
            ...(user ? {
                identity: {
                    userId: user.id,
                    access: user.access.filter(access => access === 'seller')
                }
            } : {})
        };
    }

    buildCmsBlock(): CmsBlockRuntimeConfig {
        // The widget runs in the browser. Its API must therefore be the
        // browser-facing Next.js route; the route owns the private service URL.
        const origin = typeof window === "undefined"
            ? process.env.NEXT_PUBLIC_NODE_HOST || "http://127.0.0.1:3000"
            : window.location.origin;
        const api = new URL("/api", origin).toString().replace(/\/+$/, "");

        return {
            integrations: {
                cmsblockApi: { api }
            },
            context: {
                storeCode: "nextjs",
                sku: "WJ12",
                category: "tops-men"
            }
        };
    }
}
