'use client';

import { useEffect, useRef } from "react";
import { useReactEdgeRuntimeConfig } from "@/reactedge/hooks/useReactEdgeRuntimeConfig";
import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";

export default function CreateListing() {
    const createListingRef = useRef<HTMLDivElement>(null);
    const mounted = useRef(false);
    const createListingManifest = useWidgetManifest("createlisting");
    const { runtime, identityReady } = useReactEdgeRuntimeConfig();

    useEffect(() => {
        const container = createListingRef.current;
        if (!container || !createListingManifest?.contract || !identityReady || mounted.current) {
            return;
        }

        let active = true;
        const mount = async () => {
            const { Widget: CreateListingWidget } =
                await import("@reactedge/widget-createlisting");

            if (!active || !container.isConnected || mounted.current) return;
            mounted.current = true;

            // Identity is presentation-only. Protected operations must be
            // authorised independently using the server-side session.
            CreateListingWidget({
                container,
                contract: createListingManifest.contract,
                runtime,
            });
        };

        void mount();
        return () => { active = false; };
        // Current widget API has no update/unmount method; only mount once.
    }, [createListingManifest, runtime, identityReady]);

    return <div className="m-5">
        <div ref={createListingRef} />
    </div>;
}
