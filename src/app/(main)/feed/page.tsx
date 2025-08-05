import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faMessage } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/shared/Sidebar";
import sbstyles from "@/shared/Sidebar.module.css";
import Details from "@/components/Details";
import Thread from "@/components/Thread";
import { Type } from "@/enum";

export default function Feed() {
  return (
    <Sidebar
      articleContent={<>
        <Details
          maxWidth={37.75}
          breakWidth={23.85}
          leftFilter={["Type", ["All", "Opinions", "Peeves"]]}
          rightFilter={["Score", ["All", "Unpopular", "Popular"]]}
          bottomFilters={[
            ["Sort", ["Newest", "Oldest",
              <><FontAwesomeIcon icon={faSquarePollVertical}/> {"+"}</>,
              <><FontAwesomeIcon icon={faSquarePollVertical}/> {"-"}</>,
              <><FontAwesomeIcon icon={faMessage}/> {"+"}</>,
              <><FontAwesomeIcon icon={faMessage}/> {"-"}</>]],
            ["Categories", []]]}
        />
        <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "2rem"}}>
          <Thread type={Type.OPINIONS} />
          <Thread type={Type.OPINIONS} />
          <Thread type={Type.OPINIONS} />
          <Thread type={Type.PEEVES} />
          <Thread type={Type.PEEVES} />
          <Thread type={Type.PEEVES} />
        </div>
      </>}
      asideContent={<>
        <div className={sbstyles.stats}>
          <h2>Categories</h2>
          <h3>#Category (O)</h3>
          <h3>#Category (P)</h3>
          <h3>#Category (O)</h3>
        </div>
        <div className={sbstyles.featured}>
          <h2>Featured Thread</h2>
          <Thread type={Type.OPINIONS} />
        </div>
      </>}
    />
  );
}