import React from "react"
import {anime, ArtImage, drawings, pandify} from "@utilities/artImages"
import ArtGallery from "@molecules/ArtGallery"
import Layout from "@organisms/Layout"

interface IndexProps {
  error: boolean
  images: ArtImage[]
  title: string
}

const Index = ({error, images, title}: IndexProps) => {
  return (
    <Layout noBackground noGameLink>
      <h1>{title}</h1>
      {!error ? <ArtGallery images={images} /> : <h2>Gallery not found</h2>}
    </Layout>
  )
}
export default Index

export async function getServerSideProps({params}: {params: {slug: string}}) {
  const {slug} = params
  const categories: {[key: string]: ArtImage[]} = {
    paper: drawings,
    digital: pandify,
    anime: anime,
  }

  const validSlugs = Object.keys(categories)

  if (!validSlugs.includes(slug)) {
    return {
      props: {
        error: true,
        images: [],
        title: "404",
      },
    }
  }

  const currentImages = categories[slug].sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return 0
  })

  return {
    props: {
      error: false,
      images: currentImages,
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
    },
  }
}
