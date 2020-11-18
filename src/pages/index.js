import React from "react"
import { graphql, Link } from "gatsby"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Presentation from "../components/presentation"
import Methodology from "../components/methodology"
import Allies from "../components/allies"
import SEO from "../components/seo"


export const pageQuery = graphql`
  query Home{
		markdownRemark(fields:{slug:{eq:"/"}}) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
	return (
		<Layout>
      <SEO/>
      <div className="home-banner grids col-1 sm-2">
        <div className="text-hero">
          <h1 className="title ">{frontmatter.title}</h1>
          <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
          <Link to={frontmatter.cta.ctaLink} className="button announcement-button button-responsive">{frontmatter.cta.ctaText}<span className="icon -right"><RiArrowRightSLine/></span></Link>
        </div>
      </div>
      <Presentation className="full-width-por"/>
      <Methodology className="full-width-por"/>
      <Allies className="full-width-por margin-top-xlg "/>
      <BlogListHome className="full-width-por"/>


		</Layout>
	)
}

export default HomePage