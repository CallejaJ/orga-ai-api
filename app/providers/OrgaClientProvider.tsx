// app/providers/OrgaClientProvider.tsx
"use client";
import { OrgaAI, OrgaAIProvider } from "@orga-ai/react";
import type React from "react";
import { useEffect, useRef } from "react";

export function OrgaClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && typeof window !== "undefined") {
      OrgaAI.init({
        logLevel: "info",
        sessionConfigEndpoint: "/api/orga-client-secrets",
        model: "orga-1-beta",
        voice: "alloy",
      });
      initialized.current = true;
    }
  }, []);

  return <OrgaAIProvider>{children}</OrgaAIProvider>;
}
