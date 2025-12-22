import Takes from "@/shared/Takes";
import { supabase } from "@/lib/supabaseClient";

export const revalidate = 0;

export default async function Peeves() {

  const { data } = await supabase.from("takes").select("*").eq("category", "Peeve");

  return (
    <Takes group="Pet Peeve" threads={data ?? []} />
  );
}