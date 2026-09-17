export function selectColour(value: string) {
    window.dispatchEvent(
        new CustomEvent("reactedge:signal", {
            detail: {
                code: "color",
                value,
            },
        })
    );
}