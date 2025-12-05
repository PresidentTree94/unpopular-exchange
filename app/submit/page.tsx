import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Submit() {
  return (
    <div className="bg-gray-800 p-8 rounded-xl border border-indigo-500/50 space-y-4 mb-10">
      <h2 className="text-indigo-400 text-2xl font-bold flex items-center gap-2"><FontAwesomeIcon icon={faBolt} className="!w-auto !h-6" />Drop Your Unpopular Take</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-full">
          <label>Your Controversial Thought (Anonymous)</label>
          <textarea className="bg-gray-700 text-gray-100 w-full rounded-lg border border-gray-600 resize-none text-base p-3 mt-1" rows={3}></textarea>
        </div>
        <div>
          <label>Category</label>
          <select className="w-full bg-gray-700 text-gray-100 border border-gray-600 text-base rounded-lg p-3 appearance-none mt-1">
            <option>Opinion</option>
            <option>Pet Peeve</option>
          </select>
        </div>
        <div>
          <label>Topic</label>
          <select className="w-full bg-gray-700 text-gray-100 border border-gray-600 text-base rounded-lg p-3 appearance-none mt-1"></select>
        </div>
        <button className="w-full px-6 py-3 text-white font-bold rounded-lg bg-indigo-600 col-span-full">Submit Take</button>
      </form>
    </div>
  );
}