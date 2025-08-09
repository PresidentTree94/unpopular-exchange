"use client";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { CommentType, NicknameType } from "@/enum";
import styles from "./Comment.module.css";
import { getNickname } from "@/api";

export default function Comment({
  data, reply, openMenuId, setMenuOpenId,
}: Readonly<{
  data: CommentType;
  reply?: string;
  openMenuId: number | null;
  setMenuOpenId: (id: number | null) => void;
}>) {

  const [nickname, setNickname] = useState<NicknameType>();
  useEffect(() => {
    getNickname(data.userId, data.threadId).then(setNickname);
  }, []);

  return (
    <div className={styles.user} style={{flexDirection: data.parentId > 0 ? "row-reverse" : "row"}}>
      <img src="https://placehold.co/100x100"/>
      <div className={data.parentId === 0 ? styles.left : styles.right}>
        <Menu id={data.id} isOpen={openMenuId === data.id} setOpenMenuId={setMenuOpenId} btnTop={0.5} btnRight={0.5} />
        {data.parentId === 0 ? <i>{nickname?.nickname} says...</i> : <i>{nickname?.nickname} says to {reply}...</i>}
        <p>{data.message}</p>
      </div>
    </div>
  );
}