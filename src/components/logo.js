import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/"><img src={require('../../static/assets/logo.png')} className="logo" /></Link>
  </div>
)

export default Logo