import styles from "./BlogLink.module.css";

export default function BlogLink({
  isPinned = false,
}: Readonly<{
  isPinned?: boolean;
}>) {
  return (
    <a href="/blog/test" className={styles.div}>
      <h2>Notification of Post Title of Post Title of Post</h2>
      {isPinned && <span>Pinned</span>}
      <div>
        <p>Type?</p>
        <p>00 00 0000</p>
      </div>
    </a>
  );
}