import {useEffect} from "react";

export function useWidgetStyles(widget: string, cssFile?: string) {
    useEffect(() => {
        if (!cssFile) {
            return;
        }

        let cancelled = false;

        fetch(`/api/reactedge/styles/${widget}/${cssFile}`)
            .then((response) => response.json())
            .then(({ href }) => {
                if (cancelled) {
                    return;
                }

                if (!document.querySelector(`link[href="${href}"]`)) {
                    const link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.href = href;
                    document.head.appendChild(link);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [widget, cssFile]);
}