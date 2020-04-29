import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} className={layoutStyles.navLink}>{props.children}</Link>
  </li>
)

export default () => (
  <footer id="footer"style={{ position: `absolute`, bottom: 0, width: `100%`, height: `2.5rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h6 style={{ display: `inline` }}>Big Little Win</h6>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </footer>
)