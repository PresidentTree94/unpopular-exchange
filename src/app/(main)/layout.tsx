"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const navLinks = [
  { label: "Blog", href: "/blog" }
];

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <>
      <nav className={styles.nav}>
        <div>
          <a><span>Unpopular</span> Exchange</a>
        </div>
        <a>Opinions</a>
        <a>Pet Peeves</a>
        <div>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={pathname === href ? styles.active : ""}>{label}</Link>
          ))}
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}