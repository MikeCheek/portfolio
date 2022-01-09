import * as React from "react"
import Hero from "../components/hero/hero"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'

import "../styles/globals.scss"

const IndexPage = ():JSX.Element => {
  return (
    <Layout>
      <div>
        <SEO title={"Michele Pulvirenti"} />
        <Hero />
      </div>
    </Layout>
  )
}

export default IndexPage
