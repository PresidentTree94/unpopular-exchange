"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faEllipsis, faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams, usePathname } from "next/navigation";
import Popularity from "@/components/Popularity";
import Comment from "@/components/Comment";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Take } from "@/types/take";
import { Comment as Com } from "@/types/comment";
import { useVoting } from "@/hooks/useVoting";
import Voting from "@/components/Voting";

export default function Discussion() {

  const pathname = usePathname();
  const hdClr = pathname.startsWith("/opinions") ? "text-indigo-400" : "text-rose-400";
  const brdrClr = pathname.startsWith("/opinions") ? "border-indigo-500/50" : "border-rose-500/50";
  const btnClr = pathname.startsWith("/opinions") ? "bg-indigo-600" : "bg-rose-600";

  const { slug } = useParams();
  const [thread, setThread] = useState<Take | null>(null);
  const [comments, setComments] = useState<Com[]>([]);

  // Pathname needs "use client". Async cannot use "use client".
  useEffect(() => {
    const fetchThread = async () => {
      const { data: takes } = await supabase.from("takes").select("*").eq("id", slug).single();
      setThread(takes);
      const { data: comments } = await supabase.from("comments").select("*").eq("take_id", takes.id);
      setComments(comments ?? []);
    }
    fetchThread();
  }, [slug]);

  const topComments = comments.filter(item => item.parent_id === null);

  const { popularCount, unpopularCount, increasePopular, increaseUnpopular } = useVoting(thread?.popular ?? 0, thread?.unpopular ?? 0, thread?.id ?? 0);

  const readable = new Date(thread?.timestamp ?? "").toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <>
      <div className="box p-8">
        <div className="flex items-center justify-between text-gray-400 gap-4">
          <p className="flex items-center gap-1"><FontAwesomeIcon icon={faTag} className={`!w-auto ${hdClr}`} />{thread?.category} / <span className="text-gray-300 font-semibold">{thread?.topic}</span></p>
          <FontAwesomeIcon icon={faEllipsis} className="!w-auto" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-light text-gray-100 italic my-6">"{thread?.take}"</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-700 pt-6">
          <div className="@container">
            <h3 className="font-bold mb-3">Cast Your Vote</h3>
            <Voting
              gap={2}
              popularSetter={increasePopular}
              unpopularSetter={increaseUnpopular}
            />
          </div>
          <div>
            <h3 className="font-bold mb-3">Current Status</h3>
            <Popularity unpopular={unpopularCount ?? 0} popular={popularCount ?? 0} />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-400 font-normal">Total Votes: {(unpopularCount ?? 0) + (popularCount ?? 0)}</p>
      </div>
      <div className={`box p-8 ${brdrClr} @container`}>
        <h2 className={`text-2xl font-bold ${hdClr} flex items-center gap-2 border-b border-gray-700 pb-2`}><FontAwesomeIcon icon={faMessage} className="!w-auto !h-6" />Debate ({comments.length} Replies)</h2>
        <form className="flex flex-col @3xs:flex-row gap-2 mt-4 mb-6">
          <input type="text" placeholder="Got something to say?" className="bg-gray-700 text-gray-100 p-3 flex-1 rounded-lg font-normal" />
          <button className={`${btnClr} text-white rounded-lg flex items-center justify-center h-11 aspect-square`}><FontAwesomeIcon icon={faPaperPlane} className="!w-auto !h-5" /></button>
        </form>
        <div className="space-y-4">
          {topComments.length === 0 ? <p className="text-center text-gray-400 font-normal">It's quiet... <i>too</i> quiet.</p> :
            topComments.map((item) => {
              const replies = comments.filter(reply => reply.parent_id === item.id);
              return (
                <>
                  <Comment key={item.id} data={item} />
                  {replies.length > 0 &&
                    <div className="ml-4 pl-4 border-l border-gray-600 space-y-4">
                      {replies.map((reply) => (
                        <Comment key={reply.id} data={reply} />
                      ))}
                    </div>
                  }
                </>
              );
            })
          }
        </div>
      </div>
    </>
  );
}