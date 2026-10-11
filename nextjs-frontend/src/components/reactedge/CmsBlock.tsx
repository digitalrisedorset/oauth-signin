import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetResourceResolver} from "@/reactedge/Model/widget-resource-resolver";

export default async function CmsBlock() {
    const resources = await new WidgetResourceResolver().resolve("cmsblock");

    return (
        <>
            <ReactEdgeStyles css={resources.css} />
            <div
                dangerouslySetInnerHTML={{
                    __html: resources?.html ?? "",
                }}
            />
        </>
    );
}
