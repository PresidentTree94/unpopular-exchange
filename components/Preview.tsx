export default function Preview() {
  return (
    <div className="card p-4 flex items-center justify-between">
      <div>
        <p className="font-semibold text-gray-100">"Thread thought for testing purposes."</p>
        <p className="text-xs font-normal text-gray-400 mt-1">Category / Topic</p>
      </div>
      <div>
        <p className="text-xl font-bold text-emerald-400">000%</p>
        <p className="text-xs text-gray-400">0 replies</p>
      </div>
    </div>
  );
}