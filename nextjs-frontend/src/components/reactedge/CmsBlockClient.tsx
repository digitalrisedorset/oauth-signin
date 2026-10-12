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
    const widgetBootstrap = useMemo(() => {
        if (isCmsEditor) {
            return undefined;
        }

        const initialBootstrap =
            typeof bootstrap === "object" && bootstrap !== null && !Array.isArray(bootstrap)
                ? bootstrap as Record<string, unknown>
                : {};

        return {
            ...initialBootstrap,
            viewOnly: true,
        };
    }, [bootstrap, isCmsEditor]);
    const viewOnly =
        typeof widgetBootstrap === "object" &&
        widgetBootstrap !== null &&
        "viewOnly" in widgetBootstrap &&
        widgetBootstrap.viewOnly === true;

    useEffect(() => {
        if (!widgetRef.current || !manifest?.contract || viewOnly) {
            return;
        }

        CmsBlockWidget({
            container: widgetRef.current,
            contract: manifest.contract,
            bootstrap: widgetBootstrap,
            runtime,
            hydrate: true
        });
    }, [manifest, widgetBootstrap, runtime, viewOnly]);

    return (
        <div
            key={isCmsEditor ? "cms-editor" : "cms-view"}
            ref={widgetRef}
            dangerouslySetInnerHTML={{
                __html: ssrHtml,
            }}
        />
    );
}
