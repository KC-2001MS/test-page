import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type TipsPageProps = {
  params: Promise<{ slug: string; }>;
};

export default async function TipsPage({ params }: TipsPageProps) {
  const { slug } = await params
  const { content } = await getTip(slug);

  return (
     <main>
      <div id="maincard">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
    </main>
  );
}

// Tipsデータを取得
async function getTip(slug: string) {
  const filePath = path.join(process.cwd(), "content/en/tips", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    content: processedContent.toString(),
  };
}

// 静的パスを生成 (Tips用)
export async function generateStaticParams() {
  const tipsDir = path.join(process.cwd(), "content/en/tips");
  const filenames = fs.readdirSync(tipsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}