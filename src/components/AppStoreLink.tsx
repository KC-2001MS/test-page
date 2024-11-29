import Image from "next/image";
import Link from "next/link";

type AppStoreLinkProps = {
    appId: string; // YouTube動画のIDを指定
};

const PATH = process.env.GITHUB_PAGES === 'true' ? '/test-page' : '';

const AppStoreLink = ({ appId }: AppStoreLinkProps) => {

    const embedUrl = `https://apps.apple.com/app/${appId}`;

    return (
        <Link className="right" href={embedUrl}>
        <Image src={`${PATH}/images/Download-on-the-App-Store/JP/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg`}  height={100} width={100} className="buttonPadding" alt="App Storeからダウンロード"/>
        </Link>
    );
  };
  
  export default AppStoreLink;