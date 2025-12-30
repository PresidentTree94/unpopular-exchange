"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { useNavbar } from "@/contexts/NavbarContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const CATEGORY_STYLES = {
  Opinion: {
    bolt: "text-indigo-400",
    border: "border-indigo-500/20",
    formBorder: "border-indigo-500/50",
    heading: "text-indigo-400",
    button: "bg-indigo-600",
    helper: "A belief, stance, or judgment on anything.",
    examples: [
      "Pineapple belongs on pizza",
      "Remote work is overrated",
      "The book was better than the movie"
    ]
  },
  Peeve: {
    bolt: "text-rose-400",
    border: "border-rose-500/20",
    formBorder: "border-rose-500/50",
    heading: "text-rose-400",
    button: "bg-rose-600",
    helper: "Something that specifically irritates or annoys you.",
    examples: [
      "People who chew with their mouth open",
      "When someone says 'irregardless'",
      "Leaving one second on the microwave timer"
    ]
  }
}

export default function Submit() {
  const { setBoltColor, setBorderColor } = useNavbar();
  const [category, setCategory] = useState<keyof typeof CATEGORY_STYLES>("Opinion");
  const [take, setTake] = useState("");
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState<{topic: string}[]>([]);
  const [newTopic, setNewTopic] = useState("");
  const ui = CATEGORY_STYLES[category];

  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as keyof typeof CATEGORY_STYLES;
    setCategory(value);
    setBoltColor(CATEGORY_STYLES[value].bolt);
    setBorderColor(CATEGORY_STYLES[value].border);
  }

  useEffect(() => {
    supabase.from("takes").select("topic").eq("category", category).then(({ data }) => {
      const sorted = (data ?? []).sort((a, b) => a.topic.localeCompare(b.topic));
      setTopics(sorted);
    });
  }, [category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from("takes").insert({ take: take, category: category, topic: topic === "add-new" ? newTopic : topic });
    setTake("");
    setCategory("Opinion");
    setTopic("");
    setNewTopic("");
  }

  useEffect(() => {
    const style = CATEGORY_STYLES[category];
    setBoltColor(style.bolt);
    setBorderColor(style.border);
  }, []);

  return (
    <div className={`bg-gray-800 p-8 rounded-xl border ${ui.formBorder} space-y-4`}>
      <h2 className={`${ui.heading} text-2xl font-bold flex items-center gap-2`}><FontAwesomeIcon icon={faBolt} className="!w-auto !h-6" />Drop Your Unpopular Take</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4" onSubmit={handleSubmit}>
        <div className="row-span-2 flex flex-col">
          <label>Your Controversial Thought (Anonymous)</label>
          <textarea className="form flex-1 resize-none mt-1" rows={3} value={take} onChange={(e) => setTake(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Category</label>
          <select className="form w-full appearance-none mt-1" onChange={handleDropdown} value={category}>
            <option value="Opinion">Opinion</option>
            <option value="Peeve">Pet Peeve</option>
          </select>
          <p className="text-xs text-gray-400 mt-2 font-normal">{ui.helper}</p>
        </div>
        <div className="card bg-gray-700/50 border-gray-600 text-xs">
          <p className="font-bold text-gray-300 mb-2">Examples:</p>
          <ul className="text-gray-400 space-y-1 font-normal list-disc pl-4">
            {ui.examples.map((ex, index) => (
              <li key={index}>"{ex}"</li>
            ))}
          </ul>
        </div>
        <div>
          <label>Topic</label>
          <select className="form w-full appearance-none mt-1" value={topic}
          onChange={(e) => {setTopic(e.target.value); setNewTopic("")}}>
            <option value="" disabled hidden>Select a topic</option>
            {topics.map((t, index) => (
              <option key={index} value={t.topic}>{t.topic}</option>
            ))}
            <option value="add-new">Add a new topic</option>
          </select>
        </div>
        <input type="text" placeholder="Enter a new topic" disabled={topic !== "add-new"} value={newTopic} onChange={(e) => setNewTopic(e.target.value)} className="form self-end disabled:opacity-50" />
        <button disabled={topic === "" || (topic === "add-new" && newTopic.trim() === "")} className={`${ui.button} px-6 py-3 text-white font-bold rounded-lg col-span-full mt-1 text-base disabled:opacity-75`}>Submit Take</button>
      </form>
    </div>
  );
}