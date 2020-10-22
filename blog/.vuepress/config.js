module.exports = {
  title: 'AWZM.dev',
  description: 'A blog by awesome devs for awesome devs',
  head: [
    // ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  serviceWorker: true,
  // ga: process.env.GA_ID,
  evergreen: true, // disables ES5 transpilation and polyfills for IE
  plugins: {
    seo: {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.summary,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: _ => 'article',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.cover && (($site.themeConfig.domain || '') + $page.frontmatter.cover),
      publishedAt: $page => $page.frontmatter.created_at && new Date($page.frontmatter.created_at),
      modifiedAt: $page => $page.updated_at && new Date($page.updated_at)
    }
  },
  theme: '@vuepress/blog',
  themeConfig: {
    repo: 'awzm',
    domain: 'awzm.netlify.com',
    hostname: 'https://awzm.netlify.com',
    smoothScroll: true,
    pwa: {
      serviceWorker: true,
      updatePopup: true
    },
    sitemap: {
      hostname: 'https://awzm.netlify.com'
    },
    // footer: {
      // contact: [
      //   {
      //     type: 'github',
      //     link: 'https://github.com/vuejs/vuepress',
      //   },
      //   {
      //     type: 'twitter',
      //     link: 'https://github.com/vuejs/vuepress',
      //   },
      // ],
    //   copyright: [
    //     {
    //       text: 'Privacy Policy',
    //       link: 'https://policies.google.com/privacy?hl=en-US',
    //     },
    //     {
    //       text: 'MIT Licensed | Copyright © 2018-present Vue.js',
    //       link: '',
    //     },
    //   ],
    // },
    // newsletter: 'mailchimp url'
    // comment: {
    //   service: 'vssue',
    //   owner: 'You',
    //   repo: 'Your repo', 
    //   clientId: 'Your clientId',
    //   clientSecret: 'Your clientSecret',
    // }
  },
  env: {
    // CMS_API: process.env.CMS_API,
    // DISQUS_API_KEY: process.env.DISQUS_API_KEY
  },
}