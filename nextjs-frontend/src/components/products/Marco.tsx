import StructureProductDetails, {
    type ProductDetails,
} from "./StructureProductDetails";

const marco: ProductDetails = {
    title: "Marco Lightweight Active Hoodie",

    description:
        "For cold-weather training or post-game layering, you need something more than a basic fleece. Our Marco Lightweight Active Hoodie brings both style and performance to the plate, court, or touchline. The smooth-faced, brushed-back fabric blocks wind and traps body heat, while integrated Cocona® fibers pull moisture away.",

    sku: "MH13",

    material: "Cocona® performance fabric, Fleece",

    price: "£74.00",

    sizes: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
    ],

    colours: [
        {
            label: "Blue",
            value: "50",
            className: "bg-blue-600",
        },
        {
            label: "Green",
            value: "53",
            className: "bg-green-600",
        },
        {
            label: "Lavender",
            value: "54",
            className: "bg-purple-300",
        },
    ],
};

export default function MarcoProductDetails() {
    return (
        <StructureProductDetails product={marco} />
    );
}