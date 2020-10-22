const path = require('path')
const { fetchToMarkdown } = require('fetch-to-markdown')

fetchToMarkdown('https://working-title-dev-blog.herokuapp.com', 'articles', {
  contentDir: path.join(__dirname, '../blog/_posts')
}) 