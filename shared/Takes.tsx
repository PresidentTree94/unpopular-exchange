"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faArrowTrendUp, faClock, faClockRotateLeft, faThumbsDown, faThumbsUp, faFireFlameCurved, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { Take } from "@/types/take";
import Thread from "@/components/Thread";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Takes({ group, threads = [] }: Readonly<{ group: string; threads: Take[]; }>) {
  const pathname = usePathname();
  const [topics, setTopics] = useState<string[]>([]);

  const btnClr = {
    "/opinions": "bg-indigo-600",
    "/peeves": "bg-rose-600"
  }[pathname] ?? "bg-yellow-600";

  useEffect(() => {
    const fetchTopics = async () => {
      const category = pathname.slice(1).replace(/s$/, "");
      const formatted = category.charAt(0).toUpperCase() + category.slice(1);
      const { data } = await supabase.from("takes").select("topic").eq("category", formatted);
      const uniqueTopics = [...new Set(data?.map(t => t.topic))].sort();
      setTopics(uniqueTopics);
    };
    fetchTopics();
  }, [pathname]);

  const getTotals = (t: Take) => t.popular + t.unpopular;
  const getScore = (t: Take) => {
    const total = getTotals(t);
    return total === 0 ? null : t.unpopular / total;
  };
  const getControversial = (t: Take) => {
    const total = getTotals(t);
    return total === 0 ? Infinity : Math.abs(0.5 - getScore(t)!);
  };

  const sorters: Record<string, (a: Take, b: Take) => number> = {
    newest: (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    oldest: (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
    popular: (a, b) => (getScore(a) ?? 1) - (getScore(b) ?? 1),
    unpopular: (a, b) => (getScore(b) ?? -1) - (getScore(a) ?? -1),
    controversial: (a, b) => getControversial(a) - getControversial(b),
    mostVotes: (a, b) => getTotals(b) - getTotals(a),
    leastVotes: (a, b) => getTotals(a) - getTotals(b)
  }

  const [sortBy, setSortBy] = useState<keyof typeof sorters>("newest");
  const sortedThreads = [...threads].sort(sorters[sortBy]);

  const sortButtons = [
    {text: "Newest", value: "newest", icon: faClock},
    {text: "Oldest", value: "oldest", icon: faClockRotateLeft},
    {text: "Most Unpopular", value: "unpopular", icon: faThumbsDown},
    {text: "Most Popular", value: "popular", icon: faThumbsUp},
    {text: "Most Controversial", value: "controversial", icon: faFireFlameCurved},
    {text: "Most Votes", value: "mostVotes", icon: faCirclePlus},
    {text: "Least Votes", value: "leastVotes", icon: faCircleMinus}
  ] as const;

  return (
    <>
      <div className="border-b border-gray-700 pb-4 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-100 flex-1">{group} Takes</h2>
        <Link href="/submit" className={`text-white font-bold text-base flex items-center py-2 px-4 rounded-lg gap-2 ${btnClr}`}><FontAwesomeIcon icon={faBolt} className="!w-auto !h-5" /><span className="hidden sm:inline">Drop Your Take</span></Link>
      </div>
      <div className="box p-4 flex flex-wrap items-center gap-3">
        <h3 className="flex items-center gap-2"><FontAwesomeIcon icon={faArrowTrendUp} className="!w-auto !h-5 text-yellow-400" />Sort By:</h3>
        {sortButtons.map((s, index) => (
          <button key={index} onClick={() => setSortBy(s.value)} className={`btn ${sortBy === s.value ? `${btnClr} text-white` : "bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white"} flex items-center gap-1`}><FontAwesomeIcon icon={s.icon} className="!w-auto !h-4" />{s.text}</button>
        ))}
      </div>
      {pathname !== "/" && 
        <div className="box p-4">
          <h3>Filter by Topic in {group}s</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {topics.map((t, index) => (
              <button key={index} className="btn bg-gray-700">{t}</button>
            ))}
          </div>
        </div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedThreads.map((item) => (
          <Thread key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}