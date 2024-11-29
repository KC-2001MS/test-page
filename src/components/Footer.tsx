import Link from 'next/link'
import "@styles/var.css";
import "@styles/foundation.css";

const Footer = () => {
  return (
    <footer>
      <Link className="header" href="/contact">
        <p id="copyright">© 2023 Keisuke Chinone</p>
      </Link>
    </footer>
  );
};

export default Footer;