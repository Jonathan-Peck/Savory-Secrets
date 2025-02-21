import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Savory Secrets',
  tagline: 'Keep it Secret, Keep it Savory',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com/Jonathan-Peck/Savory-Secrets',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Savory Secrets', // Usually your repo name.
  trailingSlash:false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: false,
        //   blogSidebarTitle: 'All posts',
        //   blogSidebarCount: 'ALL',
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          // remarkPlugins: [require('./my-remark-plugin')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins:[
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'breakfast',
        path: 'breakfast',
        routeBasePath: 'breakfast',
        sidebarPath: require.resolve('./breakfastSidebars.ts'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sides',
        path: 'sides',
        routeBasePath: 'sides',
        sidebarPath: require.resolve('./sidesSidebars.ts'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'desserts',
        path: 'desserts',
        routeBasePath: 'desserts',
        sidebarPath: require.resolve('./dessertsSidebars.ts'),
      }, 
    ],
  ],

  themeConfig: {
    metadata:[
      {name: 'keywords', content: 'dinner, chicken'}
    ],
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      //hideOnScroll: true,
      title: 'Home',
      logo: {
        alt: 'Home Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Recipes',
        },
        // {
        //   to: '/docs/Intro',    // ./docs/Intro.md
        //   label: 'Recipes',
        //   position: 'left',
        //   activeBaseRegex: `/docs/`,
        // },
        {
          to: '/breakfast/category/breakfast',    // ./docs-api/Intro.md
          //type: 'doc',
          //docId: 'breakfastSidebar',
          position: 'left',
          label: 'Breakfast',
          activeBaseRegex: `/breakfast/`,
        },
        {
          to: '/sides/category/sides',  // ./docs-system/Intro.md
          label: 'Sides',
          position: 'left',
          activeBaseRegex: `/sides/`,
        },
        {
          to: '/desserts/category/desserts',  // ./docs-system/Intro.md
          label: 'Desserts',
          position: 'left',
          activeBaseRegex: `/desserts/`,
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Recipes',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'X',
            //   href: 'https://x.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
