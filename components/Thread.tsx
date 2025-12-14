import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faThumbsDown, faThumbsUp, faMessage } from "@fortawesome/free-solid-svg-icons";
import Popularity from "./Popularity";

export default function Thread() {
  return (
    <div className="box p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs">
          <p className="flex items-center gap-1 text-gray-400"><FontAwesomeIcon icon={faTag} className="!w-auto !h-4 text-indigo-400" />Category / <span className="text-gray-300 font-semibold">Topic</span></p>
          <p className="text-gray-500">0 votes</p>
        </div>
        <h3 className="font-light text-gray-100 italic my-4 line-clamp-3">"Thread thought for testing purposes. Thread thought for testing purposes. Thread thought for testing purposes. Thread thought for testing purposes."</h3>
        <Popularity />
      </div>
      <div className="mt-6 @container">
        <div className="flex flex-col @3xs:flex-row gap-4 text-white font-bold mb-4">
          <button className="btn-vote bg-red-600 gap-1"><FontAwesomeIcon icon={faThumbsDown} className="!w-auto !h-4" />Unpopular</button>
          <button className="btn-vote bg-green-600 gap-1"><FontAwesomeIcon icon={faThumbsUp} className="!w-auto !h-4" />Popular</button>
        </div>
        <button className="bg-gray-700 p-2 font-semibold w-full rounded-lg text-indigo-400"><FontAwesomeIcon icon={faMessage} />View Thread (0)</button>
      </div>
    </div>
  );
}