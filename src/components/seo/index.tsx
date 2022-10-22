import React from 'react'
import NextHeadSeo from 'next-head-seo'
import config from '../../../next.config.js'
//import { useStaticQuery, graphql } from "gatsby"
import {SEOProps /*QueryTypes*/} from './index.types'

const Index = ({
  description = '',
  // lang = 'en',
  meta = [],
  title,
  pathname,
  googleSiteVerification,
  bingSiteVerification,
}: SEOProps): JSX.Element => {
  const metaDescription = description || config.description
  const defaultTitle: string = title + '| Portfolio'
  const url: string = 'https://mikecheek.github.io/portfolio'
  const image: string = url + '/logo.png'
  const canonical = pathname ? `${config.siteUrl}${pathname}` : null

  return (
    <NextHeadSeo
      title={title}
      canonical={canonical ?? url}
      og={{
        title: defaultTitle,
        description: metaDescription,
        url: url,
        image: image,
        type: 'website',
        siteName: title,
      }}
      twitter={{
        card: image ? 'summary_large_image' : 'summary',
      }}
      customMetaTags={[
        {
          name: `google-site-verification`,
          content: googleSiteVerification ?? '',
        },
        {
          name: `msvalidate.01`,
          content: bingSiteVerification ?? '',
        },
        {
          property: 'og:image:width',
          content: '200px',
        },
        {
          property: 'og:image:height',
          content: '200px',
        },
        ...meta,
      ]}
      customLinkTags={[
        {
          href: 'https://fonts.googleapis.com/css?family=Montserrat:700&display=optional',
          rel: 'stylesheet',
        },
        {
          href: 'https://fonts.googleapis.com/css?family=Rubik:300,700&display=optional',
          rel: 'stylesheet',
        },
      ]}
    />
  )
}

export default Index
