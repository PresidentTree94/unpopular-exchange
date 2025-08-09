"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack, faSquarePollVertical, faMessage } from "@fortawesome/free-solid-svg-icons";
import { getCategoryByTypeAndTitle, getThreadsByCategoryId } from "@/api";
import Sidebar from "./Sidebar";
import sbstyles from "./Sidebar.module.css";
import Details from "../components/Details";
import { Type, ThreadType, CategoryType } from "@/enum";
import Threads from "@/components/Threads";
import styles from "./Category.module.css";
import Thread from "@/components/Thread";

export default function Category({
  type,
}: Readonly<{
  type: Type;
}>) {

  const params = useParams();
  const title = params.category as string;

  const [category, setCategory] = useState<CategoryType>();
  const [threads, setThreads] = useState<ThreadType[]>([]);
  useEffect(() => {
    getCategoryByTypeAndTitle(type, title).then(setCategory);
  }, [type, title]);
  useEffect(() => {
    category && getThreadsByCategoryId(category.id).then(setThreads);
  }, [category]);

  return (
    <Sidebar
      articleContent={<>
        <div className={`${styles.top} ${sbstyles.btn}`}>
          <h1>#{category?.title}</h1>
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
        <Threads data={threads} />
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
          {threads.length > 0 && <Thread data={threads[Math.floor(Math.random() * ((threads.length - 1) + 1))]} />}
        </div>
      </>}
    />
  );
}