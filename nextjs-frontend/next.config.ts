import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.reactedge.net",
                pathname:
                    "/wp-content/themes/digitalrisedorset/images/**",
            },
        ],
    },
};

export default nextConfig;