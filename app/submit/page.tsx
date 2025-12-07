"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { useNavbar } from "@/contexts/NavbarContext";
import { useEffect, useState } from "react";

export default function Submit() {

  const { setBoltColor, setBorderColor } = useNavbar();
  const [borderColor, setFormBorderColor] = useState("border-indigo-500/50");
  const [headingColor, setHeadingColor] = useState("text-indigo-400");
  const [buttonColor, setButtonColor] = useState("bg-indigo-600");

  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "o") {
      setBoltColor("text-indigo-400");
      setBorderColor("border-indigo-500/20");
      setFormBorderColor("border-indigo-500/50");
      setHeadingColor("text-indigo-400");
      setButtonColor("bg-indigo-600");
    } else {
      setBoltColor("text-rose-400");
      setBorderColor("border-rose-500/20");
      setFormBorderColor("border-rose-500/50");
      setHeadingColor("text-rose-400");
      setButtonColor("bg-rose-600");
    }
  }

  useEffect(() => {
    setBoltColor("text-indigo-400");
    setBorderColor("border-indigo-500/20");
    setFormBorderColor("border-indigo-500/50");
    setHeadingColor("text-indigo-400");
    setButtonColor("bg-indigo-600");
  }, [setBoltColor, setBorderColor]);

  return (
    <div className={`bg-gray-800 p-8 rounded-xl border ${borderColor} space-y-4 mb-10`}>
      <h2 className={`${headingColor} text-2xl font-bold flex items-center gap-2`}><FontAwesomeIcon icon={faBolt} className="!w-auto !h-6" />Drop Your Unpopular Take</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-full">
          <label>Your Controversial Thought (Anonymous)</label>
          <textarea className="bg-gray-700 text-gray-100 w-full rounded-lg border border-gray-600 resize-none text-base p-3 mt-1" rows={3}></textarea>
        </div>
        <div>
          <label>Category</label>
          <select className="w-full bg-gray-700 text-gray-100 border border-gray-600 text-base rounded-lg p-3 appearance-none mt-1" onChange={handleDropdown}>
            <option value="o">Opinion</option>
            <option value="p">Pet Peeve</option>
          </select>
        </div>
        <div>
          <label>Topic</label>
          <select className="w-full bg-gray-700 text-gray-100 border border-gray-600 text-base rounded-lg p-3 appearance-none mt-1"></select>
        </div>
        <button className={`${buttonColor} w-full px-6 py-3 text-white font-bold rounded-lg col-span-full mt-1 text-base`}>Submit Take</button>
      </form>
    </div>
  );
}