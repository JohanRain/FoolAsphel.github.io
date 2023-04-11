import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "游者",
      description: "Izudia的个人博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
