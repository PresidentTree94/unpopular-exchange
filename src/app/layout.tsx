import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"], display: "swap"});

export const metadata: Metadata = {
  title: "Unpopular Exchange",
  description: "Where your most controversial thought might just be mainstream.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
