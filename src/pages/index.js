import React from "react"
import { graphql } from "gatsby"
import Welcome from "../components/welcome"
import Header from "../components/header"
import Footer from "../components/footer"
import layoutStyles from "../components/layout.module.css"

export default ({ data }) => (
  <div className={layoutStyles.layoutContainer}>
    <Welcome></Welcome>
    <Header></Header>
    <div className={layoutStyles.center}>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>
        What do I like to do? Lots of course. One thing for sure is learning new technologies, 
        building something with them, and then sharing how to with others.
      </p>
    </div>
    <div>
      <p>Woah this is way over here!</p>
    </div>
    <div className={layoutStyles.center}>
      <p> 
        Regardless of how small an accomplishment is, it is worth sharing and celebrating.</p>
      <p>
        I am going to use this blog to detail how I use AWS to deploy my very own website, how I dynamically generate
        content for it with Gatsby, and everything else I learn along the way.
      </p>
      <div className={layoutStyles.content}>
      </div>
    </div>
    <Footer></Footer>
  </div>
  
)

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {
    fields: [frontmatter___date], 
    order : DESC
  }) {
    edges {
      node {
        frontmatter {
          title,
          date,
          description
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`