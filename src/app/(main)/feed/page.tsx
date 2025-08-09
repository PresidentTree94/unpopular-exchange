"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faMessage } from "@fortawesome/free-solid-svg-icons";
import { getEverything } from "@/api";
import Sidebar from "@/shared/Sidebar";
import sbstyles from "@/shared/Sidebar.module.css";
import Details from "@/components/Details";
import { ThreadType } from "@/enum";
import Threads from "@/components/Threads";
import Thread from "@/components/Thread";

export default function Feed() {
  const [threads, setThreads] = useState<ThreadType[]>([]);
  useEffect(() => {
    getEverything<ThreadType>("threads").then(setThreads);
  }, []);

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
            ["Categories", ["#category", "#category", "#category"]]]}
        />
        <Threads data={threads} />
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
          {threads.length > 0 && <Thread data={threads[Math.floor(Math.random() * ((threads.length - 1) + 1))]} />}
        </div>
      </>}
    />
  );
}