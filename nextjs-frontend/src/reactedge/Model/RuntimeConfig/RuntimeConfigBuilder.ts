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
        return {
            integrations: {
                cmsblockApi: {
                    api: process.env.NEXT_PUBLIC_CMSBLOCK_API_URL
                        || "http://127.0.0.1:4190"
                }
            },
            context: {
                storeCode: "nextjs",
                sku: "WJ12",
                category: "tops-men"
            }
        };
    }
}
