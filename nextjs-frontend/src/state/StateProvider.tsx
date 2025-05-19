import {UserStateProvider} from "@/state/UserState";

export default function StateProvider({ children }: {
    children: React.ReactNode;
}) {
    return <UserStateProvider>
        {children}
    </UserStateProvider>;
}