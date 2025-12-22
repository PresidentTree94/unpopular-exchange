"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faArrowTrendUp, faClock, faClockRotateLeft, faThumbsDown, faThumbsUp, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { Take } from "@/types/take";
import Thread from "@/components/Thread";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Takes({ group, threads = [] }: Readonly<{ group: string; threads: Take[]; }>) {

  const pathname = usePathname();
  const [topics, setTopics] = useState<{topic: string}[]>([]);

  let btnClr = "bg-yellow-600"
  if (pathname === "/opinions") {
    btnClr = "bg-indigo-600";
  } else if (pathname === "/peeves") {
    btnClr = "bg-rose-600";
  }

  useEffect(() => {
    const fetchTopics = async () => {
      const category = pathname.replace("/", "").replace(/s$/, "").replace(/^\w/, c => c.toUpperCase());
      const { data } = await supabase.from("takes").select("topic").eq("category", category);
      const sorted = (data ?? []).sort((a, b) => a.topic.localeCompare(b.topic));
      setTopics(sorted ?? []);
    }
    fetchTopics();
  }, [pathname]);

  return (
    <>
      <div className="border-b border-gray-700 pb-4 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-100 flex-1">{group} Takes</h2>
        <Link href="/submit" className={`text-white font-bold text-base flex items-center py-2 px-4 rounded-lg gap-2 ${btnClr}`}><FontAwesomeIcon icon={faBolt} className="!w-auto !h-5" /><span className="hidden sm:inline">Drop Your Take</span></Link>
      </div>
      <div className="box p-4 flex flex-wrap items-center gap-3">
        <h3 className="flex items-center gap-2"><FontAwesomeIcon icon={faArrowTrendUp} className="!w-auto !h-5 text-yellow-400" />Sort By:</h3>
        <button className="btn bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="!w-auto !h-4" />Newest</button>
        <button className="btn bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white flex items-center gap-1"><FontAwesomeIcon icon={faClockRotateLeft} className="!w-auto !h-4" />Oldest</button>
        <button className="btn bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white flex items-center gap-1"><FontAwesomeIcon icon={faThumbsDown} className="!w-auto !h-4" />Most Unpopular</button>
        <button className="btn bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white flex items-center gap-1"><FontAwesomeIcon icon={faThumbsUp} className="!w-auto !h-4" />Most Popular</button>
        <button className="btn bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white flex items-center gap-1"><FontAwesomeIcon icon={faFireFlameCurved} className="!w-auto !h-4" />Most Controversial</button>
        <button className="btn bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white flex items-center gap-1">Most Votes</button>
        <button className="btn bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white flex items-center gap-1">Least Votes</button>
      </div>
      {pathname !== "/" && 
        <div className="box p-4">
          <h3>Filter by Topic in {group}s</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {topics.map((t, index) => (
              <button key={index} className="btn bg-gray-700">{t.topic}</button>
            ))}
          </div>
        </div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {threads.map((item) => (
          <Thread key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}