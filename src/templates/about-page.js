import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Batch from "../components/batch03"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="container">
      <SEO title={frontmatter.title} description={excerpt} />
      <Batch/>
    </Layout>
  )
}

export default AboutPage
