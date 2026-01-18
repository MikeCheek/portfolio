import React from "react"
import SEO from "next-head-seo"
import Layout from "@organisms/Layout"

const PrivacyPage = () => {
  const lastUpdated = "18/01/2026" // Update this date as needed

  return (
    <>
      <SEO title="Privacy Policy" description="Privacy policy and data usage information." pathname="/privacy/" />
      <Layout noBackground>
        <div style={{maxWidth: "800px", margin: "0 auto", padding: "40px 20px"}}>
          <h1>Privacy Policy</h1>
          <p>Last Updated: {lastUpdated}</p>

          <hr style={{margin: "40px 0", border: "0", borderTop: "1px solid var(--orange)", opacity: "0.3"}} />

          <section>
            <h2>General Information</h2>
            <p>
              This website is a personal portfolio designed to showcase my work. I do not collect, sell, or rent any
              personal identification information (such as names, emails, or addresses) through this website.
            </p>
          </section>

          <section>
            <h2>Analytics</h2>
            <p>
              This website is hosted on <strong>Vercel</strong> and utilizes <strong>Vercel Analytics</strong> to help
              me understand how visitors interact with the site (e.g., which pages are most popular).
            </p>
            <ul>
              <li>
                <strong>Privacy by Design:</strong> Vercel Analytics does not use cookies and does not track personal
                data across different websites.
              </li>
              <li>
                <strong>Data Collected:</strong> It collects anonymous data such as page views, browser type, and
                general geographic location (country level).
              </li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Links</h2>
            <p>
              My portfolio contains links to other websites (GitHub, LinkedIn, etc.). If you click on a third-party
              link, you will be directed to that site. Note that these external sites are not operated by me, and I
              strongly advise you to review the Privacy Policy of those websites.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, feel free to reach out to me via LinkedIn or the
              contact methods listed on this site.
            </p>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default PrivacyPage
