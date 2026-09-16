import ProductGallery from "@/components/reactedge/ProductGallery";
import SiteHeader from "@/components/common/SiteHeader";
import MainTwoColumns from "@/components/common/MainTwoColumns";
import KarissaProductDetails from "@/components/products/Karrissa";
import ProductDemoHeader from "@/components/products/Header";

export default function GalleryPage() {
    return <>
            <SiteHeader />
            <ProductDemoHeader />
            <MainTwoColumns>
                <ProductGallery />
                <KarissaProductDetails />
            </MainTwoColumns>
        </>
}
