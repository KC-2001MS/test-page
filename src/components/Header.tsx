import "../app/css/var.css";
import "../app/css/foundation.css";

const Header = () => {
  return (
<header id="header">
        <a className="header" href="./">
            <h1 className="header">いろいろポートフォリオ</h1>
        </a>
        <ul className="tabContainaer">
            <li className="tab underline">
                <a className="header" href="./">ホーム</a>
            </li>
            <li className="tab underline">
                <a className="header" href="./product">コンテンツ</a>
            </li>
            <li className="tab underline">
                <a className="header" href="./contact">問い合わせ</a>
            </li>
        </ul>
    </header>
  );
};

export default Header;