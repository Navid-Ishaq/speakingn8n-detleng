import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://speakingn8n.detleng.com"),
  title: "Speaking n8n — Speak with Confidence",
  description: "A practical public-speaking course built around real n8n learning, one workflow, and different kinds of rooms.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Speaking n8n — Speak with Confidence",
    description: "Speak. Build. Speak again. A public-speaking course built around real n8n practice.",
    url: "https://speakingn8n.detleng.com",
    siteName: "Speaking n8n",
    type: "website",
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
