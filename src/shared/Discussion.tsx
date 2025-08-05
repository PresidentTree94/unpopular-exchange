import Thread from "../components/Thread";
import Comment from "../components/Comment";
import { Type } from "@/enum";
import styles from "./Discussion.module.css";

export default function Discussion() {
  return (
    <section className={styles.section}>
      <Thread type={Type.OPINIONS} description="Description goes here?" />
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
        <Comment />
        <div className={styles.reply}>
          <Comment isReply={true} />
          <Comment isReply={true} />
        </div>
        <Comment />
      </article>
    </section>
  );
}