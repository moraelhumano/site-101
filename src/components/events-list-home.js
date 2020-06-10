
import React from "react"
import { Link} from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import EventCard from "./post-card"

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2>Estos son nuestros próximos talleres <strong>ver más</strong> <span class="icon -right"><RiArrowDownLine/></span></h2>
    <div className="grids col-1 sm-2 lg-3">
      {data}
    </div>
    <Link className="button" to="/blog">Ver más<span class="icon -right"><RiArrowRightSLine/></span></Link>
  </section>
)

export default function EventsListHome() {
  return "Hola mundo!";
}