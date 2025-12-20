export default function Popularity({ unpopular, popular }:Readonly<{ unpopular: number; popular: number;}>) {

  const totalVotes = unpopular + popular;
  const unpopularPercent = Math.round((unpopular / totalVotes) * 100);

  let barColor, scoreColor;
  if (unpopularPercent <= 40) {
    barColor = "bg-green-500";
    scoreColor = "text-green-400";
  } else if (unpopularPercent > 40 && unpopularPercent < 60) {
    barColor = "bg-yellow-400";
    scoreColor = "text-yellow-300";
  } else if (unpopularPercent >= 60) {
    barColor = "bg-red-500";
    scoreColor = "text-red-400";
  }

  return (
    <div>
      <div className="flex justify-between">
        <span className="text-green-400 font-semibold">Popular</span>
        <span className="text-red-400 font-semibold">Unpopular</span>
      </div>
      <div className="bg-gray-700 h-2.5 rounded-full my-1 flex">
        {totalVotes > 0 && <>
          <div className={`${barColor} h-2.5 rounded-full`} style={{width: unpopularPercent + "%"}}></div>
        </>}
      </div>
      <p className="text-center text-xs text-gray-400">{totalVotes === 0 ? "No votes yet." : <>Unpopular Score: <span className={`font-bold ${scoreColor}`}>{unpopularPercent}%</span></>}</p>
    </div>
  );
}