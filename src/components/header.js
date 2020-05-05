import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Nav from "./nav"
import layoutStyles from "./layout.module.css"

export default () => {
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
    <header style={{ margin: `3rem auto 1.5rem` }}>
      <Link to="/" className={ layoutStyles.link }>
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
      </Link>
      <Nav></Nav>
    </header>
  )
 }