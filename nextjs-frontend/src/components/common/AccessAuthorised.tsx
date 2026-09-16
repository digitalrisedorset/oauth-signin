import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function AccessAuthorised() {
    return (
        <Card className="w-full max-w-xl mx-auto mt-8">
            <CardHeader className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <CheckCircle2 className="h-6 w-6" />
                </div>

                <CardTitle>
                    Access confirmed
                </CardTitle>
            </CardHeader>

            <CardContent className="text-center">
                <p className="text-muted-foreground">
                    You&apos;re signed in and authorised to access this page.
                    We&apos;re now loading the Word Editor.
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading Word Editor...
                </div>
            </CardContent>
        </Card>
    );
}