import React from "react"

const Presentation = () => (
  <section className="container presentation-container margin-top-zero margin-top-lg container-presentation">
    <img
      src={require("../../static/assets/img2.png")}
      className="logo img-presentation"
    />
    <div>
      <h2>Aprender es más fácil en equipo.</h2>

      <p>
        Somos una comunidad de talento digital formada por programadores y
        diseñadores . A los que además de la pasión por crear software de
        impacto, nos une el gusto por <b>compartir</b> lo que sabemos, nuestro
        objetivo es ayudar a <b>romper la brecha digital</b>, haciendo que los
        usuarios dejen de ser solo usuarios y se conviertan también en
        creadores.
      </p>
    </div>
  </section>
)

export default Presentation
