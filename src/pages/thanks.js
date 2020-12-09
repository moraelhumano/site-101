import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page ">
    <SEO title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >

      <section className="margin-top-lg padding-responsive-contaner">
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
        <h1>¡Agradecemos tu interés!</h1>
        <p>Recuerda que para continúar el proceso de selección deberas de:</p> 
        <p>* Seguirnos en nuestras redes <b> <a href="https://www.facebook.com/somostech101" target="_blank">FACEBOOK</a></b> e <b><a href="https://www.instagram.com/somostech101/" target="_blank">INSTAGRAM</a></b> </p>
        <p>* Compartir la siguiente publicación de Facebook,  <a href="https://www.facebook.com/somostech101/photos/a.341360506439373/813015829273836" target="_blank"><b>QUEREMOS SER MÄS TECH Y NECESITAMOS TU AYUDA :D</b></a></p>
        <p>
          Mantente al tanto en nuestras redes sociales para enterarte de los
          siguientes pasos
        </p>
      </section>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Sigue aprendiendo con Tech 101
      </Link>
    </div>
  </Layout>
)

export default Thanks
