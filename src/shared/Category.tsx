import { Type } from "@/enum";
import SidebarLayout from "./Sidebar";
import Thread from "@/components/Thread";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

export default function Category({
  type,
}: Readonly<{
  type: Type;
}>) {
  return (
    <SidebarLayout
      articleContent={<>
        <div className="flex items-center gap-4 m-auto">
          <h1>#Category</h1>
          <FontAwesomeIcon icon={faThumbTack} className={`bordered border p-3 rounded-full !w-auto aspect-square hover:cursor-pointer ${type === Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`} />
        </div>
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
      </>}
      asideContent={<>
        <div className="box flex flex-col gap-4">
          <h2 className="leading-[normal]">Statistics</h2>
          <div>
            <h3>000%</h3>
            <p>Threads are unpopular</p>
          </div>
          <div>
            <h3>000%</h3>
            <p>Average unpopular score</p>
          </div>
          <div>
            <h3>000%</h3>
            <p>Your unpopular score</p>
          </div>
        </div>
        <div className="box bordered border">
          <h2 className="leading-[normal] mb-8">Featured Thread</h2>
          <Thread />
        </div>
      </>}
    />
  );
}