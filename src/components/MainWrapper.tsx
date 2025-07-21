import styles from "./MainWrapper.module.css";

export default function MainWrapper({
  maxWidth, children,
}: Readonly<{
  maxWidth: number;
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main} style={{ maxWidth: `${maxWidth}rem`}}>{children}</main>
  );
}