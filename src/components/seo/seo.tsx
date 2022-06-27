import React from 'react'
import {Helmet} from 'react-helmet'
//import { useStaticQuery, graphql } from "gatsby"
import {SEOProps /*QueryTypes*/} from './seo.types'
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  pathname,
  googleSiteVerification,
}: SEOProps): JSX.Element => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription: string = description || site.siteMetadata.description
  //const defaultTitle = site.siteMetadata?.title
  const defaultTitle: string = 'Portfolio'
  const url: string = 'https://michelepulvirenti.gtsb.io'
  const image: string = url + '/logo.png'
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
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
          property: `og:url`,
          content: url,
        },
        {
          property: `og:site_name`,
          content: title,
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
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        googleSiteVerification
          ? {
              name: `google-site-verification`,
              content: googleSiteVerification,
            }
          : {},
      ]
        .concat(
          image
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  property: 'og:image:width',
                  content: '200px',
                },
                {
                  property: 'og:image:height',
                  content: '200px',
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ]
        )
        .concat(meta)}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" as="style" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=swap" as="style" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=swap" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
      {pathname ? <link rel="canonical" href={`${canonical}`} /> : <></>}
    </Helmet>
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
