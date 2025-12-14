export default function Preview() {
  return (
    <div className="card p-4 flex items-center justify-between gap-4">
      <div className="flex-1">
        <p className="font-semibold text-gray-100 line-clamp-3">"Thread thought for testing purposes. Thread thought for testing purposes. Thread thought for testing purposes."</p>
        <p className="text-xs font-normal text-gray-400 mt-1">Category / Topic</p>
      </div>
      <div>
        <p className="text-xl font-bold text-emerald-400">000%</p>
        <p className="text-xs text-gray-400">000 replies</p>
      </div>
    </div>
  );
}