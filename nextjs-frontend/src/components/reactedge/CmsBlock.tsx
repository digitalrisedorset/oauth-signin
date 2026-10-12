import {
    CardContent,
} from "@/components/ui/card";
import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetResourceResolver} from "@/reactedge/Model/widget-resource-resolver";
import { CmsBlockClient } from "@/components/reactedge/CmsBlockClient";

export default async function CmsBlock() {
    const resources = await new WidgetResourceResolver().resolve("cmsblock");

    return (
        <>
            <ReactEdgeStyles css={resources.css} />
            <CardContent>
                <CmsBlockClient
                    ssrHtml={resources?.html ?? ""}
                    bootstrap={resources?.bootstrap}
                />
            </CardContent>
        </>
    );
}
