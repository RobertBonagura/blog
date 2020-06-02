import React from "react"
import welcomeStyles from "./styles/welcome.module.css"

export default ( props ) => (
  <div className={ welcomeStyles.container }>
    <div className={ welcomeStyles.photoContainer }>
      <div className={ welcomeStyles.text }>
        <h3>Hello, welcome to</h3>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
  </div>
)