import Link from 'next/link'
import "@styles/var.css";
import "@styles/foundation.css";

const Header = () => {
      return (
            <header id="header">
                  <Link className="header" href="/">
                        <h1 className="header">いろいろポートフォリオ</h1>
                  </Link>
                  <ul className="tabContainaer">
                        <li className="tab underline">
                              <Link className="header" href="/">
                                    ホーム
                              </Link>
                        </li>
                        <li className="tab underline">
                              <Link className="header" href="/product">
                                    コンテンツ
                              </Link>
                        </li>
                        <li className="tab underline">
                              <Link className="header" href="/contact">
                                    問い合わせ
                              </Link>
                        </li>
                  </ul>
            </header>
      );
};

export default Header;