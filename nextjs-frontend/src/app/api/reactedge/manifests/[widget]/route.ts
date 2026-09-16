import { NextResponse } from "next/server";
import {AssetsReader} from "@/reactedge/Model/RegistryReader/AssetsReader";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ widget: string }> }
) {
    const { widget } = await params;

    try {
        const assetReader = new AssetsReader()
        const config = await assetReader.getWidgetManifest(widget);

        return NextResponse.json(config);
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: `Failed to fetch manifest ${widget}` },
            { status: 500 }
        );
    }
}