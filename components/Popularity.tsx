export default function Popularity({ unpopular, popular }:Readonly<{ unpopular: number; popular: number;}>) {

  const totalVotes = unpopular + popular;
  const unpopularPercent = Math.round((unpopular / totalVotes) * 100);

  const getColors = (p: number) => {
    if (p <= 40) return ["bg-green-500", "text-green-400"];
    if (p < 60) return ["bg-yellow-400", "text-yellow-300"];
    return ["bg-red-500", "text-red-400"];
  };
  const [barColor, scoreColor] = getColors(unpopularPercent);

  return (
    <div>
      <div className="flex justify-between">
        <span className="text-green-400 font-semibold">Popular</span>
        <span className="text-red-400 font-semibold">Unpopular</span>
      </div>
      <div className="bg-gray-700 h-2.5 rounded-full my-1 flex">
        {totalVotes > 0 && <div className={`${barColor} h-2.5 rounded-full`} style={{width: unpopularPercent + "%"}}></div>}
      </div>
      <p className="text-center text-xs text-gray-400">{totalVotes === 0 ? "No votes yet." : <>Unpopular Score: <span className={`font-bold ${scoreColor}`}>{unpopularPercent}%</span></>}</p>
    </div>
  );
}