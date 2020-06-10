import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Sitio creado por la comunidad de Tech 101<span className="icon -love"><RiHeart2Line/></span> para <Link to="/">Sel resto de la comunidad tech</Link></p>
    </div>
  </footer>
)

export default Footer