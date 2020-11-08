import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
// import "./mystyles.scss"

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <div className="columns">
      <div className="column">
        <h2 className="title is-2">Level 2 heading</h2>
        <p className="content">Cool content. Using Bulma!</p>
      </div>
      <div className="column is-four-fifths">
        <h2 className="title is-2">Level 2 heading</h2>
        <p className="content">This column is cool too!</p>
      </div>
    </div>
  </div>
)

export default IndexPage
