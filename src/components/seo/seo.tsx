import React from 'react'
import {Helmet} from 'react-helmet'
//import { useStaticQuery, graphql } from "gatsby"
import {SEOProps /*QueryTypes*/} from './seo.types'
import logo from '../../images/maskableIcons/maskable_icon.png'

const SEO = ({description = '', lang = 'en', meta = [], title, googleSiteVerification}: SEOProps): JSX.Element => {
  //const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery)

  const metaDescription: string = description //|| site.siteMetadata.description
  //const defaultTitle = site.siteMetadata?.title
  const defaultTitle: string = 'Portfolio'
  const image: string = logo
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `google-site-verification`,
          content: googleSiteVerification,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          /*
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        */
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

/*
// Queries
const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
*/

export default SEO
