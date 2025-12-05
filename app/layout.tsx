import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Navbar from "@/components/Navbar";
import "./globals.css";

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
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-8 flex flex-col gap-8 max-w-7xl m-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
