import {
    CardContent,
} from "@/components/ui/card";
import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetResourceResolver} from "@/reactedge/Model/widget-resource-resolver";

export default async function CmsBlock() {
    const resources = await new WidgetResourceResolver().resolve("cmsblock");

    return (
        <>
            <ReactEdgeStyles css={resources.css} />
            <CardContent>
                <div
                    dangerouslySetInnerHTML={{
                        __html: resources?.html ?? "",
                    }}
                />
            </CardContent>
        </>
    );
}
