module.exports = {
  title: 'MunsterJS',
  tagline: 'Simple but powerful javascript framework.',
  url: 'https://munsterjs.com',
  baseUrl: '/munster-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'mfpjayb',
  projectName: 'munster-docs',
  themeConfig: {
    navbar: {
      title: 'MunsterJS',
      logo: {
        alt: 'MunsterJS logo',
        // src: 'img/logo.svg'
        src: 'img/munster.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/mfpjayb/munster',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/munster',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/munster',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mfpjayb/munster',
            },
          ],
        },
      ],
      copyright: `Copyright (c) 2020 Darius Bualan Jr.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mfpjayb/munster-docs/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};