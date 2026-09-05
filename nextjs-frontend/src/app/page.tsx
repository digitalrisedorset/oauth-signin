import {AssetsReader} from "@/reactedge/Model/RegistryReader/AssetsReader";
import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetSourceFileWriter} from "@/reactedge/Model/RegistryReader/WidgetSourceFileWriter";
import {WidgetSourceFileReader} from "@/reactedge/Model/WidgetSourceFileReader";
import HomePage from "@/app/HomePage";

export default async function Page() {
    const assetReader = new AssetsReader();
    const widgetSourceWriter = new WidgetSourceFileWriter();
    const widgetSourceFileReader = new WidgetSourceFileReader(
        assetReader,
        widgetSourceWriter
    );

    const uspManifest = await assetReader.getWidgetManifest("usp");
    // const uspCssPath = await widgetSourceFileReader.loadSourceFile(
    //     "usp",
    //     uspManifest.css
    // );

    return (
        <>
            {/*<ReactEdgeStyles css={uspCssPath} />*/}
            <HomePage
                uspManifest={uspManifest}
            />
        </>
    );
}