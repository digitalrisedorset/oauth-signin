import {ReactEdgeIntro} from "@/components/Intro";
import SiteHeader from "@/components/common/SiteHeader";
import Main from "@/components/common/Main";

export default async function Page() {
    return (
        <>
            <SiteHeader />
            <Main>
                <ReactEdgeIntro />
            </Main>
        </>
    );
}