import { Type } from "@/enum";

export default function Categories({
  type,
}: Readonly<{
  type: Type;
}>) {
  return (
    <div>CATEGORY: {type}</div>
  );
}