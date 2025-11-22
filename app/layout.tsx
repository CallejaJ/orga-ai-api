// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { OrgaClientProvider } from "./providers/OrgaClientProvider";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orga AI - Next-Gen AI Interfaces",
  description: "Experience real-time AI interactions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <OrgaClientProvider>{children}</OrgaClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
