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
            blogTitle
          }
        }
      }
    `
  )
  return (
    <header style={{ maxWidth: 750, margin: `3rem auto 1.5rem` }}>
      <Link to="/blog" className={ layoutStyles.link } >
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.blogTitle}</h3>
      </Link><br></br>
      <span style={{ fontSize: `14px`, marginLeft: '0.1rem' }}>powered by</span>
      <Link to="/" className={ layoutStyles.link }>
        <h6 style={{ display: `inline` }}> {data.site.siteMetadata.title}</h6>
      </Link>
      <div style={{marginTop: `-2.8rem`}}>
      <Nav></Nav>
      </div>
    </header>
  
  )
 }