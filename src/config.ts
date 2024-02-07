import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://allmy.soy/", // replace this with your deployed domain
  author: "Zoey Uerban",
  desc: "The place I store my Soy",
  title: "AllMy.Soy",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/zoephyr/allmy.soy",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to zoey@allmy.soy`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/z0ephyr",
    linkTitle: `@z0ephyr on Twitter`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/Xt67uxdqug",
    linkTitle: `Checkout some homies I 💛 on Discord`,
    active: true,
  },
];
