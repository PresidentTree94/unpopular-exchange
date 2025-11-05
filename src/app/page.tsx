import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center p-16">
      <div>
        <h1><span className="px-2 font-bold">Unpopular</span> Exchange</h1>
        <i>Where your most controversial thought might just be... mainstream.</i>
      </div>
      <div>
        <h2>Real thoughts. Real discourse. No pitchforks.</h2>
        <div>
          <div>
            <p>Step 0: Choose a Type</p>
            <p>Opinions and pet peeves are shared here.</p>
          </div>
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
          <div>
            <p>Step 4: Monitor Votes</p>
            <p>Track user votes to see whether throughts are truly <span>unpopular</span>.</p>
          </div>
        </div>
      </div>
      <p className="mt-4 font-bold text-xl">UNFINISHED: <Link href="/profile" className="underline">START HERE</Link>.</p>
    </main>
  );
}
