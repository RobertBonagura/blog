import React from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.css"

export default ({ children }) => {

  return (
    <body>
      <div style={{ position: `relative`, minHeight: `100vh`, margin: `auto` }}>
        <Header></Header>
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