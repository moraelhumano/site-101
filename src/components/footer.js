import React from "react"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer margin-top-lg">
    <div className=" container-rrss">
        <p>
          <span className="icon -love">
            <RiHeart2Line />
          </span>{" "}
          Sitio y programas creados por Tech 101
          para el resto de la comunidad
        </p>
      <div className="icons-rrss padding-responsive-contaner">
        <a href="https://www.facebook.com/somostech101" target="_blank"><img src={require("../../static/assets/facebook.png")} alt="facebook-logo" /></a>
        <a href="https://www.instagram.com/somostech101/" target="_blank"><img src={require("../../static/assets/instagram.png")} alt="facebook-logo" /></a>
        <a href="https://www.youtube.com/watch?v=yepmB0RghyU" target="_blank"><img src={require("../../static/assets/youtube.png")} alt="facebook-logo" /></a>
      </div>
    </div>
  </footer>
)

export default Footer
