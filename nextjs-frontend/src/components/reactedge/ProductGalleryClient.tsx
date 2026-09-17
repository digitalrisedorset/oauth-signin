"use client";

import { useEffect, useRef } from "react";
import { Widget as ProductTiledWidget } from "@reactedge/widget-productgallery";
import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";
import {RuntimeConfigBuilder} from "@/reactedge/Model/RuntimeConfig/RuntimeConfigBuilder";

type Props = {
    ssrHtml: string;
    bootstrap?: unknown;
};

export function ProductGalleryClient({
      ssrHtml,
      bootstrap,
  }: Props) {
    const widgetRef = useRef<HTMLDivElement>(null);
    const manifest = useWidgetManifest("productgallery-gallery");
    const runtimeConfig = new RuntimeConfigBuilder().build();

    useEffect(() => {
        if (
            !widgetRef.current ||
            !manifest?.contract
        ) {
            return;
        }

        console.log({
            container: widgetRef.current,
                contract: manifest.contract,
            bootstrap,
            runtime: runtimeConfig,
            hydrate: true
        })

        ProductTiledWidget({
            container: widgetRef.current,
            contract: manifest.contract,
            bootstrap,
            runtime: runtimeConfig,
            hydrate: true
        });
    }, [manifest, bootstrap, runtimeConfig]);

    return (
        <div
            ref={widgetRef}
            dangerouslySetInnerHTML={{
                __html: ssrHtml,
            }}
        />
    );
}