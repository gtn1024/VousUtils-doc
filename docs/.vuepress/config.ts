import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { navbar, sidebar } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  locales: {
    "/": {
      lang: "en-US",
      title: "VousUtils",
      description: "A plenty of awesome methods for Java.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VousUtils",
      description: "为Java提供一揽子好用的方法。",
    },
  },

  themeConfig: {
    locales: {
      "/": {
        selectLanguageName: "English",

        navbar: navbar.en,
        sidebar: sidebar.en,
      },
      "/zh/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",

        editLinkText: "编辑此页",

        tip: "提醒",
        warning: "警告",
        danger: "危险",

        notFound: ["404", "页面走丢了"],
        backToHome: "返回首页",
        openInNewWindow: "新窗口打开",

        navbar: navbar.zh,
        sidebar: sidebar.zh,
      },
    },

    repo: "gtn1024/VousUtils",
    contributors: false,

    docsRepo: "gtn1024/VousUtils-doc",
    docsDir: "docs",
  },

  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-DN3CBHXBDE",
      },
    ],
  ],
});
