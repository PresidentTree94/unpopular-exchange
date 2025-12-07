export default function Popularity() {
  return (
    <>
      <div className="flex justify-between">
        <span className="text-red-400 font-semibold">Unpopular</span>
        <span className="text-green-400 font-semibold">Popular</span>
      </div>
      <div className="bg-gray-700 h-2.5 rounded-full my-1">
        <div className="bg-yellow-500 h-2.5 rounded-full w-1/2"></div>
      </div>
      <p className="text-center text-xs text-gray-400">Popularity Score: <span className="font-bold text-yellow-300">000%</span></p>
    </>
  );
}