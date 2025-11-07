import Link from "next/link";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="box flex flex-col plg:flex-row gap-8 plg:gap-0 text-center">
        <div>
          <img src="https://placehold.co/100x100" className="rounded-full w-36 mb-4 m-auto" />
          <h3>AccountName</h3>
        </div>
        <div className="grid grid-cols-[min-content] psm:grid-cols-[repeat(2,min-content)] pmd:grid-cols-[repeat(3,min-content)] w-full place-items-center justify-evenly gap-8 px-4 pmd:p-0 pmd:gap-0">
          <div className="w-min">
            <h2>000</h2>
            <Link href="/profile" className="uppercase text-2xl font-bold underline">Threads Started</Link>
          </div>
          <div className="w-min pmd:order-3 plg:order-3">
            <h2>000</h2>
            <Link href="/profile/joined" className="uppercase text-2xl font-bold underline">Threads Joined</Link>
          </div>
          <div className="w-min col-span-full pmd:col-auto pmd:order-2 plg:order-3">
            <h2>000%</h2>
            <Link href="/profile/score" className="uppercase text-2xl font-bold underline"><span>Unpopular</span> Score</Link>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}