import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faWaveSquare } from "@fortawesome/free-solid-svg-icons";

export default function Activity() {
  return (
    <>
      <Link href="/" className="text-base flex items-center gap-2 text-emerald-500 font-semibold"><FontAwesomeIcon icon={faArrowLeft} className="!w-auto !h-5" />Back to All Takes</Link>
      <h2 className="text-4xl font-extrabold text-gray-100 flex items-center gap-3"><FontAwesomeIcon icon={faWaveSquare} className="!w-auto !h-8 text-emerald-500" />My Anonymous Activity Tracker</h2>
    </>
  );
}