"use client";

import { useEffect, useRef } from "react";
import { Widget as UspWidget } from "@reactedge/widget-usp";
import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";

type Props = {
    ssrHtml: string;
    bootstrap?: unknown;
};

export function UspClient({
      ssrHtml,
      bootstrap,
  }: Props) {
    const widgetRef = useRef<HTMLDivElement>(null);
    const manifest = useWidgetManifest("usp");

    useEffect(() => {
        if (
            !widgetRef.current ||
            !manifest?.contract
        ) {
            return;
        }

        UspWidget({
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