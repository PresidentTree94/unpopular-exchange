import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faMessage, faIcons } from "@fortawesome/free-solid-svg-icons";
import styles from "./Threads.module.css";

/*Thread data arrays will also be passed.*/
export default function Threads({
  title,
}: Readonly<{
  title: string;
}>) {
  return (
    <>
      <details className={styles.details}>
        <summary>Filter Threads</summary>
        <div>
          <fieldset>
            <legend>Type</legend>
            <button>All</button>
            <button>Opinions</button>
            <button>Peeves</button>
          </fieldset>
          <fieldset>
            <legend>Score</legend>
            <button>All</button>
            <button>Unpopular</button>
            <button>Mixed</button>
            <button>Popular</button>
          </fieldset>
        </div>
        <fieldset>
          <legend>Categories</legend>
        </fieldset>
      </details>
      <h2>{title}</h2>
      <div className={styles.div}>
        <h3>Title of Thread Title of Thread Title of Thread</h3>
        <span>Unpopular</span>
        <div>
          <div>
            <p>000 <FontAwesomeIcon icon={faSquarePollVertical} /></p>
            <p>000 <FontAwesomeIcon icon={faMessage} /></p>
          </div>
          <div>
            <p>#<FontAwesomeIcon icon={faIcons} /></p>
            <p>#<FontAwesomeIcon icon={faIcons} /></p>
          </div>
        </div>
      </div>
      <div className={styles.div}>
        <h3>Title of Thread Title of Thread Title of Thread</h3>
        <span>Unpopular</span>
        <div>
          <div>
            <p>000 <FontAwesomeIcon icon={faSquarePollVertical} /></p>
            <p>000 <FontAwesomeIcon icon={faMessage} /></p>
          </div>
          <div>
            <p>#<FontAwesomeIcon icon={faIcons} /></p>
            <p>#<FontAwesomeIcon icon={faIcons} /></p>
          </div>
        </div>
      </div>
      <div className={styles.div}>
        <h3>Title of Thread Title of Thread Title of Thread</h3>
        <span>Unpopular</span>
        <div>
          <div>
            <p>000 <FontAwesomeIcon icon={faSquarePollVertical} /></p>
            <p>000 <FontAwesomeIcon icon={faMessage} /></p>
          </div>
          <div>
            <p>#<FontAwesomeIcon icon={faIcons} /></p>
            <p>#<FontAwesomeIcon icon={faIcons} /></p>
          </div>
        </div>
      </div>
    </>
  );
}