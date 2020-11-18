import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>¡Agradecemos tu interés!</h1>
      <p>
        Mantente al tanto en nuestras redes sociales para enterarte de los
        siguientes pasos
      </p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Sigue aprendiendo con Tech 101
      </Link>
    </div>
  </Layout>
)

export default Thanks
