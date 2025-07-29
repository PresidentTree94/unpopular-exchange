"use client";
import { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

export default function DefaultLayout({
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
      <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
        <div>
          <Link href="/"><span>Unpopular</span> Exchange</Link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={toggleMenu}><path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z"/></svg>
        </div>
        <Link href="/opinions" className={pathname === "/opinions" ? styles.active : ""} onClick={closeMenu}>Opinions</Link>
        <Link href="/peeves" className={pathname === "/peeves" ? styles.active : ""} onClick={closeMenu}>Pet Peeves</Link>
        <div>
          <Link href="/blog" className={pathname === "/blog" ? styles.active : ""} onClick={closeMenu}>Blog</Link>
          <Link href="/feed" className={pathname === "/feed" ? styles.active : ""}>Feed</Link>
          <Link href="/activity" className={pathname === "/activity" ? styles.active : ""}>Activity</Link>
          <Link href="/profile" className={pathname.startsWith("/profile") ? styles.active : ""} onClick={closeMenu}>Profile</Link>
          <Link href="/submit" className={pathname === "/submit" ? styles.active : ""} onClick={closeMenu}>Submit</Link>
          <Link href="/settings" className={pathname === "/settings" ? styles.active : ""}>Settings</Link>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}