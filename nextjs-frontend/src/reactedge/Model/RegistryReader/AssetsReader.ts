import {cache} from "react";
import path from "path";
import {readFile} from "fs/promises";

export class AssetsReader {
    constructor() {}

    getRegistry = cache(async () => {
        const registryPath = path.join(
            process.cwd(),
            "../reactedge/registry.json"
        );

        try {
            const contents = await readFile(registryPath, "utf8");
            return JSON.parse(contents);
        } catch (error) {
            console.error("Error reading registry", error);
            return {};
        }
    });

    getWidgetManifest = cache(async (widgetInstanceName: string) => {
        const contractPath = path.join(
            process.cwd(),
            `../reactedge/default/manifests/${widgetInstanceName}.json`
        );

        try {
            const contents = await readFile(contractPath, "utf8");
            return JSON.parse(contents);
        } catch (error) {
            console.error("Error reading widget manifest", error);
            return {};
        }
    });

    async readFileWidgetSourceContent(
        widgetName: string,
        filename: string
    ): Promise<string> {
        const assetPath = path.join(
            process.cwd(),
            "../reactedge/release/source",
            widgetName,
            filename
        );

        try {
            return await readFile(assetPath, "utf8");
        } catch (error) {
            throw new Error(
                `ReactEdge asset '${filename}' for widget '${widgetName}' was not found at '${assetPath}'.`,
                { cause: error }
            );
        }
    }

    readPublishedAsset = (filename: string) => {
        return `/reactedge/${filename}`;
    }
}