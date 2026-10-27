"use client";

import {useMemo} from "react";
import {useUserState} from "@/state/UserState";
import {RuntimeConfigBuilder, type ReactEdgeRuntimeUser} from "@/reactedge/Model/RuntimeConfig/RuntimeConfigBuilder";

/**
 * Supplies an up-to-date, presentation-only identity snapshot to identity-aware
 * widgets. Do not use this data to authorise API requests.
 *
 * identityReady remains false until the initial session lookup completes.
 */
export function useReactEdgeRuntimeConfig() {
    const {user} = useUserState();
    const userId = user?.id ?? null;
    const isSeller = user?.access.includes('seller') ?? false;

    const runtime = useMemo(() => {
        const runtimeUser: ReactEdgeRuntimeUser | null = userId
            ? {id: userId, access: isSeller ? ['seller'] : []}
            : null;

        return new RuntimeConfigBuilder().build(runtimeUser);
    }, [userId, isSeller]);

    return {runtime, identityReady: user !== undefined};
}
