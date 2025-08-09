"use client";
import { useState, useEffect } from "react";
import { getEverything } from "@/api";
import Details from "../components/Details";
import { ThreadType } from "@/enum";
import Threads from "@/components/Threads";


/*Thread data category arrays will also be passed.*/
export default function ProfileThreads({
  title,
}: Readonly<{
  title: string;
}>) {

  const [threads, setThreads] = useState<ThreadType[]>([]);
  useEffect(() => {
    getEverything<ThreadType>("threads").then(setThreads);
  }, []);

  return (
    <>
      <Details
        maxWidth={37.75}
        breakWidth={23.85}
        leftFilter={["Type", ["All", "Opinions", "Peeves"]]}
        rightFilter={["Score", ["All", "Unpopular", "Popular"]]}
        bottomFilters={[["Categories", []]]}
      />
      <h2>{title}</h2>
      <Threads data={threads} />
    </>
  );
}