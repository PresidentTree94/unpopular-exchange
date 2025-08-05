import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import styles from "./Comment.module.css";

export default function Comment({
  isReply = false,
}: Readonly<{
  isReply?: boolean;
}>) {
  return (
    <div className={styles.user}>
      <img src="https://placehold.co/100x100"/>
      <div className={!isReply ? styles.left : styles.right}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
        {!isReply ? <i>Username says...</i> : <i>Username says to Username...</i>}
        <p>Comments go here. Comments go here. Comments go here. Comments go here. Comments go here. Comments go here.</p>
      </div>
    </div>
  );
}