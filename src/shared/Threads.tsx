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
        maxWidth={43.07}
        breakWidth={37}
        leftLeg="Type"
        left={["All", "Opinions", "Peeves"]}
        rightLeg="Score"
        right={["All", "Unpopular", "Mixed", "Popular"]}
        bottomLeg="Categories"
        bottom={[]}
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