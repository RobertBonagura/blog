import React from "react"
import BlogHeader from "./blogHeader"
import Footer from "./footer"
import layoutStyles from "./layout.module.css"

export default ({ children }) => {

  return (
    <body>
      <div className={ layoutStyles.layoutContainer }>
        <BlogHeader></BlogHeader>
        <div className={ layoutStyles.center }>
          <div className={ layoutStyles.content }>
            {children}
          </div>
        </div>
        <Footer className={ layoutStyles.center }></Footer>
      </div>
    </body>
  )
}
 