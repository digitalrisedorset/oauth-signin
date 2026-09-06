import {useEffect, useRef} from "react";
import {RuntimeConfigBuilder} from "@/reactedge/Model/RuntimeConfig/RuntimeConfigBuilder";
import {useWidgetManifest} from "@/reactedge/hooks/useWidgetManifest";

export default function Main() {
    const editorWordRef = useRef<HTMLDivElement>(null);

    const editorWordManifest =
        useWidgetManifest("editorword");

    const runtimeConfig = new RuntimeConfigBuilder().build();

    useEffect(() => {
        const container = editorWordRef.current;

        if (!container || !editorWordManifest?.contract) {
            return;
        }

        const mount = async () => {
            const { Widget: EditorWordWidget } =
                await import("@reactedge/widget-editorword");

            EditorWordWidget({
                container,
                contract: editorWordManifest.contract,
                runtime: runtimeConfig,
            });
        };

        void mount();
    }, [editorWordManifest]);

    return <div className="m-5">
        <div ref={editorWordRef}/>
    </div>
}