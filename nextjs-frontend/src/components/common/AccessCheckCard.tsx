import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Loader2, LockKeyhole } from "lucide-react";

export default function AccessCheckCard() {
    return (
        <Card className="w-full max-w-xl mx-auto mt-8">
            <CardHeader className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <LockKeyhole className="h-6 w-6" />
                </div>

                <CardTitle>
                    Hold tight — this page requires access
                </CardTitle>
            </CardHeader>

            <CardContent className="text-center">
                <p className="text-muted-foreground">
                    We&apos;re checking your session to see whether you
                    already have access or need to sign in.
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Checking access...
                </div>
            </CardContent>
        </Card>
    );
}