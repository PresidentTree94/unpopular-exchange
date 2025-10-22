import { Type } from "@/enum";

export default function Categories({
  type,
}: Readonly<{
  type: Type;
}>) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,14rem)] gap-8 justify-center">
      <a className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
      <a className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
      <a className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
      <a className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
      <a className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </a>
    </section>
  );
}