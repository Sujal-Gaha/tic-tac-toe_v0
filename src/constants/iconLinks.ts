import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type TIconLink = {
  id: number;
  icon: ReactNode;
  href: string;
};

const githubIcon: ReactNode = FaGithub({});
const linkedinIcon: ReactNode = FaLinkedin({});
const twitterIcon: ReactNode = FaXTwitter({});

const githubHref = "https://github.com/Sujal-Gaha";
const linkedinHref = "https://www.linkedin.com/in/sujal-magar-382889287/";
const twitterHref = "https://x.com/suzalgahamagar";

export const iconLinks: TIconLink[] = [
  {
    id: 1,
    icon: githubIcon,
    href: githubHref,
  },
  {
    id: 2,
    icon: linkedinIcon,
    href: linkedinHref,
  },
  {
    id: 3,
    icon: twitterIcon,
    href: twitterHref,
  },
];
