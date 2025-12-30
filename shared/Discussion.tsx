"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faEllipsis, faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams, usePathname } from "next/navigation";
import Popularity from "@/components/Popularity";
import Comment from "@/components/Comment";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Take } from "@/types/take";
import { Comment as Com } from "@/types/comment";
import { useVoting } from "@/hooks/useVoting";
import Voting from "@/components/Voting";

export default function Discussion() {

  const pathname = usePathname();
  const isOpinion = pathname.startsWith("/opinions");
  const theme = {
    header: isOpinion ? "text-indigo-400" : "text-rose-400",
    border: isOpinion ? "border-indigo-500/50" : "border-rose-500/50",
    button: isOpinion ? "bg-indigo-600" : "bg-rose-600"
  }

  const { slug } = useParams();
  const [thread, setThread] = useState<Take | null>(null);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<Com[]>([]);

  const loadComments = useCallback(async (takeId: number) => {
    const { data } = await supabase.from("comments").select("*").eq("take_id", takeId);
    setComments((data ?? []).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()));
  }, []);

  useEffect(() => {
    const fetchTakes = async () => {
      const { data } = await supabase.from("takes").select("*").eq("id", slug).single();
      setThread(data);
      await loadComments(data.id);
    };
    fetchTakes();
  }, [slug, loadComments]);

  const groupedComments = comments.reduce((acc, c) => {
    const key = c.parent_id ?? "root";
    (acc[key] ||= []).push(c);
    return acc
  }, {} as Record<string, Com[]>);

  const topComments = groupedComments["root"] ?? [];

  const { popularCount, unpopularCount, increasePopular, increaseUnpopular } = useVoting(thread?.popular ?? 0, thread?.unpopular ?? 0, thread?.id ?? 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from("comments").insert([
      { take_id: thread?.id, content: content }
    ]);
    setContent("");
  }

  return (
    <>
      <div className="box p-8">
        <div className="flex items-center justify-between text-gray-400 gap-4">
          <p className="flex items-center gap-1"><FontAwesomeIcon icon={faTag} className={`!w-auto ${theme.header}`} />{thread?.category} / <span className="text-gray-300 font-semibold">{thread?.topic}</span></p>
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
      <div className={`box p-8 ${theme.border} @container`}>
        <h2 className={`text-2xl font-bold ${theme.header} flex items-center gap-2 border-b border-gray-700 pb-2`}><FontAwesomeIcon icon={faMessage} className="!w-auto !h-6" />Debate ({comments.length} Replies)</h2>
        <form className="flex flex-col @3xs:flex-row gap-2 mt-4 mb-6" onSubmit={handleSubmit}>
          <input type="text" placeholder="Got something to say?" value={content} onChange={(e) => setContent(e.target.value)} className="bg-gray-700 text-gray-100 p-3 flex-1 rounded-lg font-normal" />
          <button disabled={content.trim() === ""} className={`${theme.button} text-white rounded-lg flex items-center justify-center h-11 aspect-square disabled:opacity-75`}><FontAwesomeIcon icon={faPaperPlane} className="!w-auto !h-5" /></button>
        </form>
        <div className="space-y-4">
          {topComments.length === 0 ? <p className="text-center text-gray-400 font-normal">It's quiet... <i>too</i> quiet.</p> :
            topComments.map((item) => {
              const replies = groupedComments[item.id] ?? [];
              return (
                <>
                  <Comment key={item.id} data={item} onNewComment={() => loadComments(thread?.id ?? 0)} />
                  {replies.length > 0 &&
                    <details>
                      <summary className="cursor-pointer w-fit">View {replies.length} Replies</summary>
                      <div className="ml-4 pl-4 mt-4 border-l border-gray-600 space-y-4">
                        {replies.map((reply) => (
                          <Comment key={reply.id} data={reply} onNewComment={() => loadComments(thread?.id ?? 0)} />
                        ))}
                      </div>
                    </details>
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