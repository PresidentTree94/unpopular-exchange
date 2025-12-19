import Takes from "@/shared/Takes";
import { supabase } from "@/lib/supabaseClient";

export default async function Home() {

  const { data } = await supabase.from("takes").select("*");

  return (
    <Takes group="Community" data={data ?? []} />
  );
}