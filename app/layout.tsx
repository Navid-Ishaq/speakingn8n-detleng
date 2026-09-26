import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speaking n8n — Speak with Confidence",
  description: "A practical public-speaking course built around one real n8n workflow.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
