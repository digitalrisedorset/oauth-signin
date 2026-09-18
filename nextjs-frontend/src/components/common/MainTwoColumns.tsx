import type { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
};

export default function MainTwoColumns({ children }: MainProps) {
    return (
        <main className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {children}
            </div>
        </main>
    );
}