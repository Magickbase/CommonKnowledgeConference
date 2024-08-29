import { ComponentProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import FooterLogo from "./footer.svg";
import FooterMobileLogo from "./footer-mobile.svg";


const externalLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/ckcon2024",
  },
  {
    name: "Discord",
    href: "https://discord.gg/ckcon",
  },
  {
    name: "Telegram",
    href: "https://t.me/ckcon",
  },
  {
    name: "Reddit",
    href: "https://reddit.com/r/ckcon",
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/company/ckcon",
  },
  {
    name: "Youtube",
    href: "https://youtube.com/ckcon",
  },
  {
    name: "Nervos Talk",
    href: "https://talk.nervos.org/c/ckcon",
  },
];

export const Footer = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className="flex flex-col items-center border-t border-[#00000026] py-16 gap-20"
    {...props}
  >
    <ul className="flex flex-col md:flex-row gap-16">
      <Link href="/2024/speakers">
        <li className="font-semibold text-xl font-articulatCF">SPEAKERS</li>
      </Link>
      <Link href="/2024/attend">
        <li className="font-semibold text-xl font-articulatCF">ATTEND</li>
      </Link>
      <Link href="/2024/partners">
        <li className="font-semibold text-xl font-articulatCF">PARTNERS</li>
      </Link>
    </ul>

    <FooterLogo
      className="max-w-[100vw] hidden xl:block"
    />

    <FooterMobileLogo className="max-w-[100vw] xl:hidden"/>

    <ul className="flex flex-col md:flex-row gap-8 md:gap-16">
      {externalLinks.map(({ name, href }) => (
        <Link href={href} target="_blank" key={name}>
          <li className="flex items-center gap-2 font-articulatCF font-bold text-lg">
            {name}
            <ExternalLink width={16} />
          </li>
        </Link>
      ))}
    </ul>
  </div>
);
