"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faThumbsDown, faThumbsUp, faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Popularity from "@/components/Popularity";
import Comment from "@/components/Comment";

export default function Discussion() {

  const pathname = usePathname();
  const hdClr = pathname.startsWith("/opinions") ? "text-indigo-400" : "text-rose-400";
  const brdrClr = pathname.startsWith("/opinions") ? "border-indigo-500/50" : "border-rose-500/50";
  const btnClr = pathname.startsWith("/opinions") ? "bg-indigo-600" : "bg-rose-600";

  return (
    <>
      <div className="box p-8">
        <p className="text-gray-400 flex items-center gap-1"><FontAwesomeIcon icon={faTag} className={`!w-auto !h-4 ${hdClr}`} />Category / <span className="text-gray-300 font-semibold">Topic</span></p>
        <h1 className="text-2xl sm:text-3xl font-light text-gray-100 italic my-6">"Thread thought for testing purposes. Thread thought for testing purposes. Thread thought for testing purposes. Thread thought for testing purposes."</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-700 pt-6">
          <div className="@container">
            <h3 className="font-bold mb-3">Cast Your Vote</h3>
            <div className="flex gap-4 flex-col @3xs:flex-row">
              <button className="btn-vote bg-red-600 gap-2"><FontAwesomeIcon icon={faThumbsDown} className="!w-auto !h-5" />Unpopular</button>
              <button className="btn-vote bg-green-600 gap-2"><FontAwesomeIcon icon={faThumbsUp} className="!w-auto !h-5" />Popular</button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3">Current Status</h3>
            <Popularity />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-400 font-normal">Total Votes: 000</p>
      </div>
      <div className={`box p-8 ${brdrClr} @container`}>
        <h2 className={`text-2xl font-bold ${hdClr} flex items-center gap-2 border-b border-gray-700 pb-2`}><FontAwesomeIcon icon={faMessage} className="!w-auto !h-6" />Debate (0 Replies)</h2>
        <form className="flex flex-col @3xs:flex-row gap-2 mt-4 mb-6">
          <input type="text" placeholder="Got something to say?" className="bg-gray-700 text-gray-100 p-3 flex-1 rounded-lg font-normal" />
          <button className={`${btnClr} text-white rounded-lg flex items-center justify-center h-11 aspect-square`}><FontAwesomeIcon icon={faPaperPlane} className="!w-auto !h-5" /></button>
        </form>
        <div className="space-y-4">
          <Comment />
          <div className="ml-4 pl-4 border-l border-gray-600 space-y-4">
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
}