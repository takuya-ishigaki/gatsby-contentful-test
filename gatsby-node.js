/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions } = gatsbyNodeHelpers
  const { createPage } = actions

  const graphqlData = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      },
      allContentfulNews {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  graphqlData.data.allContentfulBlog.edges.forEach((item) => {
    createPage({
      path: `/blog/${item.node.slug}`,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        slug: item.node.slug
      }
    })
  })

  graphqlData.data.allContentfulNews.edges.forEach((item) => {
    createPage({
      path: `/news/${item.node.slug}`,
      component: path.resolve(`./src/templates/news.js`),
      context: {
        slug: item.node.slug
      }
    })
  })
}