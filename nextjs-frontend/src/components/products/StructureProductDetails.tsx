"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export interface ProductColour {
    label: string;
    value: string;
    className: string;
}

export interface ProductDetails {
    title: string;
    description: string;
    sku: string;
    material: string;
    style?: string;
    price: string;
    sizes: string[];
    colours: ProductColour[];
}

interface StructureProductDetailsProps {
    product: ProductDetails;
}

export default function StructureProductDetails({
                                                    product,
                                                }: StructureProductDetailsProps) {

    function selectColour(value: string) {
        window.dispatchEvent(
            new CustomEvent("reactedge:signal", {
                detail: {
                    code: "color",
                    value,
                },
            })
        );
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-3xl">
                    {product.title}
                </CardTitle>

                <div className="text-xl text-yellow-500">
                    ★★★★☆
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <p className="leading-7">
                    {product.description}
                </p>

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <span>In stock</span>
                </div>

                <Separator />

                <dl className="space-y-3">
                    <div className="grid grid-cols-2">
                        <dt>SKU</dt>
                        <dd className="font-medium">
                            {product.sku}
                        </dd>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2">
                        <dt>Material</dt>
                        <dd className="font-medium">
                            {product.material}
                        </dd>
                    </div>

                    {product.style && (
                        <>
                            <Separator />

                            <div className="grid grid-cols-2">
                                <dt>Style</dt>
                                <dd className="font-medium">
                                    {product.style}
                                </dd>
                            </div>
                        </>
                    )}
                </dl>

                <Separator />

                <div>
                    <p className="mb-3 font-medium">Size:</p>

                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                            <Button
                                key={size}
                                variant="outline"
                                size="sm"
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="mb-3 font-medium">Color:</p>

                    <div className="flex gap-3">
                        {product.colours.map((colour) => (
                            <button
                                key={colour.value}
                                type="button"
                                aria-label={colour.label}
                                onClick={() => selectColour(colour.value)}
                                className={`h-10 w-10 rounded-full border-2 border-white ring-1 ring-gray-400 ${colour.className}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-end sm:justify-between">
                    <p className="whitespace-nowrap">
                        As low as:{" "}
                        <strong className="text-4xl">
                            {product.price}
                        </strong>
                    </p>

                    <div className="flex items-center gap-2">
                        <Input
                            type="number"
                            min="1"
                            defaultValue="1"
                            aria-label="Quantity"
                            className="w-20"
                        />

                        <Button size="lg">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}