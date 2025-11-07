import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Thread() {
  return (
    <div className="box relative text-left @container">
      <i>[Username or nickname] thinks...</i>
      <h3 className="my-2">Possible lengthy title about the thought</h3>
      <span className="absolute bottom-full right-5 translate-y-1/2">Determinant</span>
      <div className="flex gap-2 justify-between @max-3xs:flex-col">
        <div className="flex gap-2">
          <p className="tag flex items-center justify-center gap-[0.1875rem] @max-3xs:w-1/2 @max-3xs:p-1">000<FontAwesomeIcon icon={faSquarePollVertical} className="!h-4"/></p>
          <p className="tag flex items-center justify-center gap-[0.1875rem] @max-3xs:w-1/2 @max-3xs:p-1">000<FontAwesomeIcon icon={faMessage} className="!h-[0.875rem]" /></p>
        </div>
        <div className="flex justify-center gap-2">
          <p className="tag flex justify-center @max-3xs:w-1/2 @max-3xs:p-1">#Tag</p>
          <p className="tag flex justify-center @max-3xs:w-1/2 @max-3xs:p-1">#Tag</p>
        </div>
      </div>
    </div>
  );
}