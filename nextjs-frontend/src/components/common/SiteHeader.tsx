import Usp from "@/components/reactedge/Usp";
import Megamenu from "@/components/reactedge/Megamenu";

export default function SiteHeader() {
    return (
        <header>
            <Usp/>
            <div className="megamenu flex items-center justify-center gap-8 py-3 px-4">
                <Megamenu/>
            </div>
        </header>
    );
}