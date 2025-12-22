import Takes from "@/shared/Takes";
import { supabase } from "@/lib/supabaseClient";

export const revalidate = 0;

export default async function Opinions() {

  const { data } = await supabase.from("takes").select("*").eq("category", "Opinion");

  return (
    <Takes group="Opinion" threads={data ?? []} />
  );
}