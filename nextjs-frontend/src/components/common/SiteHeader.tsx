import Usp from "@/components/reactedge/Usp";
import Megamenu from "@/components/reactedge/Megamenu";
import SiteHeaderActions from "@/components/common/SiteHeaderActions";

export default function SiteHeader() {
    return (
        <header>
            <Usp />
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 sm:flex-1">
                    <Megamenu />
                </div>
                <SiteHeaderActions />
            </div>
        </header>
    );
}
