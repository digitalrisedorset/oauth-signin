import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
};

export default function Main({ children }: MainProps) {
    return (
        <Card className="w-full max-w-7xl mx-auto">
            {children}
        </Card>
    );
}