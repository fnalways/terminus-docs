import { defineConfig } from "vitepress";

const side = {
  "/zh/overview/": [
    {
      text: "概览",
      items: [
        {
          text: "什么是 Terminus?",
          link: "/zh/overview/introduction/what-is-terminus",
        },
        {
          text: "快速开始",
          link: "/zh/overview/introduction/getting-started/",
          collapsed: true,
          items: [
            { text: "Linux", link: "/zh/overview/introduction/getting-started/linux" },
            { text: "树莓派", link: "/zh/overview/introduction/getting-started/raspberry" },
            { text: "MacOS", link: "/zh/overview/introduction/getting-started/mac" },
            { text: "Windows", link: "/zh/overview/introduction/getting-started/windows" },
          ]
        },
        // { text: "BEC Architecture", link: "/zh/overview/introduction/bec" },
        { text: "常见问题", link: "/zh/overview/introduction/faq" },
      ],
    },
    {
      text: "Terminus OS",
      items: [
        { text: "操作系统简介", link: "/zh/overview/terminus/overview" },
        { text: "用户", link: "/zh/overview/terminus/account" },
        { text: "Terminus Name", link: "/zh/overview/terminus/terminus-name" },
        { text: "应用", link: "/zh/overview/terminus/application" },
        { text: "网络", link: "/zh/overview/terminus/network" },
        { text: "数据", link: "/zh/overview/terminus/data" },
        { text: "密钥", link: "/zh/overview/terminus/secret" },
        { text: "AI 框架", link: "/zh/overview/terminus/ai" },
      ],
    },
     {
      text: "协议",
      items: [
        { text: "概述", link: "/zh/overview/protocol/overview" },
        { text: "Otmoic", link: "/zh/overview/protocol/otmoic" },
        { text: "开放应用分发协议", link: "/zh/overview/protocol/market" },
        { text: "推荐算法", link: "/zh/overview/protocol/recommend" },
      ],
    },
  ],
  "/zh/how-to/": [
    {
      text: "Terminus OS",
      items: [
        { text: "概览", link: "/zh/how-to/terminus/" },
        {
          text: "安装与部署",
          collapsed: true,
          items: [
            {
              text: "安装",
              link: "/zh/how-to/terminus/setup/install/",
              collapsed: true,
              items: [
                { text: "Linux", link: "/zh/how-to/terminus/setup/install/linux" },
                { text: "树莓派", link: "/zh/how-to/terminus/setup/install/raspberry" },
                { text: "MacOS", link: "/zh/how-to/terminus/setup/install/mac" },
                { text: "Windows", link: "/zh/how-to/terminus/setup/install/windows" },
              ]
            },
            { text: "激活向导", link: "/zh/how-to/terminus/setup/wizard" },
            { text: "登录", link: "/zh/how-to/terminus/setup/login" },
          ],
        },
        { text: "桌面", link: "/zh/how-to/terminus/desktop" },
        {
          text: "Vault",
          link: "/zh/how-to/terminus/vault/",
          collapsed: true,
          items: [
            { text: "Web", link: "/zh/how-to/terminus/vault/web" },
            { text: "Vault & Item", link: "/zh/how-to/terminus/vault/vault" },
            { text: "Team", link: "/zh/how-to/terminus/vault/team" },
          ],
        },
        {
          text: "文件",
          link: "/zh/how-to/terminus/files/",
        },
        {
          text: "应用市场",
          link: "/zh/how-to/terminus/market/",
        },
        {
          text: "Wise",
          link: "/zh/how-to/terminus/wise/",
        },
        {
          text: "设置",
          collapsed: true,
          link: "/zh/how-to/terminus/settings/",
          items: [
            {
              text: "主页",
              link: "/zh/how-to/terminus/settings/home",
            },
            {
              text: "账户",
              link: "/zh/how-to/terminus/settings/account",
            },
            {
              text: "应用",
              link: "/zh/how-to/terminus/settings/application",
            },
            {
              text: "集成",
              link: "/zh/how-to/terminus/settings/integration",
            },
            {
              text: "壁纸",
              link: "/zh/how-to/terminus/settings/wallpaper",
            },
            {
              text: "知识库",
              link: "/zh/how-to/terminus/settings/knowledge",
            },
            {
              text: "备份",
              link: "/zh/how-to/terminus/settings/backup",
            },
            {
              text: "升级",
              link: "/zh/how-to/terminus/settings/upgrade",
            },
          ],
        },
        { text: "个人主页", link: "/zh/how-to/terminus/profile" },
        {
          text: "面板",
          link: "/zh/how-to/terminus/dashboard/",
        },
        {
          text: "ControlHub",
          collapsed: true,
          link: "/zh/how-to/terminus/controlhub/",
          items: [
            {
              text: "浏览",
              link: "/zh/how-to/terminus/controlhub/browse",
            },
            {
              text: "命名空间",
              link: "/zh/how-to/terminus/controlhub/namespace",
            },
            {
              text: "Pods",
              link: "/zh/how-to/terminus/controlhub/pods",
            },
            {
              text: "资源",
              link: "/zh/how-to/terminus/controlhub/resource",
            },
            {
              text: "中间件",
              link: "/zh/how-to/terminus/controlhub/middleware",
            },
          ],
        },
        { text: "Dify.ai", link: "/zh/how-to/terminus/dify" },
      ],
    },
    {
      text: "TermiPass",
      items: [
        { text: "概述", link: "/zh/how-to/termipass/overview" },
        {
          text: "账户",
          link: "/zh/how-to/termipass/account/index.md",
        },
        {
          text: "管理 Terminus",
          link: "/zh/how-to/termipass/manage-terminus",
        },
        {
          text: "密码自动填充",
          link: "/zh/how-to/termipass/password-autofill",
        },
        {
          text: "同步本地文件",
          link: "/zh/how-to/termipass/local-file-sync",
        },
      ],
    },
    {
      text: "Terminus Space",
      items: [
        { text: "快速开始", link: "/zh/how-to/space/" },
        { text: "账户", link: "/zh/how-to/space/account" },
        {
          text: "运行 Terminus",
          collapsed: true,
          link: "/zh/how-to/space/host/",
          items: [
            {
              text: "创建 Terminus",
              link: "/zh/how-to/space/host/create-terminus",
            },
            {
              text: "管理 Terminus",
              link: "/zh/how-to/space/host/management-terminus",
            },
          ],
        },
        {
          text: "组织域名",
          collapsed: true,
          link: "/zh/how-to/space/domain/",
          items: [
            {
              text: "创建域名",
              link: "/zh/how-to/space/domain/host-domain",
            },
            {
              text: "管理域名",
              link: "/zh/how-to/space/domain/management-domain",
            },
          ],
        },
        { text: "备份&恢复", link: "/zh/how-to/space/backup" },
        { text: "账单", link: "/zh/how-to/space/bill" },
      ],
    },
    {
      text: "Otmoic",
      items: [
        {
          text: "概述",
          link: "/zh/how-to/otmoic/",
        },
      ],
    },
  ],
  "/zh/developer/": [
    {
      text: "开发 Terminus 应用",
      items: [
        {
          text: "概述",
          link: "/zh/developer/develop/",
        },
        {
          text: "教程",
          collapsed: true,
          link: "/zh/developer/develop/tutorial/",
          items: [
            {
              text: "了解 Devbox",
              link: "/zh/developer/develop/tutorial/devbox",
            },
            {
              text: "创建你的首个应用",
              collapsed: true,
              link: "/zh/developer/develop/tutorial/note/",
              items: [
                {
                  text: "创建应用",
                  link: "/zh/developer/develop/tutorial/note/create",
                },
                {
                  text: "开发后端",
                  link: "/zh/developer/develop/tutorial/note/backend",
                },
                {
                  text: "开发前端",
                  link: "/zh/developer/develop/tutorial/note/frontend",
                },
              ],
            },
          ],
        },
        {
          text: "应用包管理",
          collapsed: true,
          items: [
            {
              text: "应用 Chart",
              link: "/zh/developer/develop/package/chart",
            },
            {
              text: "配置应用",
              link: "/zh/developer/develop/package/manifest",
            },
            {
              text: "配置模型",
              link: "/zh/developer/develop/package/model",
            },
            {
              text: "配置推荐算法",
              link: "/zh/developer/develop/package/recommend",
            },
            {
              text: "Helm 扩展",
              link: "/zh/developer/develop/package/extension",
            },
          ],
        },
        {
          text: "进阶",
          collapsed: true,
          items: [
            {
              text: "命令行",
              link: "/zh/developer/develop/advanced/cli",
            },
            {
              text: "Terminus Info",
              link: "/zh/developer/develop/advanced/terminus-info",
            },
            {
              text: "Service Provider",
              link: "/zh/developer/develop/advanced/provider",
            },
            {
              text: "AI",
              link: "/zh/developer/develop/advanced/ai",
            },
            { text: "Cookie", link: "/zh/developer/develop/advanced/cookie" },
            { text: "数据库", link: "/zh/developer/develop/advanced/database" },
            {
              text: "账户",
              link: "/zh/developer/develop/advanced/account",
            },
            {
              text: "应用市场",
              link: "/zh/developer/develop/advanced/market",
            },
            // {
            //   text: "分析",
            //   link: "/zh/developer/develop/advanced/analytic",
            // },
            {
              text: "Websocket",
              link: "/zh/developer/develop/advanced/websocket",
            },
            {
              text: "文件上传",
              link: "/zh/developer/develop/advanced/file-upload",
            },
            // {
            //   text: "RSS",
            //   link: "/zh/developer/develop/advanced/rss",
            // },
            {
              text: "密钥",
              link: "/zh/developer/develop/advanced/secret",
            },
            // {
            //   text: "通知",
            //   link: "/zh/developer/develop/advanced/notification",
            // },
            // {
            //   text: "前端",
            //   link: "/zh/developer/develop/advanced/frontend",
            // },
            {
              text: "Kubesphere",
              link: "/zh/developer/develop/advanced/kubesphere",
            },
          ],
        },

        {
          text: "发布应用",
          collapsed: true,
          link: "/zh/developer/develop/submit/",
        },
      ],
    },

    {
      text: "参与贡献",
      items: [
        {
          text: "Terminus OS",
          link: "/zh/developer/contribute/terminus-os",
        },
        // {
        //   text: "TermiPass",
        //   link: "/zh/developer/contribute/termipass",
        // },
        {
          text: "Snowinning 协议",
          collapsed: true,

          items: [
            {
              text: "概览",
              link: "/zh/developer/contribute/snowinning/overview",
            },
            {
              text: "概念",
              link: "/zh/developer/contribute/snowinning/concepts",
            },
            {
              text: "Terminus Name",
              link: "/zh/developer/contribute/snowinning/terminus-name",
            },
            {
              text: "合约",
              collapsed: true,
              link: "/zh/developer/contribute/snowinning/contract-overview",
              items: [
                {
                  text: "TerminusDID",
                  link: "/zh/developer/contribute/snowinning/contract-tdid",
                },
                {
                  text: "声誉",
                  link: "/zh/developer/contribute/snowinning/contract-reputation",
                },
                {
                  text: "管理",
                  link: "/zh/developer/contribute/snowinning/contract-manager",
                },
              ],
            },
            {
              text: "VC 服务",
              link: "/zh/developer/contribute/snowinning/vc",
            },
          ],
        },
        {
          text: "开发系统应用",
          collapsed: true,

          items: [
            {
              text: "概览",
              link: "/zh/developer/contribute/system-app/overview",
            },
            {
              text: "deployment.yaml",
              link: "/zh/developer/contribute/system-app/deployment",
            },
            {
              text: "TerminusManifest.yaml",
              link: "/zh/developer/contribute/system-app/terminus-manifest",
            },
            {
              text: "安装",
              link: "/zh/developer/contribute/system-app/install",
            },
            {
              text: "其他",
              link: "/zh/developer/contribute/system-app/other",
            },
          ],
        },
      ],
    },
  ],
};

export const zh = defineConfig({
  lang: "zh",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon.png",
    socialLinks: [{ icon: "github", link: "https://github.com/beclab" }],

    nav: [
      { text: "概述", link: "/zh/overview/introduction/what-is-terminus" },
      { text: "教程", link: "/zh/how-to/terminus/" },
      { text: "开发者", link: "/zh/developer/develop/" },
    ],

    sidebar: side,
  },
});
