import MainWrapper from "@/components/MainWrapper";
import BlogLink from "./BlogLink";

export default function Blog() {
  return (
    <MainWrapper maxWidth={64}>
      <BlogLink />
      <BlogLink />
      <BlogLink />
    </MainWrapper>
  );
}