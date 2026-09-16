import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetResourceResolver} from "@/reactedge/Model/widget-resource-resolver";
import {ProductTiledClient} from "@/components/reactedge/ProductTiledClient";

export default async function ProductTiled() {
    const resources =
        await new WidgetResourceResolver().resolve("productgallery");

    return (
        <>
            <ReactEdgeStyles css={resources.css}/>
            <ProductTiledClient
                ssrHtml={resources?.html ?? ""}
                bootstrap={resources?.bootstrap}
            />
        </>
    );
}