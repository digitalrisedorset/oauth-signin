import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetResourceResolver} from "@/reactedge/Model/widget-resource-resolver";
import {UspClient} from "@/components/reactedge/UspClient";

export default async function Usp() {
    const resources =
        await new WidgetResourceResolver().resolve("usp");

    return (
        <>
            <ReactEdgeStyles css={resources.css} />
            <UspClient
                ssrHtml={resources?.html ?? ""}
                bootstrap={resources?.bootstrap}
            />
        </>
    );
}