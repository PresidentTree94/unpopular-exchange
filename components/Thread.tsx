import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faMessage } from "@fortawesome/free-solid-svg-icons";
import Popularity from "./Popularity";
import { Take } from "@/types/take";
import { Comment as Com } from "@/types/comment";
import Link from "next/link";
import { useVoting } from "@/hooks/useVoting";
import Voting from "./Voting";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Thread({ data }:Readonly<{ data: Take; }>) {

  const { popularCount, unpopularCount, increasePopular, increaseUnpopular } = useVoting(data.popular, data.unpopular, data.id);
  const [messages, setMessages] = useState<Com[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data: comments } = await supabase.from("comments").select("*").eq("take_id", data.id);
      setMessages(comments ?? []);
    }
    fetchComments();
  }, [data.id]);

  return (
    <div className="box p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs">
          <p className="flex items-center gap-1 text-gray-400"><FontAwesomeIcon icon={faTag} className={`!w-auto !h-4 ${data.category === "Opinion" ? "text-indigo-400" : "text-rose-400"}`} />{data.category} / <span className="text-gray-300 font-semibold">{data.topic}</span></p>
          <p className="text-gray-500">{unpopularCount + popularCount} votes</p>
        </div>
        <h3 className="font-light text-gray-100 italic my-4 line-clamp-3">"{data.take}"</h3>
      </div>
      <div className="space-y-6 @container">
        <Popularity unpopular={unpopularCount} popular={popularCount} />
        <div>
          <Voting
            gap={1}
            popularSetter={increasePopular}
            unpopularSetter={increaseUnpopular}
          />
          <Link href={"/" + data.category.toLowerCase() + "s/" + data.id} className={`bg-gray-700 p-2 font-semibold block text-center w-full rounded-lg mt-4 ${data.category === "Opinion" ? "text-indigo-400" : "text-rose-400"}`}><FontAwesomeIcon icon={faMessage} className="mr-1" />View Thread ({messages?.length})</Link>
        </div>
      </div>
    </div>
  );
}