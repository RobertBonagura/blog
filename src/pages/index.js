import React from "react"
import { graphql } from "gatsby"
import Welcome from "../components/welcome"
import Header from "../components/header"
import Footer from "../components/footer"
import Card from "../components/card"
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
    {/* <div className={layoutStyles.grid}> */}
    <div className={layoutStyles.center}>
      {/* <div style={{ gridArea: `l1` }}> */}
      <div style={{ gridArea: `center` }}>
          <Card title="Bright Eyed Solutions is here to help provide answers" >
          <p>Navigating through the current digital age has its challenges.</p>
          <p>That's why we provide help with:
            <ul>
              <li>Designing a website for your business</li>
              <li>Finding the right domain name</li>
              <li>Hosting your website</li>
              <li>Getting the most SEO from your website</li>
            </ul>
          </p>
        </Card>
      </div>
      {/* <div style={{ gridArea: `r1`}}> */}
      <div style={{ gridArea: `center` }}>
        <Card title="Products and Services built with Integrity and Empathy">
          <p>You should not have to overpay server space in order to host your website.</p>
          <p>This means taking a thorough understanding of your business's needs and requirements.</p>
        </Card>    
      </div>
      {/* <div style={{ gridArea: `l2`}}> */}
      <div style={{ gridArea: `center` }}>
        <Card title="Get your business noticed">
          <p>Wrapping your head around Search Engine Optimization (SEO) can be challenging at first.</p>
          <p>It is essential in order for search engines to find and display your content.</p>
          <p>Our websites are built with SEO in mind so that your customers can find your content.</p>
        </Card>
      </div>
      <div style={{ gridArea: `center`}}>
        <Card title="Have quesitons?">
          <p>Don't hesistate to ask us</p>
          <p>Contact Form</p>
        </Card>
      </div>
    </div>
    <div className={layoutStyles.content}></div>
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