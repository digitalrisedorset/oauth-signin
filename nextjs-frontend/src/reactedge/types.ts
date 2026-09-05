export interface WidgetManifest<TContract = unknown> {
    /**
     * Widget identifier.
     */
    id: string;

    /**
     * Widget package name.
     */
    widget: string;

    /**
     * JavaScript bundle filename.
     */
    src: string;

    /**
     * Main stylesheet filename.
     */
    css?: string;

    /**
     * Default contract filename.
     */
    contractFile: string;

    /**
     * Parsed contract.
     */
    contract: TContract;

    /**
     * SSR metadata.
     */
    ssr?: WidgetManifestSsr;
}

export interface WidgetManifestSsr {
    strategy: "static" | "dynamic" | "disabled";

    css?: string;

    views: Record<SsrVariant, string>;
}

export type SsrVariant =
    | 'desktop'
    | 'mobile'
    | 'tablet';