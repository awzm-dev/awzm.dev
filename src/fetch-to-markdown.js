require('dotenv-defaults').config()
const path = require('path')
const { fetchToMarkdown } = require('fetch-to-markdown')

fetchToMarkdown(process.env.CMS_API, 'articles', {
  contentDir: path.join(__dirname, '../blog/_posts')
}) 