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
  const { frontmatter } = markdownRemark

  return  (
    <Layout className="container contact-page margin-top-xlg"> 
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />

      <section className="hero-register">
        <div className="hero-register-img">
          <img src={require('../../static/assets/herobatch03.png')} className="img-hero-register align-self" alt="logo-registro" />  
        </div>

        <div className="copy-register">
          <p className="title-blog text-center">
            <b>¡Se busca talento!</b>
          </p>
          <p>En la pandemia se han perdido empleos que nunca van a regresar, puestos que ya no son necesarios para la nueva normalidad, es por eso que en <b>Tech 101</b> lanzamos el <b>3er batch</b> de nuestro bootcamp con el que continuaremos capacitando cada día a más talentos con las habilidades tech que hoy el mundo necesita.</p>
          <p>Durante un mes aprenderás los temas que te permitirán crear sitios web bajo la <b>metodología 101</b> con la que desarrollarás las habilidades que todos los programadores deben de tener.</p>
          <p className="margin-top-lg">
            <b>Para registrarte al proceso de selección solo debes de cumplir los siguientes requisitos:</b>
          </p>
          <ol>
            <li>Llenar el formulario</li>
            <li>Síguenos en nuestras redes  
                <b> <a href="https://www.facebook.com/somostech101" target="_blank">FACEBOOK</a></b> e <b><a href="https://www.instagram.com/somostech101/" target="_blank">INSTAGRAM</a></b> 
            </li>
            <li>Comparte en tu muro de Facebook la esta <a href="https://www.facebook.com/somostech101/photos/a.341360506439373/813015829273836" target="_blank"><b>PUBLICACIÓN</b></a></li>
            <li>En la misma publicación etiqueta a tus amigos con los que te gustaría aprender a programar</li>
          </ol>
          <p className="margin-top-lg"><b>Mantente al tanto del proceso de selección en nuestras redes sociales</b></p>
          <p><b>Cierre de convocatoria 1 Enero 2021</b></p>
          <p><b>Términos y condiciones:</b></p>
          <p>La fecha de inicio de clases puede cambiar sin previo aviso</p>
          <p>De no cumplir los requisitos no se otorgará la beca</p>
        </div>

      </section>
      <section className="container contact-container container-presentation">
        <div className="wrapper margin-top-xlg">
          <h1>{frontmatter.title}</h1>
          <form className="contact-form" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Nombre<input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Email<input type="email" name="email" /></label>
            </p>
            <p>
              <label>Número de contacto<input name="number" /></label>
            </p>
            <p>
              <button className="button" type="submit">Enviar registro <span className="icon -right"  aria-label="arrow" role="img"><RiSendPlane2Line/></span></button>
            </p>
          </form>
        </div>
        <img src={require('../../static/assets/logo.png')} className="logo img-presentation align-self" alt="logo-registro" />
      </section>

    </Layout>
  )
}

export default Contact