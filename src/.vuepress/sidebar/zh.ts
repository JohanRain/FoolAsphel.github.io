import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    {
      text: "资源",
      icon: "install",
      prefix: "resources/",
      link: "resources/",
      children: "structure",
    },
    "slides",
  ],
  "/about/": [
    "",
    {
      text: "个人介绍",
      icon: "people",
      link: "intro",
    },
  ],
});
