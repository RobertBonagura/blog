import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Footer from "./footer"
import layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} className={layoutStyles.navLink}
    activeClassName={layoutStyles.activeLink}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <body>
      <div style={{ position: `relative`, minHeight: `100vh`, maxWidth: 750, margin: `auto`, padding: `0 1rem` }}>
        <header style={{ margin: `3rem auto 1.5rem` }}>
          <Link to="/" className={ layoutStyles.link }>
            <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header> 
        <div style={{ paddingBottom: `2.5rem`}} >
          {children}
        </div>
        <Footer></Footer>
      </div>
    </body>
  )
 }