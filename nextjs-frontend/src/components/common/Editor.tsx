'use client';

import { useEffect, useRef } from "react";
import { useReactEdgeRuntimeConfig } from "@/reactedge/hooks/useReactEdgeRuntimeConfig";
import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";

export default function Editor() {
    const editorWordRef = useRef<HTMLDivElement>(null);
    const mounted = useRef(false);
    const editorWordManifest = useWidgetManifest("editorword");
    const { runtime, identityReady } = useReactEdgeRuntimeConfig();

    useEffect(() => {
        const container = editorWordRef.current;
        if (!container || !editorWordManifest?.contract || !identityReady || mounted.current) {
            return;
        }

        let active = true;
        const mount = async () => {
            const { Widget: EditorWordWidget } =
                await import("@reactedge/widget-editorword");

            if (!active || !container.isConnected || mounted.current) return;
            mounted.current = true;

            // Identity is presentation-only. Protected operations must be
            // authorised independently using the server-side session.
            EditorWordWidget({
                container,
                contract: editorWordManifest.contract,
                runtime,
            });
        };

        void mount();
        return () => { active = false; };
        // Current widget API has no update/unmount method; only mount once.
    }, [editorWordManifest, runtime, identityReady]);

    return <div className="m-5">
        <div ref={editorWordRef} />
    </div>;
}
