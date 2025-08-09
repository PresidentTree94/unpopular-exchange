"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faReply, faGavel, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/shared/Sidebar";
import sbstyles from "@/shared/Sidebar.module.css";
import Details from "@/components/Details";
import styles from "./activity.module.css";
import { getEverything } from "@/api";
import { CommentType, ThreadType, VoteType } from "@/enum";

export default function Activity() {
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [votes, setVotes] = useState<VoteType[]>([]);
  useEffect(() => {
    getEverything<ThreadType>("threads").then(setThreads);
    getEverything<CommentType>("comments").then(setComments);
    getEverything<VoteType>("votes").then(setVotes);
  }, []);

  return (
    <Sidebar
      articleContent={<>
        <Details
          maxWidth={24.26}
          breakWidth={0}
          bottomFilters={[["", ["Blog", "Reply", "Subscribe", "Vote"]]]}
        />
        <div className={`${styles.notes} ${sbstyles.btn}`}>
          <div>
            <FontAwesomeIcon icon={faPaperclip} />
            <p>A new blog article has been posted.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faReply} />
            <p>A user has replied to your thread.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faReply} />
            <p>A user has replied to your message.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGavel} />
            <p>A user has voted on your thread.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faThumbTack} />
            <p>A user posted in your subscribed category.</p>
          </div>
        </div>
      </>}
      asideContent={<>
        <div className={sbstyles.stats}>
          <h2>Your Stats</h2>
          <div>
            <h3>000</h3>
            <p>Threads posted</p>
          </div>
          <div>
            <h3>000</h3>
            <p>Comments made</p>
          </div>
          <div>
            <h3>000</h3>
            <p>Votes cast</p>
          </div>
        </div>
        <div className={sbstyles.stats}>
          <h2>Platform Statistics</h2>
          <div>
            <h3>{String(threads.length).padStart(3, "0")}</h3>
            <p>Threads posted</p>
          </div>
          <div>
            <h3>{String(comments.length).padStart(3, "0")}</h3>
            <p>Comments made</p>
          </div>
          <div>
            <h3>{String(votes.length).padStart(3, "0")}</h3>
            <p>Votes cast</p>
          </div>
        </div>
      </>}
    />
  );
}