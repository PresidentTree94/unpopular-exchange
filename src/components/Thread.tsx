import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faSquarePollVertical, faMessage, faIcons, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./Thread.module.css";

export default function Thread({
  title = "Title of Thread Title of Thread Title of Thread",
  description,
}: Readonly<{
  title?: string;
  description?: string;
}>) {
  return (
    <div className={styles.div}>
      <i>Username thinks...</i>
      {!description ? <><h3><a href="">{title}</a></h3><span>Unpopular</span></> :
      <><h2>{title}</h2><p>{description}</p><div className={styles.bar}><FontAwesomeIcon icon={faCircleDot} /></div><p>000% of users agree with this.</p></>}
      <FontAwesomeIcon icon={faEllipsisVertical} />
      <div className={styles.stats}>
        <div>
          <p><span>000</span> <FontAwesomeIcon icon={faSquarePollVertical} /></p>
          <p><span>000</span> <FontAwesomeIcon icon={faMessage} /></p>
        </div>
        <div>
          <a href="">#<FontAwesomeIcon icon={faIcons} /></a>
          <a href="">#<FontAwesomeIcon icon={faIcons} /></a>
        </div>
      </div>
    </div>
  );
}