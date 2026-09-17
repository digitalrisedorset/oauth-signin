import {useEffect, useState} from "react";
import {WidgetManifest} from "@/reactedge/types";

export function useWidgetManifest<T>(
    widget: string
): WidgetManifest<T> | undefined {
    const [manifest, setManifest] = useState<WidgetManifest<T>>();

    useEffect(() => {
        let cancelled = false;

        fetch(`/api/reactedge/manifests/${widget}`)
            .then((response) => response.json()  as Promise<WidgetManifest<T>>)
            .then((manifest) => {
                if (!cancelled) {
                    setManifest(manifest);
                }
            })
            .catch(error => {
                if (!cancelled) {
                    console.error(error);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [widget]);

    return manifest;
}