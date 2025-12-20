import { Take } from "@/types/take";

export default function Preview({ data }:Readonly<{ data: Take; }>) {

  const totalVotes = data.unpopular + data.popular;
  const percent = Math.round((data.popular / totalVotes) * 100);
  
  let color;
  if (percent <= 40) {
    color = "text-red-400";
  } else if (percent > 40 && percent < 60) {
    color = "text-yellow-400";
  } else if (percent >= 60) {
    color = "text-green-400";
  } else {
    color = "text-gray-400";
  }

  return (
    <div className="card p-4 flex items-center justify-between gap-4">
      <div className="flex-1">
        <p className="font-semibold text-gray-100 line-clamp-3">"{data.take}"</p>
        <p className="text-xs font-normal text-gray-400 mt-1">{data.category} / {data.topic}</p>
      </div>
      <div className="text-right">
        <p className={`text-xl font-bold ${color}`}>{totalVotes === 0 ? "---" : percent}%</p>
        <p className="text-xs text-gray-400">{totalVotes} votes</p>
      </div>
    </div>
  );
}