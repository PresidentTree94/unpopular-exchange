"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getCategoriesByType, getEverything } from "@/api";
import { Type, CategoryType, ThreadType } from "@/enum";
import { IconMap } from "@/icons";
import styles from "./Categories.module.css";

export default function Categories({
  type,
}: Readonly<{
  type: Type;
}>) {

  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [threads, setThreads] = useState<ThreadType[]>([]);
  useEffect(() => {
    getCategoriesByType(type).then(setCategories);
    getEverything<ThreadType>("threads").then(setThreads);
  });

  return (
    <>
      <section className={styles.grid}>
        <div className={styles.search}>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <button className={type === Type.OPINIONS ? styles.red : styles.blue}>Alphabetical</button>
            <button className={type === Type.OPINIONS ? styles.red : styles.blue}>Reverse Alphabetical</button>
            <button className={type === Type.OPINIONS ? styles.red : styles.blue}>Most Discussions</button>
            <button className={type === Type.OPINIONS ? styles.red : styles.blue}>Least Discussions</button>
          </div>
        </div>
        {categories.map((item) => (
          <a href={"/" + type + "/category/" + item.title} className={type === Type.OPINIONS ? styles.red : styles.blue}>
            <FontAwesomeIcon icon={IconMap[item.icon]} />
            <h3>#{item.title}</h3>
            <p>{String(threads.filter((thread) => thread.categoryIds.includes(item.id)).length).padStart(3, "0")} Discussions</p>
          </a>
        ))}
      </section>
    </>
  );
}