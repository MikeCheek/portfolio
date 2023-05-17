import React from "react"
import Layout from "@organisms/Layout"
import SEO from "@atoms/Seo"
import InfoHero from "@organisms/InfoHero"

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
