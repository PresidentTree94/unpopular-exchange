import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Voting({
  gap, popularSetter, unpopularSetter,
}:Readonly<{
  gap: number;
  popularSetter: () => void;
  unpopularSetter: () => void;
}>) {

  return (
    <div className="flex flex-col @3xs:flex-row gap-4">
      <button className={`btn-vote bg-green-600 gap-${gap} hover:cursor-pointer`} onClick={popularSetter}><FontAwesomeIcon icon={faThumbsUp} className={`!w-auto !h-${gap + 3}`} />Popular</button>
      <button className={`btn-vote bg-red-600 gap-${gap} hover:cursor-pointer`} onClick={unpopularSetter}><FontAwesomeIcon icon={faThumbsDown} className={`!w-auto !h-${gap + 3}`} />Unpopular</button>
    </div>
  );
}