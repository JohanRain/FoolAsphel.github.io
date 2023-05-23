import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      link: "posts/",
      children: [
        {
          text: "神经工程",
          icon: "process",
          link: "NeuralEngineering/",
          prefix: "NeuralEngineering/",
          collapsible: true,
          children: ["Overview", "HowToBuildABrain"],
        },
        {
          text: "算法",
          icon: "process",
          link: "Algorithm/",
          prefix: "Algorithm/",
          collapsible: true,
          children: ["Advance", "Other"],
        },
      ],
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
  "/posts/NeuralEngineering/HowToBuildABrain/": [
    {
      text: "How To Build A Brain",
      icon: "article",
      children: "structure",
    },
  ],
});
