import ReactEdgeStyles from "@/reactedge/components/ReactEdgeStyles";
import {WidgetResourceResolver} from "@/reactedge/Model/widget-resource-resolver";

export default async function CmsBlock() {
    const resources = await new WidgetResourceResolver().resolve("cmsblock");

    return (
        <>
            <ReactEdgeStyles css={resources.css} />
            <section className="mt-10 w-full border-t border-slate-200 px-5 py-10 sm:px-8 md:py-14 [&_.cmsblock-content]:mx-auto [&_.cmsblock-content]:grid [&_.cmsblock-content]:w-full [&_.cmsblock-content]:max-w-6xl [&_.cmsblock-content]:grid-cols-1 [&_.cmsblock-content]:items-center [&_.cmsblock-content]:gap-8 md:[&_.cmsblock-content]:grid-cols-2 md:[&_.cmsblock-copy]:[grid-row:auto] md:[&_.cmsblock-media]:[grid-row:auto] [&_.cmsblock-copy]:text-base [&_.cmsblock-copy]:leading-relaxed [&_.cmsblock-copy]:text-slate-700 [&_.cmsblock-media]:m-0 [&_.cmsblock-media]:overflow-hidden [&_.cmsblock-media]:rounded-xl [&_.cmsblock-media_img]:h-72 [&_.cmsblock-media_img]:w-full [&_.cmsblock-media_img]:object-cover sm:[&_.cmsblock-media_img]:h-96 md:[&_.cmsblock-media_img]:h-[34rem]">
                <div
                    dangerouslySetInnerHTML={{
                        __html: resources?.html ?? "",
                    }}
                />
            </section>
        </>
    );
}
