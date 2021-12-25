import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = ():JSX.Element => {
  return (
    <Layout>
      <div style={pageStyles}>
        <SEO title={"Home Page"} />
      </div>
    </Layout>
  )
}

export default IndexPage
