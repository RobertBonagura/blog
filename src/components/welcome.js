import React from "react"
import welcomeStyles from "./welcome.module.css"
import Arrow from "../img/scroll-down.png"

export default () => (
  <div className={ welcomeStyles.container }>
    <div className={ welcomeStyles.photoContainer }>
      <div className={ welcomeStyles.text }>
        <h3>Hello, welcome to</h3>
        <h1>Bright Eyed Solutions</h1>
        <p>Where quality matters</p>
      </div>
    </div>
  </div>
)