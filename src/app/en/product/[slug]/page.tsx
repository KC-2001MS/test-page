import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type ProductPageProps = {
  params: Promise<{ slug: string; }>;
};

// ページのコンポーネント
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const { content } = await getProduct(slug);

  return (
    <main>
      <div id="maincard">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
    </main>
  );
}

// 各製品のデータを取得
async function getProduct(slug: string) {
  const filePath = path.join(process.cwd(), "en/content/product", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    content: processedContent.toString(),
  };
}

// 静的パスを生成
export async function generateStaticParams() {
  const productsDir = path.join(process.cwd(), "en/content/product");
  const filenames = fs.readdirSync(productsDir);

  // Markdownファイルから `slug` を生成
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}