"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getCommentsByThreadId, getEverything, getThreadByThought } from "@/api";
import { ThreadType, CommentType, NicknameType } from "@/enum";
import Thread from "@/components/Thread";
import Comment from "../components/Comment";
import styles from "./Discussion.module.css";

export default function Discussion() {
  const params = useParams();
  const thought = params.thread ? (params.thread as string).split("-").join(" ") : undefined;

  const [nicknames, setNicknames] = useState<NicknameType[]>([]);
  const [thread, setThread] = useState<ThreadType>();
  const [comments, setComments] = useState<CommentType[]>([]);
  useEffect(() => {
    thought && getThreadByThought(thought).then(setThread);
  }, [thought]);
  useEffect(() => {
    thread && getCommentsByThreadId(thread?.id).then(setComments);
  }, [thread]);
  useEffect(() => {
    getEverything<NicknameType>("nicknames").then(setNicknames);
  }, []);
  const topComments = comments.filter((comment) => comment.parentId === 0);

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      {thread && <Thread data={thread} isPreview={false} openMenuId={openMenuId} setMenuOpenId={setOpenMenuId} />}
      <article>
        <div>
          <button>Disagree</button>
          <button>Agree</button>
        </div>
        <hr/>
        <form className={styles.form}>
          <div>
            <div>
              <img src="https://placehold.co/100x100"/>
              <input type="text" maxLength={25} placeholder="What do you want to be called in this? (max: 25)" />
            </div>
            <div>
              <input type="checkbox" />
              <label>Use profile handle</label>
            </div>
          </div>
          <textarea rows={5} maxLength={500} placeholder="What do you have to (respectfully) say to this? (max: 500)"></textarea>
          <input type="submit" />
        </form>
        <hr/>
        {topComments.length > 0 ? topComments.map((comment) => {
          const replies = comments.filter((c) => c.parentId === comment.id);
          return (<>
            <Comment data={comment} openMenuId={openMenuId} setMenuOpenId={setOpenMenuId} />
            {replies.length > 0 &&
              <div className={styles.reply}>
                {replies.map((reply) => <Comment data={reply} reply={nicknames.find((n) => n.userId === comments.find((r) => r.id === reply.replyId)?.userId && n.threadId === thread?.id)?.nickname} openMenuId={openMenuId} setMenuOpenId={setOpenMenuId} />)}
              </div>}
          </>);
        }) : <p style={{textAlign: "center"}}>No one has commented yet.</p>}
      </article>
    </section>
  );
}