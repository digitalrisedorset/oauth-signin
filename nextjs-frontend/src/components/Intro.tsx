import {
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ReactEdgeIntro() {
    return (
        <>
            <CardHeader>
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                        <CardTitle className="text-3xl">
                            Next.js + ReactEdge Demo
                        </CardTitle>

                        <p className="mt-4 text-base">
                            Demonstrating how new capabilities can be introduced
                            into an existing Next.js application{" "}
                            <strong>without modifying the core platform.</strong>
                        </p>
                    </div>

                    <Image
                        src="https://www.reactedge.net/wp-content/themes/digitalrisedorset/images/reactedge.webp"
                        alt="ReactEdge"
                        width={384}
                        height={120}
                        sizes="(max-width: 768px) 100vw, 384px"
                        className="h-auto w-full max-w-sm object-contain"
                    />
                </div>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">
                            What this demo shows
                        </h3>

                        <p className="mb-3">
                            This Next.js application runs with ReactEdge
                            capabilities layered on top.
                        </p>

                        <ul className="list-disc space-y-1 pl-6">
                            <li>USP bar</li>
                            <li>Mega menu</li>
                            <li>One Product Gallery Dual-mode enabled</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-xl font-semibold">
                            Hero Product
                        </h3>

                        <p>
                            One Product Gallery capability. Two experiences,
                            selected by product context.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild>
                        <a href="https://reactedge.net">
                            Start building better with ReactEdge.
                        </a>
                    </Button>

                    <Button variant="outline" asChild>
                        <a href="/marco-lightweight-active-hoodie">
                            View Tiled Gallery
                        </a>
                    </Button>

                    <Button variant="outline" asChild>
                        <a href="/karissa-v-neck-tee">
                            View Classic Gallery
                        </a>
                    </Button>
                </div>
            </CardContent>
        </>
    );
}