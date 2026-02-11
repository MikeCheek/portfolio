import Layout from "@organisms/Layout"
import SEO from "next-head-seo"
import Script from "next/script"
import React from "react"

const Cookies = () => {
  return (
    <>
      <SEO title="Cookies Policy" description="Information about cookies used on the website." pathname="/cookies/" />
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/c84fc9aa-4627-4323-8c9a-151289867272/cd.js"
        type="text/javascript"
      ></Script>
    </>
  )
}

export default Cookies
