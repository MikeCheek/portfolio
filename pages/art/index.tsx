import React from "react"
import CursorContext from "../../utilities/useCursorContext"
import Layout from "@organisms/Layout"
import SEO from "@atoms/Seo"
import ArtCategories from "@molecules/ArtCategories"

const Index = ({ num }: { num: number }) => {
  return (
    <>
      <SEO
        title={"Michele Pulvirenti"}
        description={
          "Hi, I'm a developer and I'm currently working on the web. I love building cool websites with amazing animations and always strive to improve my skills."
        }
        googleSiteVerification={"I4IPeMDb8LK64z0WfFe8k8Ep4XWwHih824Fu6F8fy64"}
        bingSiteVerification={"40DAF13A693A13CA237525B8B8F584D1"}
        pathname={"/"}
      />
      <Layout noGameLink noBackground>
        <ArtCategories randNum={num} />
      </Layout>
    </>
  )
}

export default Index

export async function getServerSideProps() {
  const randNum = Math.random()
  return {
    props: {
      num: randNum,
    },
  }
}