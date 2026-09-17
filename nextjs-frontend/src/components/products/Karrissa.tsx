import StructureProductDetails, {
    type ProductDetails,
} from "./StructureProductDetails";

const karissa: ProductDetails = {
    title: "Karissa V-Neck Tee",

    description:
        'The Karissa V-Neck Tee features a semi-fitted shape that\'s flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common "problem" areas.',

    sku: "WS10",

    material: "Cotton, EverCool™",

    style: "Tee",

    price: "£32.00",

    sizes: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
    ],

    colours: [
        {
            label: "Green",
            value: "53",
            className: "bg-green-600",
        },
        {
            label: "Red",
            value: "58",
            className: "bg-red-600",
        },
        {
            label: "Yellow",
            value: "60",
            className: "bg-yellow-400",
        },
    ],
};

export default function KarissaProductDetails() {
    return (
        <StructureProductDetails product={karissa} />
    );
}