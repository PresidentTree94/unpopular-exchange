"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Discussion() {

  const pathname = usePathname();

  return (
    <>
      <Link href="/" className={`text-base flex items-center gap-2 font-semibold ${pathname.startsWith("/opinions") ? "text-indigo-400" : "text-rose-400"}`}><FontAwesomeIcon icon={faArrowLeft} className="!w-auto !h-5" />Back to All Takes</Link>
      <div className="box p-8"></div>
      <div className="box p-8"></div>
    </>
  );
}