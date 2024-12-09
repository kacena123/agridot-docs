import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AgriDot Docs",
  description: "A Web3 mobile dApp for Farmers",
  base: '/agridot-docs/',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon',  href: 'favicon.png' }
    ]
  ],
  themeConfig: {
    logo: '/favicon.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Developers', link: '/dev-guide/introduction' },
      { text: 'Users', link: '/user-guide/intro' }
    ],

    sidebar: [
      {
        text: 'Developers guide',
        items: [
          { text: 'Introduction', link: '/dev-guide/introduction' },
          { text: 'Launching the project', link: '/dev-guide/launching_project' },
        ],
      },
      {
        text: 'User guide',
        items: [
          { text: 'Getting Started', link: '/user-guide/intro' },
          { text: 'Creating a wallet', link: '/user-guide/creating_wallet' },
          { text: 'Signing in', link: '/user-guide/signing_in' },
          { text: 'Creating a field', link: '/user-guide/creating_field' },
          { text: 'Creating a crop', link: '/user-guide/creating_crop' },
          { text: 'Creating a guide', link: '/user-guide/creating_guide' },
          { text: 'Creating a pest report', link: '/user-guide/creating_pest' },
          { text: 'Creating a donation', link: '/user-guide/donating' },

        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kacena123/AgriDot' }
    ]
  },
  ignoreDeadLinks: true
})
