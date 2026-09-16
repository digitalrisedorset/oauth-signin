import { Badge } from "@/components/ui/badge";

export default function ProductDemoHeader() {
    return (
        <header className="w-full max-w-7xl mx-auto px-4 mb-8">
            <div className="space-y-3">
                <Badge variant="secondary">
                    Example Next.js Product Page
                </Badge>

                <p className="max-w-3xl text-muted-foreground">
                    This is a fictitious product page using mocked product data.
                    It demonstrates how a Next.js application can retain ownership
                    of its product experience while a ReactEdge capability coexists
                    within the page and provides the product gallery.
                </p>
            </div>
        </header>
    );
}