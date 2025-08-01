import styles from "./BlogLink.module.css";

export default function BlogLink({
  isPinned = false,
}: Readonly<{
  isPinned?: boolean;
}>) {
  return (
    <div className={styles.div}>
      <h2>Title of Post Title of Post Title of Post</h2>
      {isPinned && <span>Pinned</span>}
      <div>
        <p>Type?</p>
        <p>00 00 0000</p>
      </div>
    </div>
  );
}