import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserSecret, faHashtag, faChartSimple, faArrowTrendUp, faUserGroup, faMessage, faStar, faFilter, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Tabs from "@/components/Tabs";
import { supabase } from "@/lib/supabaseClient";
import Preview from "@/components/Preview";

export default async function Activity() {

  const iconDictionary: Record<string, IconDefinition> = {
    "faHashtag": faHashtag,
    "faChartSimple": faChartSimple,
    "faArrowTrendUp": faArrowTrendUp,
    "faUserGroup": faUserGroup,
    "faMessage": faMessage,
    "faStar": faStar
  }

  const stats = [
    {heading: "Takes created", icon: iconDictionary["faHashtag"], number: "000"},
    {heading: "Popularity Score", icon: iconDictionary["faChartSimple"], number: "000"},
    {heading: "Votes received", icon: iconDictionary["faArrowTrendUp"], number: "000"},
    {heading: "Votes cast", icon: iconDictionary["faUserGroup"], number: "000"},
    {heading: "Replies sent", icon: iconDictionary["faMessage"], number: "000"},
    {heading: "Favorite takes", icon: iconDictionary["faStar"], number: "000"}
  ]

  const { data } = await supabase.from("takes").select("*");

  return (
    <>
      <h2 className="text-4xl font-extrabold text-gray-100 flex items-center gap-3"><FontAwesomeIcon icon={faUser} className="!w-auto !h-8 text-emerald-400" />My Activity</h2>
      <article className="box p-8 flex flex-col gap-8 @container">
        <div className="card flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-center">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <p className="font-bold text-gray-400 flex items-center gap-2 sm:text-left"><FontAwesomeIcon icon={faUserSecret} className="!w-auto !h-4" />Your Anonymous ID</p>
            <p>04906581478740965524</p>
          </div>
          <p className="text-xs text-rose-400 font-normal sm:text-right">This ID is for tracking your activity and is not publically searchable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-gray-700 pb-8 @container">
          {stats.map((s, index) => (
            <div key={index} className="card flex flex-col @3xs:flex-row items-center gap-4">
              <div className="flex h-full items-center justify-center aspect-square">
                <FontAwesomeIcon icon={s.icon} className="!w-auto !h-6 text-emerald-400" />
              </div>
              <div>
                <p className="uppercase mb-1 text-gray-400">{s.heading}</p>
                <p className="text-3xl font-extrabold text-gray-100 text-center @3xs:text-left">{s.number}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <h3 className="flex items-center gap-2"><FontAwesomeIcon icon={faFilter} className="!w-auto !h-5 text-emerald-400" />Filter Your Activity</h3>
          <p className="text-gray-400 mt-4">Category:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="btn bg-gray-600">All</button>
            <button className="btn bg-gray-600">Opinions</button>
            <button className="btn bg-gray-600">Pet Peeves</button>
          </div>
          {/*Not visible when all is selected.*/}
          <p className="text-gray-400 mt-4">Topic:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="btn bg-gray-600">Topic</button>
            <button className="btn bg-gray-600">Topic</button>
            <button className="btn bg-gray-600">Topic</button>
          </div>
        </div>
        <Tabs color="border-emerald-400" tabs={["Takes", "Replies", "Votes", "Favorites"]}>
          {data?.map((item) => (
            <Preview key={item.id} data={item} />
          ))}
        </Tabs>
      </article>
    </>
  );
}