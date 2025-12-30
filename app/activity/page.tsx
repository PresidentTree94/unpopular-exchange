"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserSecret, faHashtag, faChartSimple, faArrowTrendUp, faUserGroup, faMessage, faStar, faFilter } from "@fortawesome/free-solid-svg-icons";
import Tabs from "@/components/Tabs";
import { supabase } from "@/lib/supabaseClient";
import Preview from "@/components/Preview";
import { useEffect, useState } from "react";
import { Take } from "@/types/take";
import { Comment } from "@/types/comment";

export default function Activity() {
  const [category, setCategory] = useState<"All" | "Opinion" | "Peeve">("All");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [takes, setTakes] = useState<Take[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: takes } = await supabase.from("takes").select("*").order("timestamp", { ascending: false });
      const { data: comments } = await supabase.from("comments").select("*");
      setTakes(takes ?? []);
      setComments(comments ?? []);
    };
    fetchData();
  }, []);

  const topics = category === "All" ? [] : [...new Set(takes.filter(t => t.category == category).map(t => t.topic))].sort();
  const filtered = takes.filter(t => (category === "All" || t.category === category) && (!selectedTopic || t.topic === selectedTopic));

  const score = Math.round(((takes?.filter(item => item.unpopular > item.popular).length ?? 0) / (takes?.length ?? 0)) * 100);
  const received = takes?.reduce((sum, item) => sum + item.popular, 0);
  const cast = takes?.reduce((sum, item) => sum + item.unpopular, 0);

  const stats = [
    {heading: "Takes created", icon: faHashtag, number: takes?.length},
    {heading: "Pop Score", icon: faChartSimple, number: score + "%"},
    {heading: "Votes received", icon: faArrowTrendUp, number: received},
    {heading: "Votes cast", icon: faUserGroup, number: cast},
    {heading: "Replies sent", icon: faMessage, number: comments?.length},
    {heading: "Favorite takes", icon: faStar, number: 0}
  ]

  return (
    <>
      <h2 className="text-4xl font-extrabold text-gray-100 flex items-center gap-3"><FontAwesomeIcon icon={faUser} className="!w-auto !h-8 text-emerald-400" />My Activity</h2>
      <article className="box p-8 flex flex-col gap-8 @container">
        <div className="card flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-center">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <p className="font-bold text-gray-400 flex items-center gap-2 sm:text-left"><FontAwesomeIcon icon={faUserSecret} className="!w-auto !h-4" />Your Anonymous ID</p>
            <p>04906581478740965524</p>
          </div>
          <p className="text-xs text-rose-400 font-normal sm:text-right">This ID is for tracking your activity and is not publically searchable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-gray-700 pb-8 @container">
          {stats.map((s, index) => (
            <div key={index} className="card flex flex-col @3xs:flex-row items-center gap-4">
              <div className="flex h-full items-center justify-center aspect-square">
                <FontAwesomeIcon icon={s.icon} className="!w-auto !h-6 text-emerald-400" />
              </div>
              <div>
                <p className="uppercase mb-1 text-gray-400">{s.heading}</p>
                <p className="text-3xl font-extrabold text-gray-100 text-center @3xs:text-left">{s.number}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <h3 className="flex items-center gap-2"><FontAwesomeIcon icon={faFilter} className="!w-auto !h-5 text-emerald-400" />Filter Your Activity</h3>
          <p className="text-gray-400 mt-4">Category:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["All", "Opinion", "Peeve"].map((c, index) => (
              <button key={index} onClick={() => {setCategory(c as any); setSelectedTopic(null);}} className={`btn ${category === c ? "bg-emerald-600 text-white" : "bg-gray-600"}`}>{c === "Peeve" ? "Pet Peeve" : c}</button>
            ))}
          </div>
          {category !== "All" &&
            <>
              <p className="text-gray-400 mt-4">Topic:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <button onClick={() => setSelectedTopic(null)} className={`btn ${selectedTopic === null ? "bg-emerald-600 text-white" : "bg-gray-600"}`}>All</button>
                {topics.map((t, index) => (
                  <button key={index} onClick={() => setSelectedTopic(t)} className={`btn ${selectedTopic === t ? "bg-emerald-600 text-white" : "bg-gray-600"}`}>{t}</button>
                ))}
              </div>
            </>
          }
        </div>
        <Tabs color="border-emerald-400" tabs={["Takes", "Replies", "Votes", "Favorites"]}>
          {filtered?.map((item) => (
            <Preview key={item.id} data={item} />
          ))}
        </Tabs>
      </article>
    </>
  );
}