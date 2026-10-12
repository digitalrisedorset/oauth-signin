"use client";

import { useEffect, useMemo, useRef } from "react";
import { Widget as CmsBlockWidget } from "@reactedge/widget-cmsblock";
import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";
import { RuntimeConfigBuilder } from "@/reactedge/Model/RuntimeConfig/RuntimeConfigBuilder";
import { useUserState } from "@/state/UserState";

type Props = {
    ssrHtml: string;
    bootstrap?: unknown;
};

export function CmsBlockClient({
    ssrHtml,
    bootstrap,
}: Props) {
    const widgetRef = useRef<HTMLDivElement>(null);
    const { user } = useUserState();
    const isCmsEditor = user?.access.includes("cmseditor") ?? false;
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
            bootstrap: isCmsEditor ? undefined : bootstrap,
            runtime,
            hydrate: true
        });
    }, [manifest, bootstrap, runtime, isCmsEditor]);

    return (
        <div
            ref={widgetRef}
            dangerouslySetInnerHTML={{
                __html: ssrHtml,
            }}
        />
    );
}
