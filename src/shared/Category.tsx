import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack, faSquarePollVertical, faMessage } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import sbstyles from "./Sidebar.module.css";
import Details from "../components/Details";
import Thread from "../components/Thread";
import { Type } from "@/enum";
import styles from "./Category.module.css";

export default function Category({
  type,
}: Readonly<{
  type: Type;
}>) {
  return (
    <Sidebar
      articleContent={<>
        <div className={`${styles.top} ${sbstyles.btn}`}>
          <h1>#Category</h1>
          <FontAwesomeIcon icon={faThumbTack} />
        </div>
        <Details
          maxWidth={36.25}
          breakWidth={31.75}
          leftFilter={["Sort", ["Newest", "Oldest", 
            <><FontAwesomeIcon icon={faSquarePollVertical}/> {"+"}</>,
            <><FontAwesomeIcon icon={faSquarePollVertical}/> {"-"}</>,
            <><FontAwesomeIcon icon={faMessage}/> {"+"}</>,
            <><FontAwesomeIcon icon={faMessage}/> {"-"}</>
          ]]}
          rightFilter={["Score", ["All", "Unpopular", "Popular"]]}
        />
        <div className={styles.threads}>
          <Thread type={type} />
          <Thread type={type} />
          <Thread type={type} />
          <Thread type={type} />
          <Thread type={type} />
          <Thread type={type} />
        </div>
      </>}
      asideContent={<>
        <div className={sbstyles.stats}>
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
        <div className={sbstyles.featured}>
          <h2>Featured Thread</h2>
          <Thread type={type} />
        </div>
      </>}
    />
  );
}