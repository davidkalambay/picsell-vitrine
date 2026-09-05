"use client";

import { useEffect, useState } from "react";

/**
 * Winston 09: SSR Safe Mount Detection
 * Returns true only after component has mounted on the client.
 */
export function useIsMounted(): boolean {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted;
}

export default useIsMounted;
