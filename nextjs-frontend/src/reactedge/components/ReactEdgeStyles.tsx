import React from "react";

export interface ReactEdgeStylesProps {
    css?: string;
}

export default function ReactEdgeStyles({
    css,
}: ReactEdgeStylesProps) {
    if (!css) {
        return null;
    }

    return (
        <link
            rel="stylesheet"
            href={css}
        />
    );
}