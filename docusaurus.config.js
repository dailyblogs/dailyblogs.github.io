const config = {
  title: 'Daily Blogs',
  tagline: 'Cloud architecture, platform engineering, DevSecOps and SRE notes',
  favicon: 'img/dailyblogs-mark.svg',

  url: 'https://dailyblogs.github.io',
  baseUrl: '/',

  organizationName: 'dailyblogs',
  projectName: 'dailyblogs.github.io',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'blog',
          blogTitle: 'Daily Blogs',
          blogDescription:
            'Practical cloud, DevOps, SRE, Kubernetes, Terraform and DevSecOps articles.',
          postsPerPage: 9,
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Daily Blogs',
      logo: {
        alt: 'Daily Blogs logo',
        src: 'img/dailyblogs-mark.svg',
      },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/architecture', label: 'Architecture', position: 'left' },
        { to: '/tools', label: 'Tools', position: 'left' },
        { to: '/interview', label: 'Interview Prep', position: 'left' },
        { href: 'https://github.com/dailyblogs/dailyblogs.github.io', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Docs', to: '/docs/intro' },
            { label: 'Blog', to: '/blog' },
            { label: 'Architecture', to: '/architecture' },
          ],
        },
        {
          title: 'Tracks',
          items: [
            { label: 'Azure / AKS', to: '/docs/azure-aks/intro' },
            { label: 'AWS Platform', to: '/docs/aws-platform/intro' },
            { label: 'Terraform / IaC', to: '/docs/terraform-iac/intro' },
            { label: 'SRE / Observability', to: '/docs/sre-observability/intro' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'GitHub', href: 'https://github.com/dailyblogs/dailyblogs.github.io' },
            { label: 'About', to: '/about' },
          ],
        },
      ],
      copyright:
        'Copyright ' +
        new Date().getFullYear() +
        ' Daily Blogs. Built with Docusaurus.',
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'docker', 'hcl'],
    },
  },
};

module.exports = config;
