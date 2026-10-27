"use client";

import { useEffect, useRef } from "react";
import { Widget as ProductTiledWidget } from "@reactedge/widget-productgallery";
import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";
import {useReactEdgeRuntimeConfig} from "@/reactedge/hooks/useReactEdgeRuntimeConfig";

type Props = {
    ssrHtml: string;
    bootstrap?: unknown;
};

export function ProductTiledClient({
      ssrHtml,
      bootstrap,
  }: Props) {
    const widgetRef = useRef<HTMLDivElement>(null);
    const manifest = useWidgetManifest("productgallery");
    const {runtime: runtimeConfig, identityReady} = useReactEdgeRuntimeConfig();
    const mounted = useRef(false);

    useEffect(() => {
        if (
            !identityReady || mounted.current || !widgetRef.current ||
            !manifest?.contract
        ) {
            return;
        }

        mounted.current = true;
        ProductTiledWidget({
            container: widgetRef.current,
            contract: manifest.contract,
            bootstrap,
            runtime: runtimeConfig,
            hydrate: true
        });
    // Current widget API has no update/unmount; mount once to avoid duplicate
    // hydrateRoot calls when identity changes on an already-mounted page.
    }, [manifest, bootstrap, runtimeConfig, identityReady]);

    return (
        <div
            ref={widgetRef}
            dangerouslySetInnerHTML={{
                __html: ssrHtml,
            }}
        />
    );
}