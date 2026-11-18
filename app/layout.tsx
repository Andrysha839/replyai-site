import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kadex.vip"),
  title: "KADEX — Verified B2B Data & Business Automation",
  description:
    "KADEX builds verified B2B databases (2,100+ Polish logistics, transport and freight companies) and AI automation for small businesses, including ReplyAI for Instagram.",
  openGraph: {
    title: "KADEX — Verified B2B Data & Business Automation",
    description:
      "Verified B2B databases and AI automation tools for small businesses.",
    url: "https://www.kadex.vip",
    siteName: "KADEX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}