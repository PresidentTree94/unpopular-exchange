"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBell, faUser, faGlobe, faCommentDots, faBug, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useNavbar } from "@/contexts/NavbarContext";

export default function Navbar() {

  const pathname = usePathname();
  const { boltColor, borderColor } = useNavbar();

  let brdrClr, boltClr, lnkClr: string;
  switch (true) {
    case pathname === "/activity":
      boltClr = "text-emerald-400";
      brdrClr = "border-emerald-500/20";
      lnkClr = "bg-emerald-600";
      break;
    case pathname === "/notifications":
      boltClr = "text-orange-400";
      brdrClr = "border-orange-500/20";
      lnkClr = "bg-orange-600";
      break;
    case pathname.startsWith("/opinions"):
      boltClr = "text-indigo-400";
      brdrClr = "border-indigo-500/20";
      lnkClr = "bg-indigo-600";
      break;
    case pathname.startsWith("/peeves"):
      boltClr = "text-rose-400";
      brdrClr = "border-rose-500/20";
      lnkClr = "bg-rose-600";
      break;
    case pathname === "/submit":
      boltClr = boltColor;
      brdrClr = borderColor;
      break;
    default:
      boltClr = "text-yellow-400";
      brdrClr = "border-yellow-500/20";
      lnkClr = "bg-yellow-600";
      break;
  }

  const iconDictionary: Record<string, IconDefinition> = {
    "faBell": faBell,
    "faUser": faUser,
    "faGlobe": faGlobe,
    "faCommentDots": faCommentDots,
    "faBug": faBug
  }

  const links = [
    {link: "/notifications", text: "Notifications", icon: iconDictionary["faBell"]},
    {link: "/activity", text: "Activity", icon: iconDictionary["faUser"]},
    {link: "/", text: "All", icon: iconDictionary["faGlobe"]},
    {link: "/opinions", text: "Opinions", icon: iconDictionary["faCommentDots"]},
    {link: "/peeves", text: "Pet Peeves", icon: iconDictionary["faBug"]}
  ]

  return (
    <header className={`bg-gray-800 grid grid-cols-6 md:grid-cols-[1fr_repeat(5,auto)] md:items-center md:gap-2 md:px-8 h-14 md:h-17 border-b ${brdrClr} fixed w-full top-0`}>
      <h1 className="font-extrabold text-3xl text-white flex items-center gap-2 w-full flex justify-center md:justify-start"><FontAwesomeIcon icon={faBolt} className={`!w-auto !h-5 md:!h-8 ${boltClr}`} /><span className="hidden lg:inline">Unpopular Exchange</span></h1>
      {links.map((l, index) => (
        l.link === "/opinions" || l.link === "/peeves" ?
        <Link key={index} href={l.link} className={`${pathname.startsWith(l.link) ? `${lnkClr} text-white` : "md:bg-gray-700 hover:bg-gray-600 hover:text-white"} md:py-1.5 md:px-3 md:rounded-full flex items-center justify-center gap-2`}><FontAwesomeIcon icon={l.icon} className="!w-auto !h-5 md:!h-4" /><span className="hidden md:inline">{l.text}</span></Link> :
        <Link key={index} href={l.link} className={`${pathname === l.link ? `${lnkClr} text-white` : "md:bg-gray-700 hover:bg-gray-600 hover:text-white"} md:py-1.5 md:px-3 md:rounded-full flex items-center justify-center gap-2`}><FontAwesomeIcon icon={l.icon} className="!w-auto !h-5 md:!h-4" /><span className="hidden md:inline">{l.text}</span></Link>
      ))}
    </header>
  );
}