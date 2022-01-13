import React, {useEffect} from "react"
import Hero from "../components/hero/hero"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'

import "../styles/globals.scss"

const IndexPage = ():JSX.Element => {

  const animateKeyDown = (key: any) => {
    if(key.keyCode === 79) //o
      document.body.style.color = "var(--orange)";
    if(key.keyCode === 80) //p
      document.body.style.color = "var(--pink)";
    if(key.keyCode === 187){ //+
      document.body.style.transform = "scale(1.5)";
      document.body.style.overflowX = "scroll";
    }
    if(key.keyCode === 189) //-
      document.body.style.transform = "scale(0.5)";
    if(key.keyCode === 85) //u
      document.body.style.textDecoration = "underline";
    if(key.keyCode === 84) //t
      document.body.style.webkitTextStroke = "thick";

  }
  const animateKeyUp = (/*key: any*/) => {
      document.body.style.cssText = "none";
  }

  useEffect(() => {
    document.addEventListener('keydown', animateKeyDown);
    document.addEventListener('keyup', animateKeyUp);
  }, [])

  return (
    <Layout>
      <div>
        <SEO 
          title={"Michele Pulvirenti"} 
          description={"Since I was a child I have always had a passion for everything there is computer science, so I'm attending the third year of studies in Computer Engineering at the Polytechnic of Turin."} 
          />
        <Hero />
      </div>
    </Layout>
  )
}

export default IndexPage
