import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Iroiro's portfolio【SwiftUI】",
  description:
    "Keisuke Chinone's (activity name: Iroiro) portfolio site, I'm developing applications on Apple platforms. This site provides information and support for applications released on the App Store.",
  abstract:
    "Keisuke Chinone's (activity name: Iroiro) portfolio site, I'm developing applications on Apple platforms. This site provides information and support for applications released on the App Store.",
  applicationName: "Iroiro's portfolio",
  authors: [
    {
      name: "Keisuke Chinone",
      url: "https://iroiro.dev",
    },
  ],
  creator: "Keisuke Chinone",
  publisher: "Keisuke Chinone",
  generator: "Next.js",
  keywords: ["SwiftUI", "Keisuke", "Chinone"],
  // 
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://iroiro.dev/en/",
    languages: {
      ja: "https://iroiro.dev/",
      en: "https://iroiro.dev/en/",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
  ],
  openGraph: {
    type: "article",
    url: "https://iroiro.dev",
    title: "Iroiro's portfolio",
    description:
      "Keisuke Chinone's (activity name: Iroiro) portfolio site, I'm developing applications on Apple platforms. This site provides information and support for applications released on the App Store.",
    siteName: "Iroiro's portfolio",
    images: [
      {
        url: 'https://iroiro.dev/images/出雲大社1080.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IroIro1234work',
    creator: '@IroIro1234work',
    images: 'https://iroiro.dev/images/出雲大社1080.jpg',
  },
  appleWebApp: {
    capable: true,
    title: "Iroiro's portfolio",
    statusBarStyle: 'black-translucent'
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <head prefix="og: https://ogp.me/ns#">
        <meta name="date" content="2024-12-01" />
        <meta name="google" content="nositelinkssearchbox" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="author" content="Keisuke Chinone" />
        <meta name="copyright" content="© 2024 Keisuke Chinone" />
        <meta httpEquiv='x-dns-prefetch-control' content='on' />
        <meta httpEquiv="Expires" content="604800" />
        <link rel="me" href="https://mastodon.social/@Iroiro" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
