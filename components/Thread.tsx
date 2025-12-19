import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faThumbsDown, faThumbsUp, faMessage } from "@fortawesome/free-solid-svg-icons";
import Popularity from "./Popularity";
import { Take } from "@/types/take";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export const revalidate = 0;

export default function Thread({
  data,
}: Readonly<{
  data: Take;
}>) {

  const [unpopularCount, setUnpopularCount] = useState(data.unpopular);
  const [popularCount, setPopularCount] = useState(data.popular);

  const increaseUnpopular = async () => {
    const newCount = unpopularCount + 1;
    setUnpopularCount(newCount);
    await supabase.from("takes").update({"unpopular": newCount}).eq("id", data.id);
  }

  const increasePopular = async () => {
    const newCount = popularCount + 1;
    setPopularCount(newCount);
    await supabase.from("takes").update({"popular": newCount}).eq("id", data.id);
  }

  return (
    <div className="box p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs">
          <p className="flex items-center gap-1 text-gray-400"><FontAwesomeIcon icon={faTag} className={`!w-auto !h-4 ${data.category === "Opinion" ? "text-indigo-400" : "text-rose-400"}`} />{data.category} / <span className="text-gray-300 font-semibold">{data.topic}</span></p>
          <p className="text-gray-500">{unpopularCount + popularCount} votes</p>
        </div>
        <h3 className="font-light text-gray-100 italic my-4 line-clamp-3">"{data.take}"</h3>
        <Popularity unpopular={unpopularCount} popular={popularCount} />
      </div>
      <div className="mt-6 @container">
        <div className="flex flex-col @3xs:flex-row gap-4 text-white font-bold mb-4">
          <button className="btn-vote bg-green-600 gap-1 hover:cursor-pointer" onClick={increasePopular}><FontAwesomeIcon icon={faThumbsUp} className="!w-auto !h-4" />Popular</button>
          <button className="btn-vote bg-red-600 gap-1 hover:cursor-pointer" onClick={increaseUnpopular}><FontAwesomeIcon icon={faThumbsDown} className="!w-auto !h-4" />Unpopular</button>
        </div>
        <Link href={"/" + data.category.toLowerCase() + "s/" + data.id} className={`bg-gray-700 p-2 font-semibold block text-center w-full rounded-lg ${data.category === "Opinion" ? "text-indigo-400" : "text-rose-400"}`}><FontAwesomeIcon icon={faMessage} className="mr-1" />View Thread (0)</Link>
      </div>
    </div>
  );
}