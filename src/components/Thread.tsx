import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Thread() {
  return (
    <div className="bg-secondary p-4 rounded-xl relative">
      <i className="text-sm">[Username or nickname] thinks...</i>
      <h3 className="my-1">Possible lengthy title about the thought</h3>
      <span className="absolute bottom-full right-5 translate-y-1/2">Determinant</span>
      <div className="flex justify-between gap-2">
        <div className="flex gap-2">
          <p className="bg-tertiary rounded-lg py-1 px-2 leading-[normal] flex items-center text-sm font-semibold">000<FontAwesomeIcon icon={faSquarePollVertical} className="!h-[0.8rem]" /></p>
          <p className="bg-tertiary rounded-lg py-1 px-2 leading-[normal] flex items-center text-sm font-semibold">000<FontAwesomeIcon icon={faMessage} className="!h-[0.8rem]" /></p>
        </div>
        <div className="flex gap-2">
          <a className="bg-tertiary rounded-lg py-1 px-2 leading-[normal] flex items-center text-sm font-semibold">#Tag</a>
          <a className="bg-tertiary rounded-lg py-1 px-2 leading-[normal] flex items-center text-sm font-semibold">#Tag</a>
        </div>
      </div>
    </div>
  );
}