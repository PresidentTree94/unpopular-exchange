import Link from "next/link";
import styles from "./layout.module.css";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src="https://placehold.co/100x100" />
          <h3>AccountName</h3>
        </div>
        <div className={styles.links}>
          <div>
            <h2>000</h2>
            <Link href="/profile">Threads Started</Link>
          </div>
          <div>
            <h2>000</h2>
            <Link href="/profile/joined">Threads Joined</Link>
          </div>
          <div>
            <h2>000%</h2>
            <Link href="/profile/score"><span>Unpopular</span> Score</Link>
          </div>
        </div>
      </header>
      <section className={styles.section}>
        {children}
      </section>
    </>
  );
}