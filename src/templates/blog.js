import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: {eq: $slug}) {
      createdAt
      slug
      title
      body {
        childContentfulRichText {
          html
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.contentfulBlog.title}</h1>
      <time>{data.contentfulBlog.createdAt}</time>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulBlog.body.childContentfulRichText.html }}></div>
    </Layout>
  )
}

export default BlogPage
