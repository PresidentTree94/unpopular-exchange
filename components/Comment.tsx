import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { Comment as Com } from "@/types/comment";

export default function Comment({ data }:Readonly<{ data: Com; }>) {
  return (
    <div className="card p-4 rounded-xl">
      <p className="text-gray-100 font-normal">{data.content}</p>
      <div className="flex items-center justify-between mt-2 text-xs">
        <button className="font-semibold flex items-center gap-2"><FontAwesomeIcon icon={faArrowTurnUp} className="-rotate-90 !w-auto !h-3" />Reply</button>
        <p className="text-gray-400 italic text-right">&mdash; Anon#3125{/*<span className="ml-2 text-green-400 font-bold">(You)</span>*/}</p>
      </div>
    </div>
  );
}