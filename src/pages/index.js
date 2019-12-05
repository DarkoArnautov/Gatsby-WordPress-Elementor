import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Link to="/study-abroad/">Study Abroad</Link> <br/>
    <Link to="/sample-page/">Sample Page</Link><br/>
    <Link to="/study-abroad-columbia/">Study Abroad Colombia</Link><br/>
    <Link to="/study-abroad-thankyou/">Study Abroad Thank you</Link><br/>
    <Link to="/au/">Au</Link><br/>
  </Layout>
)

export default IndexPage
