"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {setIsOpen(!isOpen);};
  const closeMenu = () => {setIsOpen(false);};
  const pathname = usePathname();

  return (
    <>
      <nav className={`transition-[max-height] bordered border-b items-center top-0 z-1 flex flex-col sm:grid sm:grid-cols-[1fr_min-content_1fr] p-4 sm:pb-2 sm:pt-3 sm:px-0 gap-4 sm:gap-2 fixed w-full overflow-hidden ${isOpen ? "max-h-[22.55rem]" : "max-h-[5.05rem] sm:max-h-none"}`}>
        <div className="col-2 flex items-center justify-between w-full">
          <Link href="/" className="uppercase font-semibold w-min text-center"><span>Unpopular</span> Exchange</Link>
          <FontAwesomeIcon icon={faCircleDown} className={`${isOpen ? "rotate-180": ""} sm:!hidden transition-transform !h-8 !w-auto hover:cursor-pointer`} onClick={toggleMenu} />
        </div>
        <Link href="/opinions" className={`${pathname === "/opinions" ? "active bg-unpopular" : ""} col-1 row-1 justify-self-end hover:bg-unpopular`} onClick={closeMenu}>Opinions</Link>
        <Link href="/peeves" className={`${pathname === "/peeves" ? "active bg-popular" : ""} col-3 row-1 justify-self-start hover:bg-popular`} onClick={closeMenu}>Pet Peeves</Link>
        <div className={`col-span-full flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-evenly`}>
          <Link href="/blog" className={pathname === "/blog" ? "active" : ""} onClick={closeMenu}>Blog</Link>
          <Link href="/feed" className={pathname === "/feed" ? "active": ""} onClick={closeMenu}>Feed</Link>
          <Link href="/activity" className={pathname === "/activity" ? "active" : ""} onClick={closeMenu}>Activity</Link>
          <Link href="/profile" className={pathname.startsWith("/profile") ? "active" : ""} onClick={closeMenu}>Profile</Link>
          <Link href="/submit" className={pathname === "/submit" ? "active" : ""} onClick={closeMenu}>Submit</Link>
        </div>
      </nav>
      <main className="p-12 md:p-16 max-w-344 mx-auto mt-[5.05rem] sm:mt-[6.3rem] flex flex-col items-center gap-8 overflow-hidden">{children}</main>
    </>
  );
}