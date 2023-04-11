import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "目录",
    icon: "install",
    prefix: "/",
    children: [
      {
        text: "文章",
        icon: "note",
        link: "posts/",
      },
      {
        text: "资源",
        icon: "install",
        link: "resources/",
      },
    ],
  },
  { text: "关于", icon: "info", link: "/about/" },
]);
