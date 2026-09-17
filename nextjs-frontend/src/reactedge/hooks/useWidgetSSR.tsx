import {useEffect, useState} from "react";

export function useWidgetSSR(
    widget: string
): string | undefined {
    const [config, setConfig] = useState<string>();

    useEffect(() => {
        let cancelled = false;

        fetch(`/api/reactedge/ssr/${widget}`)
            .then((response) => response.json())
            .then((config: string) => {
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