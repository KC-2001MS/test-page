import Image from "next/image";
import YouTubeEmbed from '@/components/YouTubeEmbed';
import AppStoreLink from '@/components/AppStoreLink';
import "@styles/content.css";
import "@styles/product.css";

const PATH = process.env.GITHUB_PAGES === 'true' ? '/test-page' : '';

export default function Product() {
  return (
    <main>
        <div id="maincard">
            <div className="h2card">
                <h2 className="n1">アプリケーション</h2>
                <div className="h3card">
                    <h3>開発</h3>
                    <div className="h4card clear">
                        <div className="appInfoTop">
                            <h4 className="left appTitle">日本企業情報</h4>
                            <a href="https://apps.apple.com/app/日本法人情報/id6477782786">
                                <Image src={`${PATH}//images/Japan Corp Info.avif`} className="appIcon left" height={100} width={100} alt="日本企業情報アイコン"/>       
                            </a>
                        </div>
                        <div className="clear">
                        <p><strong>日本企業情報</strong>は、日本の法人情報を簡単に管理する最適な方法です。</p>
                        <p>対応プラットフォームは次の通りです。</p>
                        </div>
                        <h4>対応プラットフォーム</h4>
                        <table>
                        <thead>
                            <tr>
                                <th className="os">OS</th>
                                <th className="vr">バージョン</th>
                            </tr>
                            <tr>
                                <td className="osItem">iOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="osItem">iPadOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">visionOS</td>
                                <td className="vrItem">1 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">macOS</td>
                                <td className="vrItem">14(Sonoma) ~</td>
                            </tr>
                            </tbody>
                        </table>
                        <h4><a href="./product/japancorpinfo.html">サポートページ</a></h4>
                        <h4><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h4>
                        <div className="appInfoButtom">
                                <p className="right">価格：<span id="MahjongTileConverterPriceResult" className="plice"></span>（税込）</p>
                            <AppStoreLink appId="id6477782786"/>
                        </div>
                    </div>
                    <div className="h4card clear">
                        <div className="appInfoTop">
                            <h4 className="left appTitle">麻雀牌コンバータ</h4>
                            <a href="https://apps.apple.com/app/mahjong-tile-converter/id6470128646">
                                <Image src="/images/Mahjong Tile Converter.avif" className="appIcon left" height={100} width={100} alt="麻雀牌コンバータアイコン"/>       
                            </a>
                        </div>
                        <div className="clear">
                        <p><strong>麻雀牌コンバータ</strong>は、MPSZ形式で表現された牌姿をUnicodeを用いたグラフィカルな表記に変換します。</p>
                        <p>対応プラットフォームは次の通りです。</p>
                        </div>
                        <h4>対応プラットフォーム</h4>
                        <table>
                        <thead>
                            <tr>
                                <th className="os">OS</th>
                                <th className="vr">バージョン</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="osItem">macOS</td>
                                <td className="vrItem">14(Sonoma) ~</td>
                            </tr>
                            </tbody>
                        </table>
                        <h4><a href="./product/mahjongtileconverter.html">サポートページ</a></h4>
                        <h4><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h4>
                        <div className="appInfoButtom">
                            <p className="right">価格：<span id="MahjongTileConverterPriceResult" className="plice"></span>（税込）</p>
                            <AppStoreLink appId="id6470128646"/>
                        </div>
                    </div>
                    <div className="h4card clear">
                        <div className="appInfoTop">
                            <h4 className="left appTitle">My Word X</h4>
                            <a href="https://apps.apple.com/us/app/my-word-x/id6450119338">
                                <Image src="/images/My Word X.avif" className="appIcon left" height={100} width={100} alt="My Word Xアイコン"/>
                            </a>
                        </div>
                        <div className="clear">
                            <p><strong>My Word X</strong>は、オリジナルな単語帳を作成するアプリケーションです。様々な情報を登録できるため、より詳しくその単語を覚えることができます。</p>
                            <p>対応プラットフォームは次の通りです。</p>
                        </div>
                        <h4>対応プラットフォーム</h4>
                        <table>
                        <thead>
                            <tr>
                                <th className="os">OS</th>
                                <th className="vr">バージョン</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="osItem">iOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">iPadOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">visionOS</td>
                                <td className="vrItem">1 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">macOS</td>
                                <td className="vrItem">14(Sonoma) ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">watchOS</td>
                                <td className="vrItem">10 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">tvOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            </tbody>
                        </table>
                        <h4><a href="./product/mywordx.html">サポートページ</a></h4>
                        <h4><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h4>
                        <div className="appInfoButtom">
                                <p className="right">価格：<span id="MyWordXPriceResult" className="plice"></span>（税込）</p>
                            <AppStoreLink appId="id6450119338"/>
                        </div>
                    </div>
                    <div className="h4card clear">
                        <div className="appInfoTop">
                            <h4 className="left appTitle">Word Filter X</h4>
                            <a href="https://apps.apple.com/jp/app/word-filter-x/id1668831130">
                                <Image src="/images/Word Filter X.avif" className="appIcon left" height={100} width={100} alt="Word Filter Xアイコン"/>
                            </a>
                        </div>
                        <div className="clear">
                            <p><strong>Word Filter
                            X</strong>はSafariのWebサイト上の苦手な言葉を隠すアプリケーションです。Safari上の苦手な言葉を隠すことで、自身の心を穏やかにすることができます。</p>
                            <p>このアプリはブラウザ拡張機能とiOSアプリの「<a
                                href="https://bondavi.jp">ひよこフィルター</a>」をベースに設定の同期機能や置き換える単語を変更する機能など機能を追加した派生版です。</p>
                            <p>対応プラットフォームは次の通りです。</p>
                        </div>
                        <h4>対応プラットフォーム</h4>
                        <table>
                        <thead>
                            <tr>
                                <th className="os">OS</th>
                                <th className="vr">バージョン</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="osItem">iOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">iPadOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">visionOS</td>
                                <td className="vrItem">1 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">macOS</td>
                                <td className="vrItem">14(Sonoma) ~</td>
                            </tr>
                            </tbody>
                        </table>
                        <h4><a href="./product/wordfilterx.html">サポートページ</a></h4>
                        <h4><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h4>
                        <div className="appInfoButtom">
                                <p className="right">価格：<span id="WordFilterXPriceResult" className="plice"></span>（税込）</p>
                            <AppStoreLink appId="id1668831130"/>
                        </div>
                    </div>
                    <div className="h4card clear">
                        <div className="appInfoTop">
                            <h4 className="left appTitle">Uncheck X</h4>
                            <a href="https://apps.apple.com/us/app/uncheck-x/id6446932202">
                                <Image src="/images/Uncheck X.avif" className="appIcon left" height={100} width={100} alt="Uncheck Xアイコン"/>
                            </a>

                        </div>
                        <div className="clear">
                            <p>物を買うときやあるサービスのアカウントを作るとき、自分が同意していない項目に勝手にチェックがつけられていたことはありませんか。</p>
                            <p>Uncheck Xをインストールすれば、いつの間にかメールマガジンが送られることはありません。</p>
                            <p>対応プラットフォームは次の通りです。</p>
                        </div>
                        <h4>対応プラットフォーム</h4>
                        <table>
                        <thead>
                            <tr>
                                <th className="os">OS</th>
                                <th className="vr">バージョン</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="osItem">iOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">iPadOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">visionOS</td>
                                <td className="vrItem">1 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">macOS</td>
                                <td className="vrItem">14(Sonoma) ~</td>
                            </tr>
                            </tbody>
                        </table>
                        <h4>CM</h4>
                        <div>
                            <h5>DMM¹・FANZA²のチェックボックスを外そう iPadOS編</h5>
                            <YouTubeEmbed videoId="qX81u1Jn8Lc" />
                            <h5>楽天³のチェックボックスを外そう macOS編</h5>
                            <YouTubeEmbed videoId="OnYyRR85Op0" />
                        </div>
                        <h4><a href="./product/uncheckx.html">サポートページ</a></h4>
                        <h4><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h4>
                        <div className="appInfoButtom">
                                <p className="right">価格：<span id="UncheckXPriceResult" className="plice"></span></p>
                            <AppStoreLink appId="id6446932202"/>
                        </div>
                    </div>
                    <div className="h4card clear">
                        <div className="appInfoTop">
                            <h4 className="left appTitle">Simple Editor X</h4>
                            <a href="https://apps.apple.com/us/app/simple-editor-x/id1612026794">
                                <Image src="/images/Simple Editor X.avif" className="appIcon left" height={100} width={100} alt="Simple Editor Xアイコン"/>
                            </a>
                        </div>
                        <div className="clear">
                        <p><strong>Simple Editor X</strong>は、テキストファイルとして保存することができるシンプルなメモ帳・テキストエディタです。
                            最低限の機能を持つテキストエディターですが、音声の読み上げ機能や定型文の挿入機能があります。</p>
                        <p>対応プラットフォームは次の通りです。</p>
                        </div>
                        <h4>対応プラットフォーム</h4>
                        <table>
                        <thead>
                            <tr>
                                <th className="os">OS</th>
                                <th className="vr">バージョン</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="osItem">iOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">iPadOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">macOS</td>
                                <td className="vrItem">14(Sonoma) ~</td>
                            </tr>
                            </tbody>
                        </table>
                        <h4><a href="./product/simpleeditorx.html">サポートページ</a></h4>
                        <h4><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h4>
                        <div className="appInfoButtom">
                                <p className="right">価格：<span id="SimpleEditorXPriceResult" className="plice"></span>（税込）</p>
                            <AppStoreLink appId="id1612026794"/>
                        </div>

                    </div>
                </div>

                <div className="h3card clear">
                    <h3>移植</h3>
                    <div className="h4card">
                        <div className="appInfoTop">
                            <h4 className="left appTitle">Death To _blank</h4>
                            <a href="https://apps.apple.com/us/app/death-to-blank/id1672080999">
                                <Image src="/images/Death To _blank.avif" className="appIcon left" height={100} width={100} alt="Death To _blankアイコン"/>
                            </a>
                        </div>
                        <div className="clear">
                            <p>リンクをクリックしたらタブが増えた経験はありませんか。リンクを新規タブで開く原因である_blank属性をWebサイトから取り除くことで、この現象を無くしてタブをスッキリさせます。</p>
                            <p>この拡張機能は、&quot;Death To _blank&quot;拡張機能をSafari拡張機能として移植したバージョンとなります。この拡張機能のコードは、開発者との合意に基づいて利用されています。</p>
                            <p>※ 新規タブを開く効果がある_blank以外の属性でも動作します。</p>
                            <p>対応プラットフォームは次の通りです。</p>
                        </div>
                        <h4>対応プラットフォーム</h4>
                        <table>
                        <thead>
                            <tr>
                                <th className="os">OS</th>
                                <th className="vr">バージョン</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="osItem">iOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">iPadOS</td>
                                <td className="vrItem">17 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">visionOS</td>
                                <td className="vrItem">1 ~</td>
                            </tr>
                            <tr>
                                <td className="osItem">macOS</td>
                                <td className="vrItem">14(Sonoma) ~</td>
                            </tr>
                            </tbody>
                        </table>
                        <h4>メディア</h4>
                        <p><a
                                href="https://books.google.co.jp/books?id=7E_HEAAAQBAJ&pg=PA131&lpg=PA131&dq=Keisuke+Chinone&source=bl&ots=-VqKdV3EKn&sig=ACfU3U3dAboshCgCcqkN2BbWpcwA6YvOYg&hl=ja&sa=X&ved=2ahUKEwiT646nmreAAxXgglYBHb2MANQQ6AF6BAgREAI#v=onepage&q=Keisuke%20Chinone&f=false">Mac
                                Fan</a></p>
                        <h4><a href="./product/deathto_blank.html">サポートページ</a></h4>
                        <h4><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h4>
                        <h4>Chrome版について</h4>
                        <p>
                            Safari拡張機能の元となっているChrome拡張機能があります。もし、Chromeで使用したい場合は
                            <a href="https://chrome.google.com/webstore/detail/death-to-blank/gneobebnilffgkejpfhlgkmpkipgbcno?gl=JP&hl=ja">こちら</a>
                            をご利用ください。
                        </p>
                        <p>※Chrome版のサポートは<a href="mailto:jbarker@jbarker.net">Chrome版の製作者のメールアドレス</a>にお願いします。こちらではサポートを受け付けておりませんのでご注意ください。</p>
                        <div className="appInfoButtom">
                                <p className="right">価格：<span id="DeathTo_blankPriceResult" className="plice"></span></p>
                            <AppStoreLink appId="id1672080999"/>
                        </div>
                    </div>
                </div>

                <div className="h3card clear">
                    <h3>翻訳</h3>
                    <div className="h4card">
                        <h4>Declutter for Safari</h4>
                        <div className="clear">
                            <p><strong>Declutter for Safari</strong>は軽量の拡張機能で重複したタブを自動的に閉じることができます。</p>
                            <p>質問とフィードバックがございましたら、 英語で連絡をお願いします。</p>
                        </div>
                        <h4>対応プラットフォーム</h4>
                        <table>
                        <thead>
                            <tr>
                                <th className="os">OS</th>
                                <th className="vr">バージョン</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="osItem">macOS</td>
                                <td className="vrItem">11.1(Big Sur) ~</td>
                            </tr>
                            </tbody>
                        </table>
                        <h4>メディア</h4>
                        <p><a href="https://book.mynavi.jp/macfan/detail_summary/id=124346">Mac Fan</a></p>
                        <h4><a href="https://github.com/brandonlee503/DeclutterInfo">サポートページ</a></h4>
                        <h4><a href="mailto:declutterappextension@gmail.com">フィードバック</a></h4>
                        <div className="appInfoButtom">
                               <p className="right">価格：<span id="DeclutterForSafariPriceResult" className="plice"></span></p>
                            <AppStoreLink appId="id1574021257"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h2card clear">
                <h2 className="n2">テンプレートファイル</h2>
                <div className="h3card">
                    <h3>Word-Filter-X-Templates</h3>
                    <div>
                        Word Filter Xの設定データのテンプレートサイト。
                        概要は<a
                            href="https://iroiro.dev/Word-Filter-X-Templates/">Word-Filter-X-Templatesリポジトリ</a>からご確認ください。
                    <h4><a
                            href="https://github.com/KC-2001MS/Word-Filter-X-Templates/archive/refs/heads/master.zip">ダウンロード</a>
                    </h4>
                    </div>
                </div>
            </div>
            <div className="h2card clear">
                <h2 className="n6">Blueskyフィード</h2>
                <div className="h3card">
                    <h3>Swift</h3>
                    <p>
                        Swift言語に関連する情報を提供するフィードです。
                        概要は<a
                            href="./product/bluesky_swift-feed.html">Bluesky Swiftフィード【公式】</a>からご確認ください。
                    </p>
                </div>
            </div>
            <div className="h2card clear">
                <h2 className="n4">フレームワーク・パッケージ</h2>
                <div className="h3card">
                    <h3>SwiftStorage</h3>
                    <p>
                        Userdefaultsによる永続化に対応したObservationのコードを生成するマクロ。
                        概要は<a href="https://github.com/KC-2001MS/SwiftStorage">SwiftStorageリポジトリ</a>からご確認ください。
                    </p>
                </div>
                <div className="h3card">
                    <h3>SwiftLI</h3>
                    <p>
                        コマンドラインツールのCUIを簡単に作成することができるパッケージ。
                        概要は<a href="https://github.com/KC-2001MS/SwiftLI">SwiftLIリポジトリ</a>からご確認ください。
                    </p>
                </div>
                <div className="h3card">
                    <h3>OnboardingUI</h3>
                    <p>
                        SwiftUIで簡単にオンボーディングを作成するためのパッケージ。
                        概要は<a href="https://github.com/KC-2001MS/OnboardingUI">OnboardingUIリポジトリ</a>からご確認ください。
                    </p>
                </div>
            </div>
            <div className="h2card clear">
                <h2 className="n5">シェルスクリプト</h2>
                <div className="h3card">
                    <h3>Shell-Config-Setup</h3>
                    <div>
                        OSの設定とアプリのダウンロードを簡単に行うシェルスクリプト。
                        概要は<a
                            href="https://github.com/KC-2001MS/Shell-Config-Setup">Shell-Config-Setupリポジトリ</a>からご確認ください。
                    <h4>
                        <a href="https://github.com/KC-2001MS/Shell-Config-Setup/archive/refs/heads/main.zip">ダウンロード</a>
                    </h4>
                    </div>
                </div>
            </div>
            <div className="h2card clear">
                <h2 className="n3">ウェブサイト</h2>
                <div className="h3card">
                    <h3>いろいろポートフォリオ</h3>
                    <p>こちらのホームページです。公開したサービスの紹介とサポート等を目的としたサイトです。</p>
                    <p>Webアプリケーションに詳しくなく、今後もメインとする予定がないため最低限の作りとなっております。このホームページを頻繁に更新する予定はありませんが、フィードバックが多ければ対応します。</p>
                </div>
            </div>

            <p className="caption">1.ＤＭＭは合同会社ＤＭＭ．ｃｏｍの商標もしくは商標登録です。</p>
            <p className="caption">2.ＦＡＮＺＡは株式会社デジタルコマースの商標もしくは商標登録です。</p>
            <p className="caption">3.楽天は楽天グループ株式会社の商標もしくは商標登録です。</p>
        </div>
    </main>
  );
}
