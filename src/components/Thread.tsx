import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Thread() {
  return (
    <div className="box relative">
      <i>[Username or nickname] thinks...</i>
      <h3 className="my-1">Possible lengthy title about the thought</h3>
      <span className="absolute bottom-full right-5 translate-y-1/2">Determinant</span>
      <div className="flex justify-between gap-2">
        <div className="flex gap-2">
          <p className="tag flex items-center gap-[0.1875rem]">000<FontAwesomeIcon icon={faSquarePollVertical} className="!h-4"/></p>
          <p className="tag flex items-center gap-[0.1875rem]">000<FontAwesomeIcon icon={faMessage} className="!h-[0.875rem]" /></p>
        </div>
        <div className="flex gap-2">
          <p className="tag">#Tag</p>
          <p className="tag">#Tag</p>
        </div>
      </div>
    </div>
  );
}