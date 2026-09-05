import { NextResponse } from "next/server";
import {AssetsReader} from "@/reactedge/Model/RegistryReader/AssetsReader";
import {WidgetSourceFileReader} from "@/reactedge/Model/WidgetSourceFileReader";
import {WidgetSourceFileWriter} from "@/reactedge/Model/RegistryReader/WidgetSourceFileWriter";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ widget: string, cssFile: string }> }
) {
    const { widget, cssFile } = await params;

    try {
        const assetReader = new AssetsReader()
        const widgetSourceWriter = new WidgetSourceFileWriter();
        const widgetSourceFileReader = new WidgetSourceFileReader(assetReader, widgetSourceWriter)
        const path = await widgetSourceFileReader.loadSourceFile(widget, cssFile);

        return NextResponse.json({
            href: path,
        });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: `Failed to fetch manifest ${widget}` },
            { status: 500 }
        );
    }
}