import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tiagoeira.com"),
  title: "Tiago Eira — Senior Software Developer & Tech Lead",
  description:
    "Portfolio and professional experience of Tiago Eira, a senior software developer and tech lead based in Lisbon, Portugal.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Tiago Eira — Senior Software Developer & Tech Lead",
    description:
      "More than a decade building thoughtful web products and leading teams from Lisbon, Portugal.",
    url: "/",
    siteName: "Tiago Eira",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tiago Eira — Senior Software Developer & Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiago Eira — Senior Software Developer & Tech Lead",
    description:
      "More than a decade building thoughtful web products and leading teams from Lisbon, Portugal.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/favicons/safari-pinned-tab.svg", color: "#2f3447" }],
  },
  manifest: "/favicons/site.webmanifest",
  other: { "msapplication-config": "/favicons/browserconfig.xml" },
};

export const viewport: Viewport = {
  themeColor: "#2f3447",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
