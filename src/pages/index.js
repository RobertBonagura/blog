import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.css"
import Card from "../components/card"

export default ({ data }) => (
  <Layout>
    <h1>Welcome to {data.site.siteMetadata.title}</h1>
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
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link to={node.fields.slug} className={layoutStyles.link}>
        <Card title={node.frontmatter.title} date={node.frontmatter.date}>{node.frontmatter.description}</Card>
      </Link>
    ))} 
    {/*
    <Card title="My most recent article" date="4/20/20">This is a description I hope.</Card>
    <Card title="How to open a can of tuna" date="4/04/20">It's harder than it looks. Seriously</Card>
    <Card title="Hello World" date="3/20/20">My first ever article ever on how to write a beautiful looking blog. </Card>
    */}
  </Layout>
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