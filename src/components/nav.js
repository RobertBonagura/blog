import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} className={layoutStyles.navLink}
    activeClassName={layoutStyles.activeLink}>{props.children}</Link>
  </li>
)

export default ( props ) => (
  <ul style={{ listStyle: `none`, float: `right`, marginTop: `0rem` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
  </ul>
)