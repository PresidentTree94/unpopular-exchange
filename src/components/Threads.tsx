import Thread from "./Thread";
import styles from "./Threads.module.css";

/*Thread data category arrays will also be passed.*/
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
      <article className={styles.article}>
        <Thread />
        <Thread />
        <Thread />
      </article>
    </>
  );
}