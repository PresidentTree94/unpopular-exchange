import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function Note() {
  return (
    <div className="card flex items-start gap-4">
      {/*Will probably have different colors and icons depending on the notification.*/}
      <div className="bg-orange-600 rounded-full w-10 h-10 mt-1 flex items-center justify-center">
        <FontAwesomeIcon icon={faBell} className="!w-auto !h-5 text-white" />
      </div>
      <div className="flex-1">
        <p className="text-gray-100 font-semibold mb-1">Title of the notification</p>
        <p className="font-normal mb-2">A bit of context about the notification</p>
        <p className="text-gray-400 text-xs">Timestamp</p>
      </div>
      {/*<div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>*/}
    </div>
  );
}