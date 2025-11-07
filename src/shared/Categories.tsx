import { Type } from "@/enum";
import Link from "next/link";

export default function Categories({
  type,
}: Readonly<{
  type: Type;
}>) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,14rem)] gap-8 justify-center">
      <Link href={"/" + type + "/category/slug"} className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </Link>
      <Link href={"/" + type + "/category/slug"} className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </Link>
      <Link href={"/" + type + "/category/slug"} className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </Link>
      <Link href={"/" + type + "/category/slug"} className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </Link>
      <Link href={"/" + type + "/category/slug"} className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </Link>
      <Link href={"/" + type + "/category/slug"} className={`box aspect-square flex flex-col justify-center items-center ${type == Type.OPINIONS ? "hover:bg-unpopular" : "hover:bg-popular"}`}>
        <h3>#Title</h3>
        <p>000 Discussions</p>
      </Link>
    </section>
  );
}