require('dotenv-defaults').config()

module.exports = {
  title: 'AWZM.dev',
  description: 'A blog by awesome devs for awesome devs',
  head: [
    ['link', { rel: 'icon', href: '/awzm.gif' }]
  ],
  serviceWorker: true,
  evergreen: true, // disables ES5 transpilation and polyfills for IE
  plugins: {
    '@vuepress/google-analytics': {
      ga: process.env.GA_ID,
    },
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
    repo: 'awzm.dev',
    domain: process.env.DOMAIN,
    hostname: process.env.HOST,
    smoothScroll: true,
    pwa: {
      serviceWorker: true,
      updatePopup: true
    },
    sitemap: {
      hostname: process.env.HOST
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/awzm-dev/awzm.dev',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/HoukasaurusRex',
        }
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2020-present AWZM.DEV',
          link: '',
        }
      ]
    },
    newsletter: {
      endpoint: process.env.MAILCHIMP_URL
    },
    comment: {
      service: 'vssue',
      owner: 'awzm-dev',
      repo: 'awzm.dev', 
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    feed: {
      canonical_base: process.env.HOST,
      is_feed_page: $page => {
        if ($page.frontmatter.layout !== 'Post') {
          return false
        }
        $page.frontmatter.feed = {
          image: $page.frontmatter.cover,
          author:[{
            name: $page.frontmatter.author
          }],
        }
        return true
      }
    }
  },
  env: {
    CMS_API: process.env.CMS_API
  }
}