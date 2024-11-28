import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "@styles/var.css";
import "@styles/foundation.css";

export const metadata: Metadata = {
  title: "【SwiftUIアプリ開発】いろいろポートフォリオ",
  description: "茅根啓介（活動名：いろいろ）のポートフォリオサイトです。Appleプラットフォームでアプリケーションを展開しております。このサイトでは、App Storeでリリースしたアプリの情報とサポート等を行います。",
  keywords: ["SwiftUI", "茅根啓介"],
  viewport: "width=device-width, initial-scale=1.0",
  creator: "茅根啓介",
  publisher: "茅根啓介",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
