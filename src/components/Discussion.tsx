import Thread from "./Thread";
import Comment from "./Comment";
import styles from "./Discussion.module.css";

export default function Discussion() {
  return (
    <section className={styles.section}>
      <Thread description="Description goes here?" />
      <article>
        <div>
          <button>Disagree</button>
          <button>Agree</button>
        </div>
        <hr/>
        <form>
          <div>
            <img src="https://placehold.co/100x100"/>
            <input type="text" maxLength={25} placeholder="What do you want to be called in this? (max: 25)" />
          </div>
          <textarea rows={3} maxLength={500} placeholder="What do you have to (respectfully) say to this? (max: 500)"></textarea>
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