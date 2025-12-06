"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  let brdrClr, boltClr;
  switch (true) {
    case pathname === "/activity":
      boltClr = "text-emerald-400";
      brdrClr = "border-emerald-500/20";
      break;
    case pathname.startsWith("/opinions"):
      boltClr = "text-indigo-400";
      brdrClr = "border-indigo-500/20";
      break;
    case pathname.startsWith("/peeves"):
      boltClr = "text-rose-400";
      brdrClr = "border-rose-500/20";
      break;
    case pathname === "/submit":
      boltClr = "text-orange-400";
      brdrClr = "border-orange-500/20";
      break;
    default:
      boltClr = "text-yellow-400";
      brdrClr = "border-yellow-500/20";
      break;
  }

  return (
    <header className={`flex items-center justify-between bg-gray-800 py-4 px-8 border-b ${brdrClr}`}>
      <h1 className="font-extrabold text-3xl text-white flex items-center gap-2"><FontAwesomeIcon icon={faBolt} className={`!w-auto !h-8 ${boltClr}`} />Unpopular Exchange</h1>
      <nav className="flex gap-2">
        <Link href="/activity" className={`${pathname === "/activity" ? "bg-emerald-600 text-white": "bg-gray-700 hover:bg-gray-600 hover:text-white"} py-1.5 px-3 rounded-full flex items-center gap-2`}><FontAwesomeIcon icon={faWaveSquare} className="!w-auto !h-4" />My Activity</Link>
        <Link href="/" className={`${pathname === "/" ? "bg-yellow-600 text-white" : "bg-gray-700 hover:bg-gray-600 hover:text-white"} py-1.5 px-3 rounded-full`}>All</Link>
        <Link href="/opinions" className={`${pathname.startsWith("/opinions") ? "bg-indigo-600 text-white" : "bg-gray-700 hover:bg-gray-600 hover:text-white"} py-1.5 px-3 rounded-full`}>Opinions</Link>
        <Link href="/peeves" className={`${pathname.startsWith("/peeves") ? "bg-rose-600 text-white" : "bg-gray-700 hover:bg-gray-600 hover:text-white"} py-1.5 px-3 rounded-full`}>Pet Peeves</Link>
      </nav>
    </header>
  );
}