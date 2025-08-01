import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faMessage } from "@fortawesome/free-solid-svg-icons";
import Details from "../components/Details";
import Thread from "../components/Thread";
import { Type } from "@/enum";
import styles from "./Category.module.css";

export default function Category({
  threadType,
}: Readonly<{
  threadType: Type;
}>) {
  return (
    <section className={styles.section}>
      <article>
        <h1>#Category</h1>
        <Details
          maxWidth={55.53}
          breakWidth={41}
          leftLeg="Sort"
          left={["Newest", "Oldest", 
            <><FontAwesomeIcon icon={faSquarePollVertical}/> {"+"}</>,
            <><FontAwesomeIcon icon={faSquarePollVertical}/> {"-"}</>,
            <><FontAwesomeIcon icon={faMessage}/> {"+"}</>,
            <><FontAwesomeIcon icon={faMessage}/> {"-"}</>
          ]}
          rightLeg="Score"
          right={["All", "Unpopular", "Mixed", "Popular"]}
        />
        <Thread type={threadType} />
        <Thread type={threadType} />
        <Thread type={threadType} />
        <Thread type={threadType} />
        <Thread type={threadType} />
        <Thread type={threadType} />
      </article>
      <aside>
        <div>
          <h2>Statistics</h2>
          <div>
            <h3>000%</h3>
            <p>Threads are unpopular</p>
          </div>
          <div>
            <h3>000%</h3>
            <p>Average unpopular score</p>
          </div>
          <div>
            <h3>000%</h3>
            <p>Your unpopular score</p>
          </div>
        </div>
        <div>
          <h2>Featured Thread</h2>
          <Thread type={threadType} />
        </div>
      </aside>
    </section>
  );
}