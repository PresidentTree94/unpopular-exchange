import Link from "next/link";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-secondary p-4 rounded-xl flex text-center">
        <div>
          <img src="https://placehold.co/100x100" className="rounded-full w-36 mb-4 m-auto" />
          <h3>AccountName</h3>
        </div>
        <div className="grid grid-cols-[repeat(3,min-content)] w-full justify-evenly place-items-center">
          <div>
            <h2>000</h2>
            <Link href="/profile" className="uppercase text-2xl font-bold underline">Threads Started</Link>
          </div>
          <div>
            <h2>000</h2>
            <Link href="/profile/joined" className="uppercase text-2xl font-bold underline">Threads Joined</Link>
          </div>
          <div>
            <h2>000%</h2>
            <Link href="/profile/score" className="uppercase text-2xl font-bold underline"><span>Unpopular</span> Score</Link>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}