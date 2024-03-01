import React from "react"

import styles from "./index.module.scss"

import Section from "../../atoms/Section"

// import HSkills from "@assets/skills.svg"
import {about} from "@utilities/info"
import BigHeading from "@organisms/BigHeading"
import Projects from "@organisms/Projects"
import Skills from "@molecules/Skills"
import Model3D from "@atoms/ThreeD"
import Cursor from "@atoms/Cursor"

// const Model3D = lazy(() => import('@atoms/model3D'))

const Index = (): JSX.Element => {
  // const color = "var(--transparent-pink)"

  return (
    <div>
      {/* <Cursor /> */}
      <header>
        <BigHeading />
      </header>
      <div className={styles.sectionWrap}>
        <Section title={"About me"} id={"about"} Model3d={<Model3D />}>
          <div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={"My projects"} id={"projects"} reversed>
          <Projects />
        </Section>
        {/*Svg={{svg: HSkills, fill: color}}>*/}
        <Section title={"Hard skills"} id={"skills"}>
          <Skills />
        </Section>
      </div>
    </div>
  )
}

export default Index
