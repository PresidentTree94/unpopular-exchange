import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faReply, faGavel, faThumbTack } from "@fortawesome/free-solid-svg-icons";

export default function Activity() {
  return (
    <section className="flex gap-8">
      <article className="box flex-1">
        <div className="flex gap-4 p-2 items-center">
        <FontAwesomeIcon icon={faPaperclip} className="bg-tertiary rounded-full p-3 !w-auto aspect-square" />
        <p>A new blog article has been posted.</p>
      </div>
      <div className="flex gap-4 p-2 items-center">
        <FontAwesomeIcon icon={faReply} className="bg-tertiary rounded-full p-3 !w-auto aspect-square" />
        <p>A user has replied to your thread.</p>
      </div>
      <div className="flex gap-4 p-2 items-center">
        <FontAwesomeIcon icon={faReply} className="bg-tertiary rounded-full p-3 !w-auto aspect-square" />
        <p>A user has replied to your message.</p>
      </div>
      <div className="flex gap-4 p-2 items-center">
        <FontAwesomeIcon icon={faGavel} className="bg-tertiary rounded-full p-3 !w-auto aspect-square" />
        <p>A user has voted on your thread.</p>
      </div>
      <div className="flex gap-4 p-2 items-center">
        <FontAwesomeIcon icon={faThumbTack} className="bg-tertiary rounded-full p-3 !w-auto aspect-square" />
        <p>A user posted in your subscribed category.</p>
      </div>
      </article>
      <aside className="w-60 flex flex-col gap-8 text-center">
        <div className="box flex flex-col gap-4">
          <h2 className="leading-[normal]">Your Stats</h2>
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
        <div className="box flex flex-col gap-4">
          <h2 className="leading-[normal]">Platform Statistics</h2>
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
      </aside>
    </section>
  );
}