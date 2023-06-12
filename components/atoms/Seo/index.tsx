import React from "react"
import NextHeadSeo from "next-head-seo"
import config from "../../../properties"
//import { useStaticQuery, graphql } from "gatsby"
import {SEOProps /*QueryTypes*/} from "./index.types"
import Head from "next/head"

const Index = ({
  description = "",
  // lang = 'en',
  meta = [],
  title,
  pathname,
  googleSiteVerification,
  bingSiteVerification,
}: SEOProps): JSX.Element => {
  const metaDescription = description || config.description
  const defaultTitle: string = title + " | Portfolio"
  const url: string = config.url
  const image: string = url + "/logo.png"
  const canonical = pathname ? `${config.siteUrl}${pathname}` : null
  const name = "Michele Pulvirenti"

  const shcemaOrgPerson = {
    "@context": "https://www.schema.org",
    "@type": "Person",
    "@id": url,
    name: name,
    alternateName: name,
    nationality: "Italian",
    gender: "Male",
    Description: "Developer and student",
    // disambiguatingDescription: "",
    jobTitle: "Developer",
    email: "pulvirentimichele00@gmail.com",
    url: url,
    image: image,
    sameAs: ["https://www.linkedin.com/in/michele-pulvirenti/", "https://github.com/MikeCheek"],
  }

  const schemaOrgWebPage = {
    "@context": "https://www.schema.org",
    "@type": "WebSite",
    url: url,
    inLanguage: "en",
    mainEntityOfPage: url,
    description: metaDescription,
    name: defaultTitle,
    author: {
      "@type": "Person",
      name: name,
    },
    copyrightHolder: {
      "@type": "Person",
      name: name,
    },
    copyrightYear: "2023",
    creator: {
      "@type": "Person",
      name: name,
    },
    publisher: {
      "@type": "Person",
      name: name,
    },
    datePublished: new Date(Date.now()).toISOString(),
    dateModified: new Date(Date.now()).toISOString(),
    image: {
      "@type": "ImageObject",
      url: image,
    },
  }

  return (
    <>
      <NextHeadSeo
        title={defaultTitle}
        description={metaDescription}
        canonical={canonical ?? url}
        og={{
          title: defaultTitle,
          description: metaDescription,
          url: url,
          image: image,
          type: "website",
          siteName: title,
        }}
        twitter={{
          card: "summary",
          site: url,
        }}
        customMetaTags={[
          {
            name: `google-site-verification`,
            content: googleSiteVerification ?? "",
          },
          {
            name: `msvalidate.01`,
            content: bingSiteVerification ?? "",
          },
          {
            property: "og:image:width",
            content: "200px",
          },
          {
            property: "og:image:height",
            content: "200px",
          },
          {
            property: "twitter:image",
            content: image,
          },
          {
            property: "twitter:title",
            content: defaultTitle,
          },
          {
            property: "twitter:description",
            content: metaDescription,
          },
          ...meta,
        ]}
      />
      <Head>
        <script
          type="application/ld+json"
          key="product-jsonld"
          dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "http://schema.org",
          "@graph": [
          ${JSON.stringify(shcemaOrgPerson)}, 
          ${JSON.stringify(schemaOrgWebPage)}      
        ]           
        }`,
          }}
        ></script>
      </Head>
    </>
  )
}

export default Index
