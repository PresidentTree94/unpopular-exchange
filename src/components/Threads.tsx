import { useState } from "react";
import { ThreadType } from "@/enum";
import Thread from "./Thread";

export default function Threads({
  data,
}: Readonly<{
  data: ThreadType[];
}>) {

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "2rem"}}>
      {data.map((item) => (<Thread data={item} openMenuId={openMenuId} setMenuOpenId={setOpenMenuId} />))}
    </div>
  );
}