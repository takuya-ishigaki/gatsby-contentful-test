import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulNews(slug: {eq: $slug}) {
      createdAt
      slug
      title
    }
  }
`

const NewsPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.contentfulNews.title}</h1>
      <time>{data.contentfulNews.createdAt}</time>
    </Layout>
  )
}

export default NewsPage
