import {useWidgetManifest} from "@/reactedge/hooks/useWidgetManifest";
import {useWidgetStyles} from "@/reactedge/hooks/useWidgetStyles";
import {Widget as UspWidget} from "@reactedge/widget-usp";
import {useEffect, useRef} from "react";
import {RuntimeConfigBuilder} from "@/reactedge/Model/RuntimeConfig/RuntimeConfigBuilder";

export default function Usp() {
    const uspRef = useRef<HTMLDivElement>(null);
    const uspManifest =
        useWidgetManifest("usp");

    useWidgetStyles("usp", uspManifest?.css);

    //const runtimeConfig = new RuntimeConfigBuilder().build();

    useEffect(() => {
        const container = uspRef.current;

        if (!container || !uspManifest?.contract) {
            return;
        }

        UspWidget({
            container,
            contract: uspManifest.contract
        });
    }, [uspManifest]);

    return (
        <div ref={uspRef}/>
    );
}