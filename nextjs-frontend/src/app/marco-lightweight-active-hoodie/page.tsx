import ProductTiled from "@/components/reactedge/ProductTiled";
import SiteHeader from "@/components/common/SiteHeader";
import MainTwoColumns from "@/components/common/MainTwoColumns";
import MarcoProductDetails from "@/components/products/Marco";
import ProductDemoHeader from "@/components/products/Header";

export default function MarcoLightweightActiveHoodiePage() {
    return <>
            <SiteHeader />
            <ProductDemoHeader />
            <MainTwoColumns>
                <ProductTiled />
                <MarcoProductDetails />
            </MainTwoColumns>
        </>
}
