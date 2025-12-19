import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Note from "@/components/Note";
import Tabs from "@/components/Tabs";

export default function Notifications() {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100 flex items-center gap-3"><FontAwesomeIcon icon={faBell} className="!w-auto !h-8 text-orange-400" />Notifications</h2>
      <article className="box p-8 flex flex-col gap-8 @container">
        <Tabs color="border-orange-400" tabs={["All", "Replies", "Votes"]}>
          <Note />
          <Note />
          <Note />
        </Tabs>
        <div className="text-center">
          <button className="text-gray-400 font-semibold">Mark all as read</button>
        </div>
      </article>
    </>
  );
}
