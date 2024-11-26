import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Iroiro's portfolio【SwiftUI】",
  description: "Keisuke Chinone's (activity name: Iroiro) portfolio site, I'm developing applications on Apple platforms. This site provides information and support for applications released on the App Store.",
  keywords: ["SwiftUI", "Keisuke", "Chinone"],
  viewport: "width=device-width, initial-scale=1.0",
  creator: "Keisuke Chinone",
  publisher: "Keisuke Chinone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
