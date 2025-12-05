import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faThumbsDown, faThumbsUp, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Thread() {
  return (
    <div className="box p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs">
          <p className="flex items-center gap-1 text-gray-400"><FontAwesomeIcon icon={faTag} className="!w-auto !h-4 text-indigo-400" />Category / <span className="text-gray-300 font-semibold">Topic</span></p>
          <p className="text-gray-500">0 votes</p>
        </div>
        <h3 className="font-light text-gray-100 italic my-4 line-clamp-3">"Thread thought for testing purposes. Thread thought for testing purposes. Thread thought for testing purposes. Thread thought for testing purposes."</h3>
        <div>
          <div className="flex justify-between">
            <span className="text-red-400 font-semibold">Unpopular</span>
            <span className="text-green-400 font-semibold">Popular</span>
          </div>
          <div className="bg-gray-700 h-2.5 rounded-full my-1">
            <div className="bg-yellow-500 h-2.5 rounded-full w-1/2"></div>
          </div>
          <p className="text-center text-xs text-gray-400">Popularity Score: <span className="font-bold text-yellow-300">000%</span></p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex gap-4 text-white font-bold mb-4">
          <button className="bg-red-600 flex items-center justify-center w-full gap-1 py-2 px-4 rounded-lg"><FontAwesomeIcon icon={faThumbsDown} className="!w-auto !h-4" />Unpopular</button>
          <button className="bg-green-600 flex items-center justify-center w-full gap-1 py-2 px-4 rounded-lg"><FontAwesomeIcon icon={faThumbsUp} className="!w-auto !h-4" />Popular</button>
        </div>
        <button className="bg-gray-700 p-2 font-semibold w-full rounded-lg text-indigo-400"><FontAwesomeIcon icon={faMessage} />View Thread (0)</button>
      </div>
    </div>
  );
}