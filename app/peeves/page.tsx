import Takes from "@/shared/Takes";
import { supabase } from "@/lib/supabaseClient";

export default async function Peeves() {

  const { data } = await supabase.from("takes").select("*").eq("category", "Peeve");

  return (
    <Takes group="Pet Peeve" data={data ?? []} />
  );
}