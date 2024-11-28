import Link from "next/link";

type MailLinkProps = {
    mail: string;
};

const MailLink = ({ mail }: MailLinkProps) => {

    const embedUrl = `mailto:${mail}`;

    return (
        <Link className="right" href={embedUrl}>mail</Link>
    );
  };
  
export default MailLink;