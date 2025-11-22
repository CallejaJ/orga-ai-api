"use client";
import { OrgaAI, OrgaAIProvider } from "@orga-ai/react";
import type React from "react";
import { useEffect, useRef } from "react";

// Variable global para asegurar una sola inicialización
let isOrgaInitialized = false;

export function OrgaClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initRef = useRef(false);

  useEffect(() => {
    // Solo inicializar una vez, incluso con React StrictMode
    if (!isOrgaInitialized && !initRef.current) {
      console.log("🚀 Inicializando OrgaAI...");

      OrgaAI.init({
        logLevel: "debug",
        sessionConfigEndpoint: "/api/orga-client-secrets",
        model: "orga-1-beta",
        voice: "alloy",
      });

      isOrgaInitialized = true;
      initRef.current = true;

      console.log("✅ OrgaAI inicializado correctamente");
    }
  }, []);

  return <OrgaAIProvider>{children}</OrgaAIProvider>;
}
