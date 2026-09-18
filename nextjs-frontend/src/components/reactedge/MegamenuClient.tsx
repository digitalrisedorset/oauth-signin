"use client";

import { useEffect, useRef } from "react";
import { Widget as MegamenuWidget } from "@reactedge/widget-megamenu";
import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";

type Props = {
    ssrHtml: string;
    bootstrap?: unknown;
};

export function MegamenuClient({
      ssrHtml,
      bootstrap,
  }: Props) {
    const widgetRef = useRef<HTMLDivElement>(null);
    const manifest = useWidgetManifest("megamenu");

    useEffect(() => {
        if (
            !widgetRef.current ||
            !manifest?.contract
        ) {
            return;
        }

        MegamenuWidget({
            container: widgetRef.current,
            contract: manifest.contract,
            bootstrap,
            hydrate: true
        });
    }, [manifest, bootstrap]);

    return (
        <div
            ref={widgetRef}
            dangerouslySetInnerHTML={{
                __html: ssrHtml,
            }}
        />
    );
}