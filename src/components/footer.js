import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

export default () => (
  <footer id="footer"style={{ position: `absolute`, bottom: 0, width: `100%`, height: `2.5rem`, marginTop: `10px` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h6 style={{ display: `inline` }}>Bright Eyed Solutions LLC</h6>
    </Link>
    <Nav></Nav>
  </footer>
)