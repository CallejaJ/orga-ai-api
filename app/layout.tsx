// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { OrgaClientProvider } from "./providers/OrgaClientProvider";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orga AI - Next-Gen AI Interfaces",
  description:
    "Experience the future of human-computer interaction with real-time video and audio processing, powered by Orga AI.",
  keywords: [
    "AI",
    "WebRTC",
    "real-time",
    "video chat",
    "voice assistant",
    "orga ai",
  ],
  authors: [{ name: "Orga AI" }],
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Orga AI - Next-Gen AI Interfaces",
    description:
      "Experience the future of human-computer interaction with real-time video and audio processing",
    url: "https://your-domain.vercel.app",
    siteName: "Orga AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orga AI - Next-Gen AI Interfaces",
    description:
      "Experience the future of human-computer interaction with real-time video and audio processing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <OrgaClientProvider>{children}</OrgaClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
