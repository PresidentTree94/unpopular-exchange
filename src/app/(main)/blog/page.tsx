import BlogLink from "./BlogLink";

export default function Blog() {
  return (
    <>
      <BlogLink isPinned={true}/>
      <BlogLink isPinned={true}/>
      <BlogLink isPinned={true}/>
      <BlogLink />
      <BlogLink />
      <BlogLink />
    </>
  );
}