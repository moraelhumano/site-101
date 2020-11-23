import React from "react"

const Methodology = () => (
  <section className="container presentation-container margin-top-lg container-presentation">
    <div>
      <h2>Aprende como aprenden los profesionales</h2>

      <p>
        Nuestra metodología está basada en los buenos habitos de estudio que
        llevan los grandes programadores en su día a día:{" "}
        <b>Investigar mucho, leer más y prácticar toda la noche.</b>
      </p>
    </div>
    <iframe
      width="560"
      className="align-self"
      height="315"
      src="https://www.youtube.com/embed/AiGqigA9PCg"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </section>
)

export default Methodology
