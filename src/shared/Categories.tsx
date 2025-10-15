import { Type } from "@/enum";

export default function Categories({
  type,
}: Readonly<{
  type: Type;
}>) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,14rem)] gap-8 justify-center">
      <a className={`bg-secondary aspect-square flex flex-col justify-center items-center rounded-xl p-4 ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
      <a className={`bg-secondary aspect-square flex flex-col justify-center items-center rounded-xl p-4 ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
      <a className={`bg-secondary aspect-square flex flex-col justify-center items-center rounded-xl p-4 ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
      <a className={`bg-secondary aspect-square flex flex-col justify-center items-center rounded-xl p-4 ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
    </section>
  );
}