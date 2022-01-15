import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"

import Rocket from '../assets/rocket.svg'
import { useThemeContext } from "../utilities/themeContext"

const NotFoundPage = (): JSX.Element => {

  const theme = useThemeContext()

  return (
    <>
      <SEO title={"Not found"} />
      <Layout>
        <>
          <h1>Page not found</h1>
          <p>
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            we couldn't find what you were looking for.
            <Rocket width={"200px"} fill={theme === "dark" ? "var(--orange)" : "var(--black)"} />
            <br />
            {process.env.NODE_ENV === "development" ? (
              <>
                <br />
                Try creating a page in <code>src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
            <Link to="/">Go home</Link>.
          </p>
        </>
      </Layout>
    </>
  
  )
}

export default NotFoundPage
