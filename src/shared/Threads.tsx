import Details from "../components/Details";
import Thread from "../components/Thread";
import { Type } from "@/enum";

/*Thread data category arrays will also be passed.*/
export default function Threads({
  title,
}: Readonly<{
  title: string;
}>) {
  return (
    <>
      <Details
        maxWidth={37.75}
        breakWidth={23.85}
        leftFilter={["Type", ["All", "Opinions", "Peeves"]]}
        rightFilter={["Score", ["All", "Unpopular", "Popular"]]}
        bottomFilters={[["Categories", []]]}
      />
      <h2>{title}</h2>
      <article style={{width: "100%", display: "flex", flexDirection: "column", gap: "2rem"}}>
        <Thread type={Type.OPINIONS} />
        <Thread type={Type.OPINIONS} />
        <Thread type={Type.PEEVES} />
        <Thread type={Type.PEEVES} />
      </article>
    </>
  );
}