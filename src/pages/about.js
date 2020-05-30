import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Hi, I'm Bobby</h1>
    <p>
        What do I like to do? Lots of course. One thing for sure is learning new technologies, 
        building something with them, and then sharing how to with others.
    </p>
    <p>
      I started Bright Eyed Solutions with the intention of being able to share the things I learned with other people. 
      I blog about my technical experience to help other developers learn about some of the tools they can use.
    </p>
    <p>
      Not technical yourself? This is why I've started offering solutions to small businesses and entrepreneurs who want help making
      an online presence.
    </p>
  </Layout>
)

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`