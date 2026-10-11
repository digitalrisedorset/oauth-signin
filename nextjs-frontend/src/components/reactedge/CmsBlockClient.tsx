"use client";

import { useEffect, useMemo, useRef } from "react";
import { Widget as CmsBlockWidget } from "@reactedge/widget-cmsblock";
import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";
import { RuntimeConfigBuilder } from "@/reactedge/Model/RuntimeConfig/RuntimeConfigBuilder";

type Props = {
    ssrHtml: string;
    bootstrap?: unknown;
};

export function CmsBlockClient({
    ssrHtml,
    bootstrap,
}: Props) {
    const widgetRef = useRef<HTMLDivElement>(null);
    const manifest = useWidgetManifest("cmsblock");
    const runtime = useMemo(
        () => new RuntimeConfigBuilder().buildCmsBlock(),
        []
    );

    useEffect(() => {
        if (!widgetRef.current || !manifest?.contract) {
            return;
        }

        CmsBlockWidget({
            container: widgetRef.current,
            contract: manifest.contract,
            bootstrap,
            runtime,
            hydrate: true
        });
    }, [manifest, bootstrap, runtime]);

    return (
        <div
            ref={widgetRef}
            dangerouslySetInnerHTML={{
                __html: ssrHtml,
            }}
        />
    );
}
