import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import { NavbarProvider } from "@/contexts/NavbarContext";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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
      <body className="flex flex-col justify-between min-h-screen">
        <NavbarProvider>
          <Navbar />
          <main className="p-8 flex flex-col gap-8 items-center max-w-7xl m-auto mt-14 md:mt-17 w-full">
            {children}
          </main>
          <footer className="bg-gray-800 border-t border-gray-700 py-4 sm:py-6 px-6 sm:px-8 flex items-center justify-between gap-4">
            <nav className="flex flex-wrap gap-4">
              <Link href="/about" className="text-gray-400 hover:text-gray-300">About</Link>
              <Link href="" className="text-gray-400 hover:text-gray-300">Guidelines</Link>
              <Link href="" className="text-gray-400 hover:text-gray-300">Privacy</Link>
              <Link href="" className="text-gray-400 hover:text-gray-300">Contact</Link>
            </nav>
            <p className="text-gray-500 text-right">&copy; 2025 Unpopular Exchange</p>
          </footer>
        </NavbarProvider>
      </body>
    </html>
  );
}
