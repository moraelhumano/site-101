import React from "react"

const SocialMedia = () => (
  <section className="container presentation-container  margin-top-lg container-presentation">
    <iframe
      width="560"
      className="align-self"
      height="315"
      src="https://www.youtube.com/embed/yepmB0RghyU"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  <div className="text-right margin-left-sm">
    <h2 className="margin-top-zero">Síguenos en nuestras redes</h2>

    <p>
      Además de nuestro bootcamp puedes seguirnos en nuestras redes en las que <b>compartimos contenido</b> que te será de gran ayuda durante tu formación como como programador.
    </p>
  </div>
</section>
)

export default SocialMedia
