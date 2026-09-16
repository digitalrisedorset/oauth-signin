import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetResourceResolver} from "@/reactedge/Model/widget-resource-resolver";
import {MegamenuClient} from "@/components/reactedge/MegamenuClient";

export default async function Megamenu() {
    const resources =
        await new WidgetResourceResolver().resolve("megamenu");

    return (
        <>
            <ReactEdgeStyles css={resources.css}/>
            <MegamenuClient
                ssrHtml={resources?.html ?? ""}
                bootstrap={resources?.bootstrap}
            />
        </>
    );
}