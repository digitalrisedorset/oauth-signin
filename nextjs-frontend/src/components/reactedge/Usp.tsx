import { useWidgetManifest } from "@/reactedge/hooks/useWidgetManifest";
import { useWidgetStyles } from "@/reactedge/hooks/useWidgetStyles";
import {
    Widget as UspWidget,
    WidgetComponent as UspSSR
} from "@reactedge/widget-usp";
import { useEffect, useRef } from "react";

export default function Usp() {
    const uspRef = useRef<HTMLDivElement>(null);
    const uspManifest = useWidgetManifest("usp");

    useWidgetStyles("usp", uspManifest?.css);

    useEffect(() => {
        const container = uspRef.current;

        if (!container || !uspManifest?.contract) {
            return;
        }

        UspWidget({
            container,
            contract: uspManifest.contract,
        });
    }, [uspManifest]);

    if (!uspManifest?.contract) {
        return null;
    }

    return (
        <div ref={uspRef}>
            <UspSSR contract={uspManifest.contract} />
        </div>
    );
}