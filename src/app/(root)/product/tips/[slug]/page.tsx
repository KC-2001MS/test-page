import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { Metadata } from "next";

type TipsPageProps = {
  params: Promise<{ slug: string; }>;
};


export async function generateMetadata({ params }: TipsPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content/ja/tips", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data } = matter(fileContents);

  const defaultAppName = "いろいろポートフォリオ";
  const defaultTitle = "いろいろのTips";
  const defaultDescription = "いろいろの製品に関するTipsを知ることができるページです。";

  return {
    title: data.title || defaultTitle,
    description: data.description || defaultDescription,
    abstract: data.description || defaultDescription,
    applicationName: defaultAppName,
    authors: [
      {
        name: '茅根啓介',
        url: 'https://iroiro.dev',
      },
    ],
    creator: "茅根啓介",
    publisher: "茅根啓介",
    generator: 'Next.js',
    keywords: data.keywords || [],
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://iroiro.dev/en/product/tips/${slug}`,
      languages: {
        ja: `https://iroiro.dev/product/tips/${slug}`,
        en: `https://iroiro.dev/en/product/tips/${slug}`,
      },
    },
    icons: [
      { rel: "icon", url: "https://iroiro.dev/favicon.ico" },
      { rel: "apple-touch-icon", url: "https://iroiro.dev/apple-touch-icon.png" },
    ],
    openGraph: {
      type: "article",
      url: `https://iroiro.dev/en/product/tips/${slug}`,
      title: data.title || defaultTitle,
      description: data.description || defaultDescription,
      siteName: defaultAppName,
      images: [
        {
          url: "https://iroiro.dev/images/出雲大社1080.jpg",
        },
      ],
    },
    twitter: {
      card: "summary",
      site: "@IroIro1234work",
      creator: "@IroIro1234work",
      images: "https://iroiro.dev/images/出雲大社1080.jpg",
    },
    appleWebApp: {
      capable: true,
      title: defaultAppName,
      statusBarStyle: "black-translucent",
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

export default async function Tips({ params }: TipsPageProps) {
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
  const filePath = path.join(process.cwd(), "content/ja/tips", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { content } = matter(fileContents);
  const processedContent = await remark()
  .use(remarkGfm)
  .use(remarkBreaks)
  .use(remarkRehype, {
    allowDangerousHtml: true,
  })
  .use(rehypeRaw)
  .use(rehypeStringify)
    .process(content);

  return {
    content: processedContent.toString(),
  };
}

// 静的パスを生成 (Tips用)
export async function generateStaticParams() {
  const tipsDir = path.join(process.cwd(), "content/ja/tips");
  const filenames = fs.readdirSync(tipsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}