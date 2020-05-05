import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

export default () => (
  <footer id="footer"style={{position:`absolute`, width: `100%`, height: `2.5rem`, maxWidth: 750, bottom: 0, left: `50%`, marginLeft: `-375px`}}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h6 style={{ display: `inline` }}>Bright Eyed Solutions LLC</h6>
    </Link>
    <Nav></Nav>
  </footer>
)