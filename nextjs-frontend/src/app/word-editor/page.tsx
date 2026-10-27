import CheckLogin from "@/components/auth/CheckLogin";
import AccessCheckCard from "@/components/common/AccessCheckCard";

export default function WordEditorPage() {
    return <CheckLogin>
            <AccessCheckCard />
        </CheckLogin>
}
