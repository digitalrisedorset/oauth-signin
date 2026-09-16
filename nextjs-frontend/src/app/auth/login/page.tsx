import LoginForm from "@/components/LoginForm";
import SiteHeader from "@/components/common/SiteHeader";
import Main from "@/components/common/Main";

export default function LoginPage() {
    return (
        <>
            <SiteHeader />
            <Main>
                <LoginForm />
            </Main>
        </>
    );
}
