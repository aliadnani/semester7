module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://aliadnani.github.io/",
  baseUrl: "/semester7/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "aliadnani", // Usually your GitHub org/user name.
  projectName: "semester7", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "43499 Semester 7",
      logo: {
        alt: "My Site Logo",
        src: "img/fd552ca27e87e15f2c669bf484d69a62.jpg",
      },
      items: [
        {
          to: "https://calendar.google.com/",
          activeBasePath: "docs",
          label: "Google Calendar",
          position: "left",
        },
        { to: "https://learn.polyu.edu.hk/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1", label: "Blackboard", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Ali Adnan ${new Date().getFullYear()} // Built with Docusaurus :)`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
