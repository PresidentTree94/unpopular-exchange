export default function SidebarLayout({
  articleContent, asideContent,
}: Readonly<{
  articleContent: React.ReactNode;
  asideContent: React.ReactNode;
}>) {
  return (
    <section className="flex gap-8">
      <article className="flex flex-col flex-1 gap-8">{articleContent}</article>
      <aside className="w-60 flex flex-col gap-8 text-center">{asideContent}</aside>
    </section>
  );
}