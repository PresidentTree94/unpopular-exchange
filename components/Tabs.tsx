export default function Tabs({ color, tabs, children }: Readonly<{ color: string; tabs: string[]; children: React.ReactNode;}>) {
  return (
    <>
      <div className={`border-b border-gray-700 grid ${tabs.length === 3 ? "grid-cols-1 @md:grid-cols-3" : "grid-cols-1 @xs:grid-cols-2 @2xl:grid-cols-4"}`}>
        {tabs.map((label, index) => (
          <button key={index} className={`text-lg font-bold px-4 py-3 border-b-4 ${index === 0 ? `text-gray-100 ${color}` : "text-gray-400 border-transparent"}`}>{label} (000)</button>
        ))}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </>
  );
}