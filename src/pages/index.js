import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allContentfulBlog {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulNews {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const blogList = data.allContentfulBlog.edges
  const newsList = data.allContentfulNews.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Gatsby Contentful Test</h1>
      <h2>ブログ</h2>
      <ul>
        {blogList.map((item, index) => (
          <li key={index}>
            <Link to={`/blog/${item.node.slug}`}>{item.node.title}</Link>
          </li>
        ))}
      </ul>
      <h2>ニュース</h2>
      <ul>
        {newsList.map((item, index) => (
          <li key={index}>
            <Link to={`/news/${item.node.slug}`}>{item.node.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
