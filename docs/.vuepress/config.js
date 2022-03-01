module.exports = {
  theme: "reco",
  title: "Zzongke",
  description: "Zzongke的blog",
  base: "/blog/",
  // base: '/', // 这是部署到github相关的配置 下面会讲
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      {
        rel: "icon",
        // href: '/favicon.ico'
        href: "/logo.jpg",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    type: "blog",
    author: "Zzongke",
    authorAvatar: "/logo.jpg",
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    blogConfig: {
      category: {
        location: 1,
        text: "Category",
      },
      tag: {
        location: 2,
        text: "tag",
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/recoluan" },
        { icon: "reco-npm", link: "https://www.npmjs.com/~reco_luan" },
      ],
    },
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        icon: "reco-github",
        text: "Javascript",
        link: "/Javascript/",
      },
      {
        text: "Vue",
        link: "/Vue/",
      },
      {
        text: "React",
        link: "https://zh-hans.reactjs.org/",
      },
      {
        text: "其它",
        link: "/Other/",
      },
      {
        text: "Nginx",
        link: "https://www.nginx.cn/doc/",
      },
      {
        text: "Node",
        link: "https://nodejs.org/api/",
      },
    ],
    subSidebar: "auto",
    sidebar: {
      "/Javascript/": [
        "/Javascript/防抖和节流",
        "/Javascript/this",
        "/Javascript/浅拷贝和深拷贝",
      ],
      "/Vue/": ["/Vue/Vue常见问题", "/Vue/nextTick"],
      "/Other/": [
        "/Other/Git常用指令",
        "/Other/Markdown",
        "/Other/模糊搜索关键词高亮显示",
        "/Other/CentOS8配置Nginx",
      ],
    },
    friendLink: [
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "recoluan@qq.com",
        link: "https://www.recoluan.com",
      },
    ],
    // 备案
    record: "ICP 备案文案",
    recordLink: "ICP 备案指向链接",
    cyberSecurityRecord: "公安部备案文案",
    cyberSecurityLink: "公安部备案指向链接",
    // 项目开始时间，只填写年份
    startYear: "2019",
    //代码主题
    codeTheme: "tomorrow",
  },
};
