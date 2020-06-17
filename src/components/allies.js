import React from "react"

const Allies = () => (
  <section className="container allies-container  container-presentation">
    <h2 className="text-center">Trabajamos de la mano con las comunidades de talento y estos son algunos de nuestros aliados</h2>
    <div>
      <a href="https://bit.ly/2Y9vj0C"><img src={require('../../static/assets/gdgunam.png')} className="logo img-presentation" /></a>
      <a href="https://bit.ly/2zDjPci">
      <img src={require('../../static/assets/9no.jpg')} className="logo img-presentation" />
      </a>
    </div>
  </section>
)

export default Allies