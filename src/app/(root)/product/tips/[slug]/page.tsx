import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type TipsPageProps = {
  params: {
    slug: string;
  };
};

export default async function TipsPage({ params }: TipsPageProps) {
  const { slug } = params;
  const { title, description, content } = await getTip(slug);

  return (
     <main>
      <div id="maincard">
      <h1>{title}</h1>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
    </main>
  );
}

// Tipsデータを取得
async function getTip(slug: string) {
  const filePath = path.join(process.cwd(), "content/tips", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    title: data.title,
    description: data.description,
    content: processedContent.toString(),
  };
}

// 静的パスを生成 (Tips用)
export async function generateStaticParams() {
  const tipsDir = path.join(process.cwd(), "content/tips");
  const filenames = fs.readdirSync(tipsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}