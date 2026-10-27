import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LockKeyhole } from "lucide-react";
import type { UserAccess } from "@/app/types/keystone";

type AccessDeniedCardProps = {
    requiredAccess: UserAccess;
};

const accessLabels: Record<UserAccess, string> = {
    seller: "Seller",
    cmseditor: "CMS Editor",
};

export default function AccessDeniedCard({ requiredAccess }: AccessDeniedCardProps) {
    return (
        <Card className="mx-auto mt-8 w-full max-w-xl">
            <CardHeader className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <LockKeyhole className="h-6 w-6" />
                </div>
                <CardTitle>Access denied</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
                Your account does not have {accessLabels[requiredAccess]} access.
            </CardContent>
        </Card>
    );
}
