import React from "react"
import {ArtImage, categories} from "@utilities/artImages"
import ArtGallery from "@molecules/ArtGallery"
import Layout from "@organisms/Layout"
import Link from "next/link"

interface IndexProps {
  error: boolean
  images: ArtImage[]
  title: string
  description?: string
}

const Index = ({error, images, title, description}: IndexProps) => {
  return (
    <Layout noBackground noGameLink>
      <Link href="/art" className="goBack">
        &lt;
      </Link>
      <h1 className="artTitle">{title}</h1>
      {description ? <p className="artDescription" dangerouslySetInnerHTML={{__html: description}} /> : <></>}
      {!error ? <ArtGallery images={images} /> : <h2>Gallery not found</h2>}
    </Layout>
  )
}
export default Index

export async function getServerSideProps({params}: {params: {slug: string}}) {
  const {slug} = params

  const validSlugs = categories.map((cat) => cat.link.split("/").pop()).filter((cat) => cat !== undefined)

  if (!validSlugs.includes(slug)) {
    return {
      props: {
        error: true,
        images: [],
        title: "404",
      },
    }
  }

  const currentCategory = categories.find((cat) => cat.link.split("/").pop() === slug)!

  const currentImages = currentCategory.images.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return 0
  })

  return {
    props: {
      error: false,
      images: currentImages,
      title: currentCategory.name,
      description: currentCategory.description ?? "",
    },
  }
}
