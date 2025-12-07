import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

export default function Comment() {
  return (
    <div className="card p-4 rounded-xl">
      <p className="text-gray-100 font-normal">Thread reply for testing purposes. Thread reply for testing purposes. Thread reply for testing purposes. Thread reply for testing purposes.</p>
      <div className="flex items-center justify-between mt-2 text-xs">
        <button className="font-semibold flex items-center gap-2"><FontAwesomeIcon icon={faArrowTurnUp} className="-rotate-90 !w-auto !h-3" />Reply</button>
        <p className="text-gray-400 italic text-right">&mdash; Anon#3125{/*<span className="ml-2 text-green-400 font-bold">(You)</span>*/}</p>
      </div>
    </div>
  );
}