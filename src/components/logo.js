import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
<<<<<<< HEAD
    <Link to="/"><img src={require('../../static/assets/logo2.png')} className="logo" alt="logo101"/></Link>
=======
    <Link to="/">
      <img src={require("../../static/assets/logo2.png")} className="logo" />
    </Link>
>>>>>>> c99d2f397072dd46fd7f83acca9f7e0c821c472b
  </div>
)

export default Logo
