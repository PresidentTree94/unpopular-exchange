"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function useVoting(initialPopular: number, initialUnpopular: number, id: number) {
  const [popularCount, setPopularCount] = useState(initialPopular);
  const [unpopularCount, setUnpopularCount] = useState(initialUnpopular);

  useEffect(() => {
    if (initialPopular != null) setPopularCount(initialPopular);
    if (initialUnpopular != null) setUnpopularCount(initialUnpopular);
  }, [initialPopular, initialUnpopular]);

  const increasePopular = async () => {
    const newCount = popularCount + 1;
    setPopularCount(newCount);
    await supabase.from("takes").update({"popular": newCount}).eq("id", id);
  };

  const increaseUnpopular = async () => {
    const newCount = unpopularCount + 1;
    setUnpopularCount(newCount);
    await supabase.from("takes").update({"unpopular": newCount}).eq("id", id);
  };

  return {
    popularCount,
    unpopularCount,
    increasePopular,
    increaseUnpopular,
  };
}