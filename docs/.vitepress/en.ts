import { defineConfig, type DefaultTheme } from "vitepress";

const side = {
  "/manual/": [
    { text: "Docs home", link: "/manual/docs-home" },
    { text: "Feature overview",
      collapsed: true,
      link: "/manual/feature-overview",
       items: [
       { text: "Why Terminus",
         link: "/manual/why-terminus"},
       { text: "Feature comparison",
        link: "/manual/feature-comparison"},
       { text: "Release notes", link: "/manual/release-notes" },
       ],
     },
    {
      text: "Get started",
      link: "/manual/get-started/",
      collapsed: true,
      items: [
       // { text: "Quick start", link: "/manual/get-started/quick-start" },
        {
          text: "Create a Terminus Name",
          link: "/manual/get-started/create-terminus-name",
        },
        {
          text: "Install Terminus",
          link: "/manual/get-started/install-terminus",
        },
        {
          text: "Activate Terminus",
          link: "/manual/get-started/activate-terminus",
        },
        {
          text: "Log in to Terminus",
          link: "/manual/get-started/log-in-to-terminus",
        },
        {
          text: "Next steps",
          link: "/manual/get-started/next-steps",
        },
      ],
    },
    {
      text: "Use cases",
      collapsed: true,
      link: "/manual/use-cases/",
      items: [],
    },
    {
      text: "How-to",
      collapsed: true,
      link: "/manual/tasks/",
      items: [
       // {
       //   text: "Manage Terminus with TermiPass",
       //   link: "/manual/tasks/manage-terminus",
       // },
        {
          text: "Personalization",
          collapsed: true,
          items: [
            {
              text: "Design Terminus profile",
              link: "/manual/tasks/profile",
            },
            {
              text: "Set language and appearance",
              link: "/manual/tasks/language-appearance",
            },
            {
              text: "Add integrations",
              link: "/manual/tasks/integrations",
            },
            {
              text: "Use NFT images",
              link: "/manual/tasks/nft-image",
            },
          ],
        },
        {
          text: "Manage Applications",
          collapsed: true,
          items: [
            {
              text: "Install, uninstall & update",
              link: "/manual/tasks/install-uninstall-update",
            },
            {
              text: "Customize URLs",
              link: "/manual/tasks/access-settings",
            },
            {
              text: "Manage GPU usage",
              link: "/manual/tasks/gpu-resource",
            },
            {
              text: "Access via VPN",
              link: "/manual/tasks/private-network",
            },
          ],
        },
        {
          text: "Manage Files",
          collapsed: true,
          link: "/manual/tasks/files",
          items: [
            {
              text: "Add, edit & download",
              link: "/manual/tasks/add-edit-download",
            },
            {
              text: "Sync and share",
              link: "/manual/tasks/sync-share",
            },
            //{
            //  text: "Sharing and collaboration",
            //  link: "/manual/tasks/sharing-collaboration",
           // },
          ],
        },
        {
          text: "Secure Sensitive Data",
          collapsed: true,
          link: "/manual/tasks/vault",
          items: [
            {
              text: "Vault basics",
              link: "/manual/tasks/vault-items",
            },
            {
              text: "Share vault items",
              link: "/manual/tasks/share-vault-items",
            },
            //{
            //  text: "Generate strong passwords",
            //  link: "/manual/tasks/strong-passwords",
            //},
            {
              text: "Set up 2FA",
              link: "/manual/tasks/two-factor-verification",
            },
            {
              text: "Use autofill",
              link: "/manual/tasks/autofill",
            },
          ],
        },
        {
          text: "Curate information hub",
          collapsed: true,
          link: "/manual/tasks/wise/",
          items: [
              {
                text: "Wise basics",
                link: "/manual/tasks/wise-basics",
              },
            {
              text: "Discover",
              link: "/manual/tasks/recommend",
            },
            {
              text: "Subscribe",
              link: "/manual/tasks/subscribe",
            },
            //{
            //  text: "Subscribe to an RSS feed",
            //  link: "/manual/tasks/subscribe",
            //},
          ],
        },
        {
          text: "Start a team",
          link: "/manual/tasks/team",
          collapsed: true,
          items: [
            {
              text: "User roles",
              link: "/manual/tasks/roles-permissions",
            },
            {
              text: "Manage your team",
              link: "/manual/tasks/manage-team",
            },
           {
             text: "Collaborate",
             link: "/manual/tasks/collaborate",
           },
          ],
        },
        {
          text: "Maintain",
          collapsed: true,
          items: [
            {
              text: "Monitor system and apps",
              link: "/manual/tasks/resources-usage",
            },
            //{
            //  text: "Analyze applications",
            //  link: "/manual/tasks/application-analytics",
            //},
            {
              text: "Update Terminus",
              link: "/manual/tasks/update",
            },
            //{
            //  text: "Debug cluster issues",
            //  link: "/manual/tasks/debug",
            //},
            //{
            //  text: "Configure application parameters",
            //  link: "/manual/tasks/application-parameters",
            //},
          ],
        },
      ],
    },
    {
      text: "Terminus Space",
      link: "/manual/terminus-space/",
      collapsed: true,
      items: [
        {
          text: "Associate Terminus",
          link: "/manual/terminus-space/associate-terminus",
        },
        {
          text: "Backup and Restore",
          link: "/manual/terminus-space/backup-restore",
        },
        { text: "Billing", link: "/manual/terminus-space/billing" },
      ],
    },
    {
      text: "References",
      link: "/manual/reference/",
      collapsed: true,
      items: [
        { text: "CLI Syntax", link: "/manual/reference/cli-syntax" },
        {
          text: "Dashboard Metrics",
          link: "/manual/reference/dashboard-metrics",
        },
        {
          text: "Control Hub Fields",
          link: "/manual/reference/control-hub-fields",
        },
      ],
    },
    {
      text: "Concepts",
      collapsed: true,
      link: "/manual/concepts/",
      items: [
        {
          text: "Overview",
          collapsed: true,
          items: [
            {
              text: "Core components",
              link: "/manual/concepts/core-components",
            },
            { text: "Protocols", link: "/manual/concepts/protocols" },
          ],
        },
        { text: "Terminus Name", link: "/manual/concepts/terminus-name" },
        { text: "Account", link: "/manual/concepts/account" },
        { text: "Application", link: "/manual/concepts/application" },
        { text: "Network", link: "/manual/concepts/network" },
        { text: "Data", link: "/manual/concepts/data" },
        { text: "Secrets", link: "/manual/concepts/secrets" },
      ],
    },
    {
      text: "Help and Support",
      collapsed: true,
      items: [
        { text: "FAQs", link: "/manual/help/faqs" },
        {
          text: "Troubleshooting Guide",
          link: "/manual/help/troubleshooting-guide",
        },
        {
          text: "Request Technical Support",
          link: "/manual/help/request-technical-support",
        },
      ],
    },
    { text: "Glossary", link: "/manual/glossary" },
  ],

  "/developer/": [
    {
      text: "Developing Terminus App",
      items: [
        {
          text: "Overview",
          link: "/developer/develop/",
        },
        {
          text: "Tutorial",
          collapsed: true,
          link: "/developer/develop/tutorial/",
          items: [
            {
              text: "Learn DevBox",
              link: "/developer/develop/tutorial/devbox",
            },
            {
              text: "Create Your First Apps",
              collapsed: true,
              link: "/developer/develop/tutorial/note/",
              items: [
                {
                  text: "1. Create App",
                  link: "/developer/develop/tutorial/note/create",
                },
                {
                  text: "2. Develop Backend",
                  link: "/developer/develop/tutorial/note/backend",
                },
                {
                  text: "3. Develop Frontend",
                  link: "/developer/develop/tutorial/note/frontend",
                },
              ],
            },
          ],
        },
        {
          text: "Application Package",
          collapsed: true,
          items: [
            {
              text: "Application Chart",
              link: "/developer/develop/package/chart",
            },
            {
              text: "TerminusManifest",
              link: "/developer/develop/package/manifest",
            },
            {
              text: "Model",
              link: "/developer/develop/package/model",
            },
            {
              text: "Recommend",
              link: "/developer/develop/package/recommend",
            },
            {
              text: "Helm Extension",
              link: "/developer/develop/package/extension",
            },
          ],
        },
        {
          text: "Advanced",
          collapsed: true,
          items: [
            {
              text: "CLI",
              link: "/developer/develop/advanced/cli",
            },
            {
              text: "Terminus Info",
              link: "/developer/develop/advanced/terminus-info",
            },
            {
              text: "Service Provider",
              link: "/developer/develop/advanced/provider",
            },
            {
              text: "AI",
              link: "/developer/develop/advanced/ai",
            },
            { text: "Cookie", link: "/developer/develop/advanced/cookie" },
            { text: "Database", link: "/developer/develop/advanced/database" },
            {
              text: "Account",
              link: "/developer/develop/advanced/account",
            },
            {
              text: "Market",
              link: "/developer/develop/advanced/market",
            },
            // {
            //   text: "Analytic",
            //   link: "/developer/develop/advanced/analytic",
            // },
            {
              text: "Websocket",
              link: "/developer/develop/advanced/websocket",
            },
            {
              text: "File Upload",
              link: "/developer/develop/advanced/file-upload",
            },
            // {
            //   text: "Rss",
            //   link: "/developer/develop/advanced/rss",
            // },
            {
              text: "Secret",
              link: "/developer/develop/advanced/secret",
            },
            // {
            //   text: "Notification",
            //   link: "/developer/develop/advanced/notification",
            // },
            // {
            //   text: "Frontend",
            //   link: "/developer/develop/advanced/frontend",
            // },
            {
              text: "Kubesphere",
              link: "/developer/develop/advanced/kubesphere",
            },
          ],
        },

        {
          text: "Submit Application",
          collapsed: true,
          link: "/developer/develop/submit/",
        },
      ],
    },

    {
      text: "Contributing To Terminus",
      items: [
        {
          text: "Terminus OS",
          link: "/developer/contribute/terminus-os",
        },
        {
          text: "Snowinning Protocol",
          collapsed: true,

          items: [
            {
              text: "Overview",
              link: "/developer/contribute/snowinning/overview",
            },
            {
              text: "Concepts",
              link: "/developer/contribute/snowinning/concepts",
            },
            {
              text: "Terminus Name",
              link: "/developer/contribute/snowinning/terminus-name",
            },
            {
              text: "Contract",
              collapsed: true,
              link: "/developer/contribute/snowinning/contract-overview",
              items: [
                {
                  text: "TerminusDID",
                  link: "/developer/contribute/snowinning/contract-tdid",
                },
                {
                  text: "Reputation",
                  link: "/developer/contribute/snowinning/contract-reputation",
                },
                {
                  text: "Manager",
                  link: "/developer/contribute/snowinning/contract-manager",
                },
              ],
            },
            {
              text: "VC Service",
              link: "/developer/contribute/snowinning/vc",
            },
          ],
        },
        {
          text: "Develop System App",
          collapsed: true,

          items: [
            {
              text: "Overview",
              link: "/developer/contribute/system-app/overview",
            },
            {
              text: "deyploment.yaml",
              link: "/developer/contribute/system-app/deployment",
            },
            {
              text: "TerminusManifest.yaml",
              link: "/developer/contribute/system-app/terminus-manifest",
            },
            {
              text: "Install",
              link: "/developer/contribute/system-app/install",
            },
            {
              text: "Other",
              link: "/developer/contribute/system-app/other",
            },
          ],
        },
      ],
    },
  ],
};

export const en = defineConfig({
  lang: "/",
  themeConfig: {
    logo: "/icon.png",
    socialLinks: [{ icon: "github", link: "https://github.com/beclab" }],

    nav: [
      { text: "Manual", link: "/manual/docs-home" },
      { text: "Developer", link: "/developer/develop/" },
    ],

    sidebar: side,
  },
});
