import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://blog.izudia.top",

  favicon: "/夜间.svg",

  author: {
    name: "Izudia",
    url: "https://blog.izudia.top",
  },

  iconAssets: "iconfont",

  logo: "/夜间.svg",

  repo: "FoolAsphel/FoolAsphel.github.io",

  repoDisplay: false,

  docsRepo: "FoolAsphel/FoolAsphel.github.io",

  docsBranch: "master",

  docsDir: "src",

  blog: {
    avatar: "/Victoria.jpg",
    medias: {
      BiliBili: "https://bilibili.com",
      Discord: "https://discord.com",
      GitHub: "https://github.com",
      Steam: "https://steam.com",
      Zhihu: "https://zhihu.com",
      Rss: "https://example.com",
      Email: "mailto:foolasphel@outlook.com",
    },
  },

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A programmer",
        intro: "/en/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "游者",

      displayFooter: true,

      blog: {
        description: "医工交叉 软硬结合",
        intro: "/about/intro",
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/en/demo/encrypt.html": ["1234"],
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
      repo: "FoolAsphel/Comment",
      repoId: "R_kgDOJUgFfw",
      category: "Announcements",
      categoryId: "DIC_kwDOJUgFf84CVpTc",
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    components: {
      rootComponents: {
        backToTop: true,
        notice: [
          {
            path: "/",
            title: "Notice",
            content: "Notice Content"
          }
        ],
      },
      components: [
        "CodePen",
        "Replit",
        "StackBlitz",
        "SiteInfo",
        "VPBanner",
        "VPCard",
        "ArtPlayer",
        "BiliBili",
        "PDF",
        "Badge",
        "VidStack",
        "FontIcon",
        "Share",
      ],
    },
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
