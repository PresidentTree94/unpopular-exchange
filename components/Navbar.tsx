"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBell, faUser, faGlobe, faCommentDots, faBug } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useNavbar } from "@/contexts/NavbarContext";

const routeStyles: Record<string, {bolt: string, border: string, link: string}> = {
  "/activity": { bolt: "text-emerald-400", border: "border-emerald-500/20", link: "bg-emerald-600" },
  "/notifications": { bolt: "text-orange-400", border: "border-orange-500/20", link: "bg-orange-600" },
  "/opinions": { bolt: "text-indigo-400", border: "border-indigo-500/20", link: "bg-indigo-600" },
  "/peeves": { bolt: "text-rose-400", border: "border-rose-500/20", link: "bg-rose-600" },
  "/default": { bolt: "text-yellow-400", border: "border-yellow-500/20", link: "bg-yellow-600" }
}

export default function Navbar() {

  const pathname = usePathname();
  const { boltColor, borderColor } = useNavbar();

  const active = pathname === "/submit" ? {bolt: boltColor, border: borderColor, link: ""} : routeStyles[pathname] ||
  (pathname.startsWith("/opinions") ? routeStyles["/opinions"] : pathname.startsWith("/peeves") ? routeStyles["/peeves"] : routeStyles["/default"]);

  //Guests will have a sign-in or login link instead of an activity page.
  const links = [
    {link: "/notifications", text: "Notifications", icon: faBell},
    {link: "/activity", text: "Activity", icon: faUser},
    {link: "/", text: "All", icon: faGlobe},
    {link: "/opinions", text: "Opinions", icon: faCommentDots},
    {link: "/peeves", text: "Pet Peeves", icon: faBug}
  ]

  return (
    <header className={`bg-gray-800 grid grid-cols-6 md:grid-cols-[1fr_repeat(5,auto)] md:items-center md:gap-2 md:px-8 h-14 md:h-17 border-b ${active.border} fixed w-full top-0 z-1`}>
      <h1 className="font-extrabold text-3xl text-white flex items-center gap-2 w-full flex justify-center md:justify-start"><FontAwesomeIcon icon={faBolt} className={`!w-auto !h-5 md:!h-8 ${active.bolt}`} /><span className="hidden lg:inline">Unpopular Exchange</span></h1>
      {links.map((l, index) => {
        const isActive = l.link === "/opinions" || l.link === "/peeves" ? pathname.startsWith(l.link) : pathname === l.link;
        return (
          <Link key={index} href={l.link} className={`${isActive ? `${active.link} text-white` : "md:bg-gray-700 hover:bg-gray-600 hover:text-white"} md:py-1.5 md:px-3 md:rounded-full flex items-center justify-center gap-2`}><FontAwesomeIcon icon={l.icon} className="!w-auto !h-5 md:!h-4" /><span className="hidden md:inline">{l.text}</span></Link>
        );
      })}
    </header>
  );
}