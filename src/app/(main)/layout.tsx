"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <>
      <nav className="bg-tertiary border-b border-secondary grid py-2 gap-2 grid-cols-[1fr_min-content_1fr] items-center">
        <Link href="/" className="col-2 text-center uppercase font-semibold"><span>Unpopular</span> Exchange</Link>
        <Link href="/opinions" className={`${pathname === "/opinions" ? "active bg-unpopular" : ""} col-1 row-1 justify-self-end hover:bg-unpopular`}>Opinions</Link>
        <Link href="/peeves" className={`${pathname === "/peeves" ? "active bg-popular" : ""} col-3 row-1 justify-self-start hover:bg-popular`}>Pet Peeves</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}