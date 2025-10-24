import SidebarLayout from "@/shared/Sidebar";
import Thread from "@/components/Thread";

export default function Feed() {
  return (
    <SidebarLayout
      articleContent={<>
        <Thread />
        <Thread />
        <Thread />
        <Thread />
      </>}
      asideContent={<>
      <div className="box flex flex-col gap-4">
        <h2 className="leading-[normal]">Random Thread</h2>
        <button>Opinion</button>
        <button>Pet Peeve</button>
      </div>
        <div className="box bordered border">
          <h2 className="leading-[normal] mb-8">Featured Thread</h2>
          <Thread />
        </div>
      </>}
    />
  );
}