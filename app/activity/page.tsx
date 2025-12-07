import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare, faUser, faHashtag, faChartSimple, faArrowTrendUp, faUserGroup, faMessage, faStar, faFilter } from "@fortawesome/free-solid-svg-icons";
import Preview from "@/components/Preview";

export default function Activity() {
  return (
    <>
      <h2 className="text-4xl font-extrabold text-gray-100 flex items-center gap-3"><FontAwesomeIcon icon={faWaveSquare} className="!w-auto !h-8 text-emerald-400" />My Activity Tracker</h2>
      <article className="box p-8 flex flex-col gap-8">
        <div className="card flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-bold text-gray-400 flex items-center gap-2"><FontAwesomeIcon icon={faUser} className="!w-auto !h-4" />Your Anonymous ID</p>
            <p>04906581478740965524</p>
          </div>
          <p className="text-right text-xs text-rose-400 font-normal">This ID is for tracking your activity and is not publically searchable.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-gray-700 pb-8">
          <div className="card flex items-center gap-4">
            <div className="flex h-full items-center justify-center aspect-square">
              <FontAwesomeIcon icon={faHashtag} className="!w-auto !h-6 text-emerald-400" />
            </div>
            <div>
              <p className="uppercase mb-1 text-gray-400">Takes created</p>
              <p className="text-3xl font-extrabold text-gray-100">000</p>
            </div>
          </div>
          <div className="card flex items-center gap-4">
            <div className="flex h-full items-center justify-center aspect-square">
              <FontAwesomeIcon icon={faChartSimple} className="!w-auto !h-6 text-emerald-400" />
            </div>
            <div>
              <p className="uppercase mb-1 text-gray-400">Popularity score</p>
              <p className="text-3xl font-extrabold text-gray-100">000%</p>
            </div>
          </div>
          <div className="card flex items-center gap-4">
            <div className="flex h-full items-center justify-center aspect-square">
              <FontAwesomeIcon icon={faArrowTrendUp} className="!w-auto !h-6 text-emerald-400" />
            </div>
            <div>
              <p className="uppercase mb-1 text-gray-400">Votes received</p>
              <p className="text-3xl font-extrabold text-gray-100">000</p>
            </div>
          </div>
          <div className="card flex items-center gap-4">
            <div className="flex h-full items-center justify-center aspect-square">
              <FontAwesomeIcon icon={faUserGroup} className="!w-auto !h-6 text-emerald-400" />
            </div>
            <div>
              <p className="uppercase mb-1 text-gray-400">Votes cast</p>
              <p className="text-3xl font-extrabold text-gray-100">000</p>
            </div>
          </div>
          <div className="card flex items-center gap-4">
            <div className="flex h-full items-center justify-center aspect-square">
              <FontAwesomeIcon icon={faMessage} className="!w-auto !h-6 text-emerald-400" />
            </div>
            <div>
              <p className="uppercase mb-1 text-gray-400">Replies sent</p>
              <p className="text-3xl font-extrabold text-gray-100">000</p>
            </div>
          </div>
          <div className="card flex items-center gap-4">
            <div className="flex h-full items-center justify-center aspect-square">
              <FontAwesomeIcon icon={faStar} className="!w-auto !h-6 text-emerald-400" />
            </div>
            <div>
              <p className="uppercase mb-1 text-gray-400">Favorite Takes</p>
              <p className="text-3xl font-extrabold text-gray-100">000</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="flex items-center gap-2"><FontAwesomeIcon icon={faFilter} className="!w-auto !h-5 text-emerald-400" />Filter Your Activity</h3>
          <p className="text-gray-400 mt-4">Category:</p>
          <div className="flex gap-2 mt-2">
            <button className="btn bg-gray-600">All</button>
            <button className="btn bg-gray-600">Opinions</button>
            <button className="btn bg-gray-600">Pet Peeves</button>
          </div>
          {/*Not visible when all is selected.*/}
          <p className="text-gray-400 mt-4">Topic:</p>
          <div className="flex gap-2 mt-2">
            <button className="btn bg-gray-600">Topic</button>
            <button className="btn bg-gray-600">Topic</button>
            <button className="btn bg-gray-600">Topic</button>
          </div>
        </div>
        <div className="border-b border-gray-700">
          <button className="text-lg font-bold px-4 py-3 text-gray-400 border-b-4 border-transparent">My Takes (0)</button>
          <button className="text-lg font-bold px-4 py-3 text-gray-400 border-b-4 border-transparent">Replied To (0)</button>
          <button className="text-lg font-bold px-4 py-3 text-gray-400 border-b-4 border-transparent">Voted On (0)</button>
          <button className="text-lg font-bold px-4 py-3 text-gray-400 border-b-4 border-transparent">Favorites (0)</button>
        </div>
        <div className="space-y-4">
          <Preview />
          <Preview />
          <Preview />
        </div>
      </article>
    </>
  );
}