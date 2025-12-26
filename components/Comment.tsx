import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faReply, faFlag, faBan, faShare, faPencil, faTrashCan, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Comment as Com } from "@/types/comment";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Comment({ data, onNewComment }:Readonly<{ data: Com; onNewComment: () => void; }>) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {setIsOpen(!isOpen);};
  const [content, setContent] = useState("");

  const readable = new Date(data.timestamp).toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from("comments").insert([
      { take_id: data.take_id, parent_id: data.parent_id === null ? data.id : data.parent_id, reply_id: data.parent_id === null ? null : data.id, content: content }
    ]);
    setContent("");
    setIsOpen(false);
    onNewComment();
  }

  return (
    <div className="card p-4 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex items-center flex-wrap">
          <p className="text-gray-400 italic">#3125<span className="ml-1 text-green-400 font-bold">(You)</span></p>
          {data.reply_id != null &&
            <>
              <FontAwesomeIcon icon={faArrowRightLong} className="mx-2" />
              <p className="text-gray-400 italic">DR</p>
            </>
          }
        </div>
        <p className="text-xs text-gray-400">{readable}</p>
      </div>
      <p className="text-gray-100 font-normal mt-1 mb-2">{data.content}</p>
      <div className="flex justify-between">
        <FontAwesomeIcon icon={faReply} className="!w-auto !h-3.5" onClick={toggleMenu} />
        {/*Owners will have edit and delete instead of report and block:
        <FontAwesomeIcon icon={faPencil} className="!w-auto !h-3.5" />
        <FontAwesomeIcon icon={faTrashCan} className="!w-auto !h-3.5" />
        */}
        <FontAwesomeIcon icon={faFlag} className="!w-auto !h-3.5" />
        <FontAwesomeIcon icon={faBan} className="!w-auto !h-3.5" />
        <FontAwesomeIcon icon={faShare} className="!w-auto !h-3.5" />
      </div>
      {isOpen &&
        <form className="flex gap-2 mt-3" onSubmit={handleSubmit}>
         <input type="text" placeholder="Got something to say?" className="bg-gray-600 text-gray-100 p-3 flex-1 rounded-lg font-normal" value={content} onChange={(e) => setContent(e.target.value)} />
         <button disabled={content.trim() === ""} className={`bg-gray-900 text-white rounded-lg flex items-center justify-center h-11 aspect-square disabled:opacity-75`}><FontAwesomeIcon icon={faPaperPlane} className="!w-auto !h-5" /></button>
        </form>
      }
    </div>
  );
}