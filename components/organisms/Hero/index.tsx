import React from "react"

import styles from "./index.module.scss"

import Section from "../../atoms/Section"

import {about} from "@utilities/info"
import BigHeading from "@organisms/BigHeading"
import Projects from "@organisms/Projects"
import Skills from "@molecules/Skills"
import Cursor from "@atoms/Cursor"
import MyPath from "@atoms/MyPath"
import GlassCard from "@atoms/GlassCard"

const Index = () => {
  // const color = "var(--transparent-pink)"

  return (
    <div>
      {/* <Cursor /> */}
      <header>
        <BigHeading />
      </header>
      <div className={styles.sectionWrap}>
        <Section title={"About me"} id={"about"}>
          <GlassCard className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={"My Path"} id={"mypath"}>
          <MyPath />
        </Section>
        <Section title={"My projects"} id={"projects"} reversed>
          <Projects />
        </Section>
        {/* <Section title={"Hard skills"} id={"skills"}>
          <Skills />
        </Section> */}
      </div>
    </div>
  )
}

export default Index
