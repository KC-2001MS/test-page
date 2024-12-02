import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { Metadata } from "next";

type TipsPageProps = {
  params: Promise<{ slug: string; }>;
};


export async function generateMetadata({ params }: TipsPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content/en/tips", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data } = matter(fileContents);

  const defaultAppName = "Iroiro's portfolio";
  const defaultTitle = "Iroiro's Tips";
  const defaultDescription = "This is a page where you can learn about Iroiro's tips about his products.";

  return {
    title: data.title || defaultTitle,
    description: data.description || defaultDescription,
    abstract: data.description || defaultDescription,
    applicationName: defaultAppName,
    authors: [
      {
        name: "Keisuke Chinone",
        url: "https://iroiro.dev",
      },
    ],
    creator: "Keisuke Chinone",
    publisher: "Keisuke Chinone",
    generator: "Next.js",
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
  const filePath = path.join(process.cwd(), "content/en/tips", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(html)
    .process(content);

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