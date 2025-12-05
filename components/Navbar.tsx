"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  let boltClr;
  switch (pathname) {
    case "/activity":
      boltClr = "emerald";
      break;
    case "/opinions":
      boltClr = "indigo";
      break;
    case "/peeves":
      boltClr = "rose";
      break;
    case "/submit":
      boltClr = "orange";
      break;
    default:
      boltClr = "yellow";
      break;
  }

  return (
    <header className={`flex items-center justify-between bg-gray-800 py-4 px-8 border-b border-${boltClr}-500/20`}>
      <h1 className="font-extrabold text-3xl text-white flex items-center gap-2"><FontAwesomeIcon icon={faBolt} className={`!w-auto !h-8 text-${boltClr}-400`} />Unpopular Exchange</h1>
      <nav className="flex gap-2">
        <Link href="/activity" className="bg-gray-700 py-1.5 px-3 rounded-full flex items-center gap-2"><FontAwesomeIcon icon={faWaveSquare} className="!w-auto !h-4" />My Activity</Link>
        <Link href="/" className="bg-gray-700 py-1.5 px-3 rounded-full">All</Link>
        <Link href="/opinions" className="bg-gray-700 py-1.5 px-3 rounded-full">Opinions</Link>
        <Link href="/peeves" className="bg-gray-700 py-1.5 px-3 rounded-full">Pet Peeves</Link>
      </nav>
    </header>
  );
}