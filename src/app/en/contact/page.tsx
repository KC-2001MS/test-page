import type { Metadata } from "next";
import "@styles/content.css";

export const metadata: Metadata = {
    title: "Contact Iroiro",
  description:
    "Contact information for inquiries about applications, projects and services developed by Keisuke Chinone (activity name: Iroiro).",
  abstract:
    "Contact information for inquiries about applications, projects and services developed by Keisuke Chinone (activity name: Iroiro).",
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
        canonical: "https://iroiro.dev/en/contact",
        languages: {
          ja: "https://iroiro.dev/contact",
          en: "https://iroiro.dev/en/contact",
        },
      },
    icons: [
      { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
      { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
    ],
    openGraph: {
        type: "article",
    url: "https://iroiro.dev/en/contact",
    title: "Contact Iroiro",
    description:
      "Contact information for inquiries about applications, projects and services developed by Keisuke Chinone (activity name: Iroiro).",
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

export default function Contact() {
    return (
        <main>
            <div id="maincard">
                <div className="h2card">
                    <h2 className="n1">Profile</h2>
                    <div className="h3card">
                        <h3>Keisuke Chinone</h3>
                        <p>
                            I work under the account name &quot;Iroiro.&quot; My main focus is on developing applications in SwiftUI
                            and creating apps for my needs. I am also
                            in contact with other developers to improve and port their apps.
                        </p>
                        <div className="h4card">
                            <h4>Career</h4>
                            <table>
                                <tr>
                                    <th>Date</th>
                                    <th>Details</th>
                                </tr>
                                <tr>
                                    <td>2023/7/19</td>
                                    <td>Established this site</td>
                                </tr>
                            </table>
                        </div>
                        <div className="h4card">
                            <h4>Contact</h4>
                            <p>Email Address：<a href="mailto:iroiro.work1234@gmail.com">iroiro.work1234@gmail.com</a></p>
                            <p>Twitter：<a href="https://twitter.com/IroIro1234work">https://twitter.com</a></p>
                            <p>Bluesky：<a href="https://bsky.app/profile/bluesky.iroiro.me">https://bsky.app</a></p>
                            <p>mastodon：<a rel="me" href="https://mastodon.social/@Iroiro">https://mastodon.social</a></p>
                            <p>GitHub：<a href="https://github.com/KC-2001MS">https://github.com</a></p>
                            <p>Hugging Face：<a href="https://huggingface.co/Iroiro">https://huggingface.co</a></p>
                            <p>Stack Overflow：<a
                                href="https://stackoverflow.com/users/21741409/iroiro">https://stackoverflow.com</a></p>
                        </div>
                        <div className="h4card">
                            <h4>Sales</h4>
                            <p>App Store：<a
                                href="https://apps.apple.com/jp/developer/keisuke-chinone/id1586934587">https://apps.apple.com</a>
                            </p>
                        </div>

                        <div className="h4card">
                            <h4>Movie</h4>
                            <p>YouTube：
                                <a href="https://www.youtube.com/@IroiroWork">https://www.youtube.com</a>
                            </p>
                            <div className="h4card">
                                <h4>Contribution</h4>
                                <p>If you would like to make a donation, please click here. The money you donate will be used to improve my programming skills and maintain the application.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
