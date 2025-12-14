import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faThumbsDown, faThumbsUp, faUserSecret, faChartSimple, faComments, faFireFlameCurved, faCommentDots, faBug, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function About() {

  const iconDictionary: Record<string, IconDefinition> = {
    "faUserSecret": faUserSecret,
    "faThumbsUp": faThumbsUp,
    "faChartSimple": faChartSimple,
    "faComments": faComments,
    "faThumbsDown": faThumbsDown,
    "faFireFlameCurved": faFireFlameCurved
  }

  const workCards = [
    {heading: "Submit Anonymously", icon: iconDictionary["faUserSecret"], text: "Share your controversial opinions or pet peeves without revealing your identity. No judgment, just honest takes."},
    {heading: "Community Votes", icon: iconDictionary["faThumbsUp"], text: <>Users vote whether they think your take is <span className="text-green-400 font-semibold">Popular</span> or <span className="text-red-400 font-semibold">Unpopular</span>.</>},
    {heading: "Get Your Score", icon: iconDictionary["faChartSimple"], text: "Watch as your take gets a popularity score. Will you be vindicated or surprised by the results?"},
    {heading: "Join the Debate", icon: iconDictionary["faComments"], text: "Dive into discussions, defend your position, or challenge others. Every take has a story."}
  ]

  const scores = [
    {score: "Unpopular (0-40%)", icon: iconDictionary["faThumbsDown"], color: "bg-red-600", text: "Congratulations! Your take truly goes against the grain. You're in the minority."},
    {score: "Controversial (41-59%)", icon: iconDictionary["faFireFlameCurved"], color: "bg-yellow-600", text: "The community is split! Your take is dividing opinions right down the middle."},
    {score: "Popular (60-100%)", icon: iconDictionary["faThumbsUp"], color: "bg-green-600", text: "Surprise! What you thought was controversial is actually pretty mainstream."}
  ]

  return (
    <>
      <h2 className="text-4xl font-extrabold text-gray-100 flex items-center gap-3"><FontAwesomeIcon icon={faLightbulb} className="!w-auto !h-8 text-yellow-400" />About Unpopular Exchange</h2>
      <article className="box p-8 space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-yellow-400">What Is This?</h3>
          <p>Ever thought you had a hot take, only to find out everyone secretly agrees with you? Or maybe you believed something was totally normal, but turns out you're the only one?</p>
          <p><span className="font-bold text-gray-100">Unpopular Exchange</span> is where your most controversial thoughts get put to the test. Drop your unpopular opinions and pet peeves anonymously, and let the community decide: Is your take actually unpopular, or is it more mainstream than you think?</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workCards.map((c, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <FontAwesomeIcon icon={c.icon} className="!w-auto !h-6 text-yellow-400" />
                  <h4 className="text-lg font-bold text-gray-100">{index + 1}. {c.heading}</h4>
                </div>
                <p className="font-normal">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Understanding the Scores</h3>
          <div className="card space-y-4">
            {scores.map((s, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`${s.color} rounded-full w-8 h-8 mt-1 flex items-center justify-center`}>
                  <FontAwesomeIcon icon={s.icon} className="!w-auto !h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-100 mb-1">{s.score}</h4>
                  <p className="font-normal">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card border-indigo-500/50">
              <h4 className="text-lg font-bold text-indigo-400 mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faCommentDots} className="!w-auto !h-5" />Opinions</h4>
              <p className="font-normal">Your controversial views on anything and everything—from pop culture to politics, food to philosophy.</p>
            </div>
            <div className="card border-rose-500/50">
              <h4 className="text-lg font-bold text-rose-400 mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faBug} className="!w-auto !h-5" />Pet Peeves</h4>
              <p className="font-normal">Those little things that irrationally annoy you. Find out if others share your frustrations or if you're alone in your rage.</p>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-yellow-400">Why Anonymous?</h3>
          <p>Anonymity lets you be brutally honest without fear of judgment from fellow users. Your identity is protected with a unique anonymous ID that tracks your activity without revealing who you are. Each thread also gives users a unique public ID for the debate so others can follow the conversation but not across takes.</p>
          <p>This isn't about who said it—it's about what was said. The best ideas (and the worst takes) should stand on their own merit.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-yellow-400">Ready to Share Your Take?</h3>
          <p className="mt-4 mb-6">Don't hold back. Drop your most controversial opinion or your pettiest pet peeve. Let's see if you're really as unpopular as you think.</p>
          <Link href="/submit" className="bg-yellow-600 text-white font-bold text-lg flex items-center justify-center py-3 px-6 rounded-lg gap-2 w-full">Drop Your Take</Link>
        </section>
      </article>
    </>
  );
}
