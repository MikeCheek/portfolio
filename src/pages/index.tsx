import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'
import "../styles/globals.scss"

const IndexPage = ():JSX.Element => {
  return (
    <Layout>
      <div>
        <SEO title={"Home Page"} />

      </div>
    </Layout>
  )
}

export default IndexPage
