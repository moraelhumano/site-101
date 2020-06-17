import React from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <Layout className="container contact-page margin-top-xlg"> 
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
 

      <section className="container contact-container container-presentation">

      <img src={require('../../static/assets/logo.png')} className="logo img-presentation align-self" />

      <div className="wrapper margin-top-xlg">
        <h1>{frontmatter.title}</h1>
        <p>
          Nuestro bootcamp está orientado a principiantes con el objetivo de integrarse a la industria tech
        </p>
        <form className="contact-form" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Nombre<input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Email<input type="email" name="email" /></label>
          </p>

          <p>
            <label>Contáctame por Whatsapp<input name="number" /></label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">Enviar registro <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
        </form>
      </div>
  </section>

    </Layout>
  )
}

export default Contact