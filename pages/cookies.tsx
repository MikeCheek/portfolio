import Layout from "@organisms/Layout"
import SEO from "next-head-seo"
import React from "react"

const Cookies = () => {
  return (
    <>
      <SEO title="Cookies Policy" description="Information about cookies used on the website." pathname="/cookies/" />
      <Layout noBackground>
        <div style={{maxWidth: "800px", margin: "0 auto", padding: "40px 20px"}}>
          <h1>Cookies Policy</h1>
          <div
            style={{
              marginTop: "40px",
              width: "90vw",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              border: "0",
              borderTop: "1px solid var(--orange)",
            }}
          >
            <script
              id="CookieDeclaration"
              src="https://consent.cookiebot.com/c84fc9aa-4627-4323-8c9a-151289867272/cd.js"
              type="text/javascript"
              async
            ></script>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Cookies
