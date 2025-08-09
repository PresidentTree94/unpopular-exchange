"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faMessage, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import { getCategoriesByThread, getCommentsByThreadId, getNickname, getVotesByThread } from "@/api";
import { CategoryType, CommentType, NicknameType, ThreadType, VoteType } from "@/enum";
import { IconMap } from "@/icons";
import styles from "./Thread.module.css";

export default function Thread({
  data, isPreview = true, openMenuId, setMenuOpenId,
}: Readonly<{
  data: ThreadType;
  isPreview?: boolean;
  openMenuId: number | null;
  setMenuOpenId: (id: number | null) => void;
}>) {

  const [nickname, setNickname] = useState<NicknameType>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [votes, setVotes] = useState<VoteType[]>([]);
  useEffect(() => {
    getNickname(data.userId, data.id).then(setNickname);
    getCommentsByThreadId(data.id).then(setComments);
    getCategoriesByThread(data.categoryIds).then(setCategories);
    getVotesByThread(data.id).then(setVotes);
  }, []);

  const percent = Math.round((votes.filter((vote) => vote.vote === "agree").length / votes.length) * 100);
  let result = <></>;
  if (percent < 50) {
    result = <span style={{backgroundImage: "none", backgroundColor: "var(--unpopularColor)"}}>Unpopular</span>;
  } else if (percent >= 50) {
    result = <span style={{backgroundImage: "none", backgroundColor: "var(--popularColor)"}}>Popular</span>;
  }

  return (
    <div className={styles.div}>
      <i>{nickname?.nickname} thinks...</i>
      {isPreview ? <><h3><a href={"/" + categories.find((item) => Boolean(item))?.type + "/thread/" + data.thought.toLocaleLowerCase().split(" ").join("-")}>{data.thought}</a></h3>{result}</> : <><h2>{data.thought}</h2><p>{data.context}</p><div className={styles.bar}>{votes.length > 0 && <FontAwesomeIcon icon={faCircleDot} style={{left: `clamp(calc(0% + 0.5rem), ${percent}%, calc(100% - 0.5rem))`}} />}</div><p>{votes.length > 0 ? `${percent}% of users agree with this.` : "No one has voted yet."}</p></>}
      <Menu id={data.id} isOpen={openMenuId === data.id} setOpenMenuId={setMenuOpenId} btnTop={1} btnRight={0.75} />
      <div className={styles.stats}>
        <div>
          <p><span>{String(votes.length).padStart(3, "0")}</span> <FontAwesomeIcon icon={faSquarePollVertical} /></p>
          <p><span>{String(comments.length).padStart(3, "0")}</span> <FontAwesomeIcon icon={faMessage} /></p>
        </div>
        <div>
          {categories.map((item) => (
            <a href={"/" + item.type + "/category/" + item.title}>#<FontAwesomeIcon icon={IconMap[item.icon]}/></a>
          ))}
        </div>
      </div>
    </div>
  );
}