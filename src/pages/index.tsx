import * as React from "react"
//@ts-ignore
import AnimatedBg from '../assets/animated-bg.svg'
import SEO from '../components/seo/seo'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const backgroundStyle = {
  zIndex: -1,
  width: "100vw",
  height: "100%",
  margin: "-110px",
  position: "fixed",
}

// markup
const IndexPage = ():JSX.Element => {
  return (
    <main style={pageStyles}>
      <SEO title={"Home Page"} />
      <AnimatedBg style={backgroundStyle} />
    </main>
  )
}

export default IndexPage
