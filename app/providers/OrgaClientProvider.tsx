"use client";
import dynamic from "next/dynamic";
import type React from "react";

// Cargar el provider real solo en el cliente, no en el servidor
const OrgaProviderClient = dynamic(() => import("./OrgaProviderClient"), {
  ssr: false,
});

export function OrgaClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OrgaProviderClient>{children}</OrgaProviderClient>;
}
