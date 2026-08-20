"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScriptRunner() {
  const pathname = usePathname();

  useEffect(() => {
    // Give the DOM a tiny fraction of a second to render the dangerouslySetInnerHTML content
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && typeof (window as any).initGlobalScripts === "function") {
        (window as any).initGlobalScripts();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
