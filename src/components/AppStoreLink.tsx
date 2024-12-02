import { Language } from "@/lib/Language";
import Link from "next/link";

type AppStoreLinkProps = {
    lang?: Language
    appId: string; // YouTube動画のIDを指定
};

const PATH = process.env.GITHUB_PAGES === 'true' ? '/test-page' : '';

const AppStoreLink = ({ lang = Language.Japanese, appId }: AppStoreLinkProps) => {

    const embedUrl = `https://apps.apple.com/app/${appId}`;

    switch (lang) {
        case Language.Japanese:
            return (
                <Link className="right" href={embedUrl}>
                    <picture>
                        <source srcSet={`${PATH}/images/Download-on-the-App-Store/JP/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_wht_100317.svg`} media="(prefers-color-scheme: dark)" />
                        <img src={`${PATH}/images/Download-on-the-App-Store/JP/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg`} className="buttonPadding" alt="App Storeからダウンロード" />
                    </picture>
                </Link>
            );
        case Language.EnglishUS:
            return (
                <Link className="right" href={embedUrl}>
                    <picture>
                        <source srcSet={`${PATH}/images/Download-on-the-App-Store/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg`} media="(prefers-color-scheme: dark)" />
                        <img src={`${PATH}/images/Download-on-the-App-Store/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg`} className="buttonPadding" alt="App Storeからダウンロード" />
                    </picture>
                </Link>
            );
    }
};

export default AppStoreLink;