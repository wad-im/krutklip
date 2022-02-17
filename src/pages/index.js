import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Sections from "../components/sections"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Sidebar/>
    <Hero/>
    <Sections/>
  </Layout>
)

export default IndexPage
