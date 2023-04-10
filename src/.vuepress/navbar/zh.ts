import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "资源",
    icon: "install",
    prefix: "/zh/resources/",
    children: [
      {
        text: "Nengo",
        icon: "edit",
        link: "nengo",
      },
    ],
  },
]);
