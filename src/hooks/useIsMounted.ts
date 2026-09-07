"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Winston 09: SSR Safe Mount Detection
 * Returns true only after component has mounted on the client.
 */
export function useIsMounted(): boolean {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
}

export default useIsMounted;
