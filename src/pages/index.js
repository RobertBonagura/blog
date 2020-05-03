import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Welcome from "../components/welcome"
import Header from "../components/header"

export default ({ data }) => (
  <div>
    <Welcome></Welcome>
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>
        What do I like to do? Lots of course. One thing for sure is learning new technologies, 
        building something with them, and then sharing how to with others.
      </p>
      <p> 
        Regardless of how small an accomplishment is, it is worth sharing and celebrating.</p>
      <p>
        I am going to use this blog to detail how I use AWS to deploy my very own website, how I dynamically generate
        content for it with Gatsby, and everything else I learn along the way.
      </p>
    </Layout>
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