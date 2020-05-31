import React from "react"
import cardstyle from "./styles/card.module.css"

export default (props) => (
  <div to ="/about" className={cardstyle.card}>
    <h3>{props.title}</h3>
    <p className={cardstyle.date}>{props.date}</p>
    <p className={cardstyle.description}>{props.children}</p>
  </div>
)