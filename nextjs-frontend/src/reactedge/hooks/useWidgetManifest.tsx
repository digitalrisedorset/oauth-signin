import {useEffect, useState} from "react";
import {WidgetManifest} from "@/reactedge/types";

export function useWidgetManifest<T>(
    widget: string
): WidgetManifest<T> | undefined {
    const [config, setConfig] = useState<T>();

    useEffect(() => {
        let cancelled = false;

        fetch(`/api/reactedge/manifests/${widget}`)
            .then((response) => response.json())
            .then((config: T) => {
                if (!cancelled) {
                    setConfig(config);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [widget]);

    return config;
}