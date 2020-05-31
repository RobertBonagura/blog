import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlogLayout from "../components/blogLayout"
import layoutStyles from "../components/styles/layout.module.css"


export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <BlogLayout>
      <div className={layoutStyles.blogPostContainer} >
        <h1>{post.frontmatter.title}</h1>
        <Img fluid={featuredImgFluid} style={{marginTop: "40px", marginBottom:"80px"}}/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </BlogLayout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`