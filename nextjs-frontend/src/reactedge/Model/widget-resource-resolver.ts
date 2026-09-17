import {AssetsReader} from "@/reactedge/Model/RegistryReader/AssetsReader";
import {WidgetSourceFileReader} from "@/reactedge/Model/WidgetSourceFileReader";
import {WidgetSourceFileWriter} from "@/reactedge/Model/RegistryReader/WidgetSourceFileWriter";

export interface WidgetResources {
    html: string;
    bootstrap?: unknown;
    css?: string;
}

export class WidgetResourceResolver {
    private readonly assetReader: AssetsReader;
    private readonly sourceReader: WidgetSourceFileReader;

    constructor() {
        this.assetReader = new AssetsReader();

        this.sourceReader = new WidgetSourceFileReader(
            this.assetReader,
            new WidgetSourceFileWriter()
        );
    }

    async resolve(widget: string): Promise<WidgetResources> {
        const artifact = await this.assetReader.getWidgetSSR(widget);
        const manifest = await this.assetReader.getWidgetManifest(widget);

        const css = manifest.css
            ? await this.sourceReader.loadSourceFile(
                widget,
                manifest.css
            )
            : undefined;

        return {
            html: artifact?.html || '',
            bootstrap: artifact?.bootstrap,
            css,
        };
    }
}