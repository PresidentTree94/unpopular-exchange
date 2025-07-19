import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1><span>Unpopular</span> Exchange</h1>
        <p>Where your most controversial thought might just be... mainstream.</p>
      </div>
      <div>
        <h2>Real thoughts. Real discourse. No pitchforks.</h2>
        <div>
          <div>
            <p>Step 1: Pick a Topic</p>
            <p>Choose from categories like Ethics, Pop Culture, or Politics.</p>
          </div>
          <div>
            <p>Step 2: Share Your Take</p>
            <p>Drop a thought—anonymous, civil, and unapologetic.</p>
          </div>
          <div>
            <p>Step 3: Debate with Respect</p>
            <p>Challenge, question, reflect. No name-calling, no pile-ons. Ever.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
