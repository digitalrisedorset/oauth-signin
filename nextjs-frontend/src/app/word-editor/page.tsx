import CheckLogin from "@/components/auth/CheckLogin";
import Usp from "@/components/reactedge/Usp";
import Dashboard from "@/components/Dashboard";

export default function WordEditorPage() {
    return (
        <CheckLogin>
            <Usp />
            <Dashboard />
        </CheckLogin>
    );
}
