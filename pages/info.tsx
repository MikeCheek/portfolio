import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoHero from "../components/infoHero"

const InfoPage = () => {
  return (
    <>
      <SEO title="Info" description="Just multiple test" pathname="/info/" />
      <Layout>
        <InfoHero />
      </Layout>
    </>
  )
}

export default InfoPage
