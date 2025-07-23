import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faIcons } from "@fortawesome/free-solid-svg-icons";
import styles from "./Categories.module.css";

/*Category data arrays will also be passed.*/
export default function Categories({
  type,
}: Readonly<{
  type: string;
}>) {
  return (
    <>
      <section className={styles.grid}>
        <div className={styles.search}>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <button className={type === "opinions" ? styles.red : styles.blue}>Alphabetical</button>
            <button className={type === "opinions" ? styles.red : styles.blue}>Reverse Alphabetical</button>
            <button className={type === "opinions" ? styles.red : styles.blue}>Most Discussions</button>
            <button className={type === "opinions" ? styles.red : styles.blue}>Least Discussions</button>
          </div>
        </div>
        <div className={type === "opinions" ? styles.red : styles.blue}>
          <FontAwesomeIcon icon={faIcons} />
          <h3>#Category</h3>
          <p>000 Discussions</p>
        </div>
        <div className={type === "opinions" ? styles.red : styles.blue}>
          <FontAwesomeIcon icon={faIcons} />
          <h3>#Category</h3>
          <p>000 Discussions</p>
        </div>
        <div className={type === "opinions" ? styles.red : styles.blue}>
          <FontAwesomeIcon icon={faIcons} />
          <h3>#Category</h3>
          <p>000 Discussions</p>
        </div>
        <div className={type === "opinions" ? styles.red : styles.blue}>
          <FontAwesomeIcon icon={faIcons} />
          <h3>#Category</h3>
          <p>000 Discussions</p>
        </div>
        <div className={type === "opinions" ? styles.red : styles.blue}>
          <FontAwesomeIcon icon={faIcons} />
          <h3>#Category</h3>
          <p>000 Discussions</p>
        </div>
      </section>
    </>
  );
}