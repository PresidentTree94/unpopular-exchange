import styles from "./Sidebar.module.css";

export default function Sidebar({
  articleContent, asideContent,
}: Readonly<{
  articleContent: React.ReactNode;
  asideContent: React.ReactNode;
}>) {
  return (
    <section className={styles.section}>
      <article>{articleContent}</article>
      <aside>{asideContent}</aside>
    </section>
  );
}