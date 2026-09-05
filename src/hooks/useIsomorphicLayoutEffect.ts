"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * Winston 09: SSR Isomorphic Layout Hook
 * Prevents React hydration warning: "useLayoutEffect does nothing on the server"
 * while executing synchronously before paint on the client to eliminate FOUC (Flash Of Unstyled Content).
 */
export const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
