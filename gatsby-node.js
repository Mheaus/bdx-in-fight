const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const ArticleTemplate = path.resolve('./src/templates/article.tsx')

    resolve(
      graphql(
        `
          {
            allContentfulArticle {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulArticle.edges

        posts.forEach((post, index) => {
          createPage({
            path: `/article/${post.node.slug}/`,
            component: ArticleTemplate,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
