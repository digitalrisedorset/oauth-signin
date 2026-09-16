import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetResourceResolver} from "@/reactedge/Model/widget-resource-resolver";
import {ProductGalleryClient} from "@/components/reactedge/ProductGalleryClient";

export default async function ProductGallery() {
    const resources =
        await new WidgetResourceResolver().resolve("productgallery-gallery");

    return (
        <>
            <ReactEdgeStyles css={resources.css}/>
            <ProductGalleryClient
                ssrHtml={resources?.html ?? ""}
                bootstrap={resources?.bootstrap}
            />
        </>
    );
}