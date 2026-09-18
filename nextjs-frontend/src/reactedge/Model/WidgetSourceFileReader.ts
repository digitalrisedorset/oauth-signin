import {AssetsReader} from "@/reactedge/Model/RegistryReader/AssetsReader";
import {WidgetSourceFileWriter} from "@/reactedge/Model/RegistryReader/WidgetSourceFileWriter";

export class WidgetSourceFileReader {
    constructor(
        private readonly assetsReader: AssetsReader,
        private readonly writer: WidgetSourceFileWriter
    ) {}

    async loadSourceFile(
        widgetName: string,
        filename: string
    ): Promise<string> {

        if (!(await this.writer.isPublished(filename))) {
            const content = await this.assetsReader.readFileWidgetSourceContent(
                widgetName,
                filename
            );

            await this.writer.publish(filename, content);
        }

        return this.assetsReader.readPublishedAsset(filename);
    }
}